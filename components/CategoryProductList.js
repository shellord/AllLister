import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import HomeProductCard from './HomeProductCard'
import { AuthContext } from '../context'

const CategoryProductList = ({ navigation,category}) => {

    const { API_URL,userLat,userLong } = useContext(AuthContext)
    const [productlist, setproductlist] = useState([{}])

    useEffect(() => {
        fetch(API_URL + 'product/category/' + category+"/"+userLat+"/"+userLong)
            .then(response => response.json())
            .then(json => {
                setproductlist(json.response)
            }).catch(e => console.log(e))

    }, [])

    const renderItem = ({ item }) => (
        item.shopid ?
            <HomeProductCard navigation={navigation} id={item.productid} title={item.name} shopId={item.shopid} imageUri={item.image} category={item.category} price={item.price} description={item.description} distance={item.distance} />
            : null
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsScroll={false}
                numColumns={2}
                data={productlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginLeft: 5
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default CategoryProductList
