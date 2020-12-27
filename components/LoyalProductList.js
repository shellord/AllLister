import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, ScrollView, FlatList } from 'react-native'
import { AuthContext } from '../context'
import HomeProductCard from '../components/HomeProductCard'
import {Firebase} from '../config'

const LoyalProductList = ({ searchtext, navigation }) => {

    const { API_URL, userLat, userLong } = useContext(AuthContext)

    const [products, setproducts] = useState([{}])
    const [loyalshop, setloyalshop] = useState(null)
    const [shop, setshop] = useState(null)

    useEffect(() => {
        if (searchtext) {
            fetch(API_URL + "loyalshop/" + Firebase.auth().currentUser.phoneNumber)
                .then(response => response.json())
                .then(json => {
                    setloyalshop(json.response[0].shopId)
                    fetch(API_URL + "lpsearch/" + userLat + "/" + userLong + "/" + json.response[0].shopId+"/"+searchtext)
                    .then(response => response.json())
                    .then(json => {
                        setproducts(json.response)
                        console.log(products)
                    })
                //     fetch(API_URL + "lssearch/" + userLat + "/" + userLong + "/" + loyalshop + "/" + searchtext)
                //     .then(response => response.json())
                //     .then(json => {
                //         setshop(json.response)
                //     })
                // }).catch(e => console.log(e))

            // fetch(API_URL + "psearch/" + userLat + "/" + userLong + "/" + searchtext)
            //     .then(response => response.json())
            //     .then(json => {
            //         setproducts(json.response)
            //     }).catch(e => console.log(e))
            })}


        
    }, [searchtext])

    const renderItem = ({ item }) => (
        <HomeProductCard navigation={navigation} id={item.productid} title={item.name} shopId={item.shopid} imageUri={item.image} category={item.category} price={item.price} description={item.description} distance={item.distance} />
    )

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            {products.length != 0 ?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsScroll={false}
                    numColumns={2}
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> : null

            }
        </ScrollView>
    )
}

export default LoyalProductList

const styles = StyleSheet.create({

})
