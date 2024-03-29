import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Platform, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from '../components/Carousel'
import ProductFlatList from '../components/ProductFlatList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context'
import StoreScreen from '../screens/StoreScreen'
// import ImageGallery from 'react-image-gallery';


const Product = ({ navigation, route }) => {
    const { itemId, itemTitle, itemPrice, itemCategory, itemDescription, itemImage, itemShopName, itemTel } = route.params;
    const { width, height } = Dimensions.get('window')

    const { API_URL, userLat, userLong } = useContext(AuthContext)
    const [relatedproducts, setrelatedproducts] = useState([{}])
    const [producImages, setproducImages] = useState([{}])
    const [instock, setinstock] = useState(1)
    const [shopid, setshopid] = useState(null)
    const [shop, setshop] = useState(null)
    const [isloaded, setisloaded] = useState(0)
    useEffect(() => {
        fetch(API_URL + 'product/' + itemId)
            .then(response => response.json())
            .then(json => {
                setinstock(json.response[0].instock)
                setshopid(json.response[0].shopid)
                console.log(11)
                fetch(API_URL + 'shop/' + userLat + '/' + userLong + '/1/' + json.response[0].shopid)
                    .then(response => response.json())
                    .then(json => {
                        setshop(json.response)
                        setisloaded(1)
                    }).catch(e => console.log(e))
            }).catch(e => alert("Network Error!!!!!"))

        fetch(API_URL + 'productimage/' + itemId)
            .then(response => response.json())
            .then(json => {
                setproducImages(json.response)
            }).catch(e => alert("Network Error!!"))

        fetch(API_URL + 'product/category/' + itemCategory)
            .then(response => response.json())
            .then(json => {
                setrelatedproducts(json.response.filter(e => e.id != itemId))
            }).catch(e => alert("Network Error!!!"))

    }, [itemId])


    return (
        <>
            <ScrollView style={styles.container}>
                {/* <ImageGallery items={Images}/> */}
                {/* <Image source={{uri:'https://i.imgur.com/HzqIYjc.png'}} style={styles.imageStyle} /> */}
                <Carousel data={producImages} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.itemTitle}> {itemTitle}</Text>
                    {!instock ? <Text style={styles.noStock}>❌ OUT OF STOCK</Text> : null}
                </View>

                <Text style={styles.categoryTitle}> [ {itemCategory} ] </Text>
                <Text style={styles.shopName}>Seller → {itemShopName} </Text>
                <Text style={styles.detailsText}> DETAILS </Text>
                <Text style={styles.itemDescription}> {itemDescription}</Text>
                <Text style={styles.relatedText} > RELATED PRODUCTS </Text>
                <ProductFlatList navigation={navigation} data={relatedproducts} shopname={itemShopName} itemTel={itemTel} />
            </ScrollView>
            <View style={styles.infoContainer}>
                <View style={styles.footerPrice}>
                    <Text style={styles.itemPrice}>₹{itemPrice}</Text>
                    <Text style={styles.itemPriceFooter}>TOTAL PRICE</Text>
                </View>
                {/* <TouchableOpacity  onPress={initiateWhatsAppSMS}> */}
                <TouchableOpacity onPress={() => {
                    navigation.navigate('storescreen', {
                        itemId: shopid,
                        itemName: itemShopName,
                        itemTel: itemTel,
                        itemDistance: shop[0].distance,
                        otime: shop[0].openingtime,
                        ctime: shop[0].closingtime,
                        itemImg: shop[0].shopimage,
                        category: shop[0].category
                    })
                }} disabled={!isloaded}>
                    <View style={styles.footerContact}>
                        <Text style={styles.contactText}>CONTACT SHOP</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'column',
    },
    imageStyle: {
        width: '100%',
        height: 210
    },
    noStock: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: 1,
        alignSelf: 'center',
        color: 'red'
    },
    itemTitle: {
        fontSize: 22,
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        marginTop: 10,
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: 'tomato'
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        marginTop: 5,
        color: 'grey',
        textTransform: 'uppercase',
        marginLeft: 2
    },
    shopName: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 10,
        color: 'black',
        textTransform: 'uppercase',
        marginLeft: 6
    },
    itemPrice: {
        fontSize: 38,
        fontWeight: Platform.OS === 'ios' ? "800" : "bold",
    },
    itemPriceFooter: {
        fontSize: 18,
        color: 'lightgrey',
        textAlign: 'center',
    },
    itemDescription: {
        fontSize: 14,
        color: '#2f2f2f',
        marginBottom: 10,
        marginLeft: 5,
        letterSpacing: 1.2

    },
    detailsText: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        textTransform: 'uppercase',
        marginLeft: 3,
        letterSpacing: 0.5,
        color: 'tomato'
    },
    relatedText: {
        marginTop: 10,
        fontSize: 16,
        marginBottom: 10,
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        textTransform: 'uppercase',
        marginLeft: 3,
        letterSpacing: 0.5,
        color: 'tomato'
    },
    infoContainer: {
        flexDirection: 'row',
        padding: 30,
        height: 110,
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerContact: {
        backgroundColor: 'black',
        padding: 17,
    },
    contactText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 12,
    }
})
