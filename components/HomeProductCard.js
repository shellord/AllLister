import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import { AuthContext } from '../context'

const HomeProductCard = ({ id, title, price, category, description, navigation, imageUri, shopId, distance, recommended }) => {

    const { API_URL, UPLOAD_URL } = useContext(AuthContext)
    const [shopname, setshopname] = useState('')
    const [shopnumber, setshopnumber] = useState('')

    let img = ''
    imageUri ? img = UPLOAD_URL + JSON.parse(imageUri)[0].name.replace('/var/www/html/', '') : null
    let dist = ''
    if (distance < 1) {
        dist = Math.round(distance * 1000)
        dist = dist.toString() + ' M'
    } else {
        dist = Math.round(distance) + ' KM'
    }
    useEffect(() => {
        if (shopId) {
            fetch(API_URL + 'shop/id/' + shopId)
                .then(response => response.json())
                .then(json => {
                    setshopname(json.response[0].shopname)
                    setshopnumber(json.response[0].mobilenumber)
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
                itemTel: shopnumber,
                distance: distance
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
                    {/* {distance ? <Text style={styles.productCat}>{dist}</Text> : null} */}
                    {price ? <Text style={styles.priceTag}> ₹{price}.00 INR  </Text> : null}
                    {/* {recommended==1?<Text style={styles.productCat}>RECOMMENDED</Text>:null} */}
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
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        textTransform: 'uppercase',
        letterSpacing: 1,

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
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        color: 'black',
        marginTop: 7,
        marginLeft: -3,
        letterSpacing: 1,
        color: '#FF5733'
    },
    tinyLogo: {
        width: "100%",
        height: 200,
    },
})