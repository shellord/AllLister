import React, { useState, useEffect, useContext } from 'react'
import { Keyboard, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialStoreCard from '../components/MaterialStoreCard'
import HomeProductCard from '../components/HomeProductCard'
import { AuthContext } from '../context'

const ShopSearch = ({ navigation, route }) => {

    const { API_URL, userLat, userLong } = useContext(AuthContext)

    let searchTerm = ''
    route.params ? searchTerm = route.params.searchTerm : ''
    const [searchtext, setsearchtext] = useState(searchTerm)
    const [shops, setshops] = useState([{}])
    const [products, setproducts] = useState([{}])
    useEffect(() => {

        if (searchtext) {
            if (/^[a-zA-Z]+$/.test(searchtext)) {
                fetch(API_URL + "prodsearch/shop/" + route.params.shopId + "/" + searchtext)
                    .then(response => response.json())
                    .then(json => {
                        setproducts(json.response)
                    }).catch(e => console.log(e))
            }
        }
    }, [searchtext])

    const renderItem = ({ item }) => (
        <MaterialStoreCard navigation={navigation} id={item.id} name={item.shopname} storeImg={item.shopimage} logoUri={item.logo} tel={item.mobilenumber} distance={item.distance} otime={item.openingtime} ctime={item.closingtime} category={item.category} />
    )

    const productrenderItem = ({ item }) => (
        <HomeProductCard navigation={navigation} id={item.id} title={item.name} shopId={item.shopid} imageUri={item.image} category={item.category} price={item.price} description={item.description} />
    )

    return (

        <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            <Text style={{ fontSize: 23, fontWeight: '500', marginBottom: 30, textAlign: 'center', marginTop: 50, textTransform: 'uppercase', letterSpacing: 1 }}>SEARCH IN {route.params.shopname}</Text>

            <View style={styles.searchContainer}>
                <Icon style={styles.icon} name="search" size={14} color="black" />
                <TextInput placeholder="Search for products" style={styles.TextInp} onChangeText={text => setsearchtext(text)} value={searchtext} />
            </View>

            {/* {shops.length != 0 ? <FlatList
                data={shops}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />:null} */}
            {products.length != 0 ?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsScroll={false}
                    numColumns={2}
                    data={products}
                    renderItem={productrenderItem}
                    keyExtractor={item => item.id}
                /> : null

            }

        </ScrollView>
    )
}

export default ShopSearch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 30,
        alignItems: 'center'
    },
    TextInp: {
        width: '100%',
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    }
})
