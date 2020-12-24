import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context'

const HomeProductCard = ({ id, title, price, category, description, navigation, imageUri, shopId }) => {

    const { API_URL, UPLOAD_URL } = useContext(AuthContext)
    const [shopname, setshopname] = useState('')
    let img = ''
    imageUri ? img = UPLOAD_URL + JSON.parse(imageUri)[0].name.replace('/var/www/html/', '') : null
    useEffect(() => {
        if (shopId) {
            fetch(API_URL + 'shop/id/' + shopId)
                .then(response => response.json())
                .then(json => {
                    setshopname(json.response[0].shopname)
                }).catch(e => console.log(e))
        }
    }, [])

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('productscreen', {
                itemId: id,
                itemTitle: title,
                itemPrice: price,
                itemCategory: category,
                itemDescription: description,
                itemImage: imageUri,
                itemShopName: shopname,
            });
        }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{ uri: img }}
                    />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>{title}</Text>
                    <Text style={styles.productCat}>{category}</Text>
                    <Text style={styles.priceTag}> ₹{price}.00 INR  </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProductCard

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'white',
        width: 150,
        // height:290,
        // borderRadius:30,
        marginRight: 25,
        borderColor: 'black',
        marginLeft: 15
    },
    detailsContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    productTitle: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: 1

    },
    productCat: {
        marginTop: 7,
        fontSize: 12,
        color: 'grey',
        textTransform: 'uppercase',
        fontWeight: '500',
        letterSpacing: 1
    },
    priceTag: {
        fontSize: 13,
        fontWeight: '400',
        color: 'black',
        marginTop: 7,
        marginLeft: -3,
        letterSpacing: 1
    },
    tinyLogo: {
        width: "100%",
        height: 200,
    },
})