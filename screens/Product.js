import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions,Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from '../components/Carousel'
import ProductFlatList from '../components/ProductFlatList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context'
// import ImageGallery from 'react-image-gallery';


const Product = ({navigation,route}) => {
    const { itemId,itemTitle,itemPrice,itemCategory,itemDescription,itemImage,itemShopName,itemTel} = route.params;
    const { width, height } = Dimensions.get('window')
    
    const { API_URL } = useContext(AuthContext)
    const [relatedproducts, setrelatedproducts] = useState([{}])
    const [producImages, setproducImages] = useState([{}])

    useEffect(() => {
        
        fetch(API_URL + 'productimage/' + itemId)
            .then(response => response.json())
            .then(json => {
                setproducImages(json.response)
            }).catch(e => alert("Network Error!"))

        fetch(API_URL + 'product/category/' + itemCategory)
            .then(response => response.json())
            .then(json => {
                setrelatedproducts(json.response.filter(e => e.id != itemId))
            }).catch(e => alert("Network Error!"))

    }, [itemId])


    return (
        <>
        <ScrollView style={styles.container}>
        {/* <ImageGallery items={Images}/> */}
        {/* <Image source={{uri:'https://i.imgur.com/HzqIYjc.png'}} style={styles.imageStyle} /> */}
        <Carousel data={producImages}/>
        <Text style={styles.itemTitle}> {itemTitle}</Text>
        <Text style={styles.noStock}>OUT OF STOCK</Text>

        <Text style={styles.categoryTitle}> {itemCategory} </Text>
        <Text style={styles.shopName}>Seller : {itemShopName}</Text>
        <Text style={styles.detailsText}> DETAILS </Text>
        <Text style={styles.itemDescription}> {itemDescription}</Text>
        <Text style={styles.detailsText} > RELATED PRODUCTS </Text>
                <ProductFlatList navigation={navigation} data={relatedproducts} shopname={itemShopName} itemTel={itemTel}/>
    
       
        </ScrollView>
        <View style={styles.infoContainer}>
        <View style={styles.footerPrice}>
        <Text style={styles.itemPrice}>{itemPrice}</Text>
        <Text style={styles.itemPriceFooter}>TOTAL PRICE</Text>
        </View>
        {/* <TouchableOpacity  onPress={initiateWhatsAppSMS}> */}
        <TouchableOpacity onPress={() => { Linking.openURL(`tel:${itemTel}`); }} >
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
    container:{
        flex:1,
        backgroundColor:'white' ,
        padding:20,
        flexDirection:'column',
    },
    imageStyle:{
        width:'100%',
        height:210
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
    itemTitle:{
        fontSize:22,
        fontWeight:'600',
        marginTop:10,
        marginBottom:5,
        textTransform:'uppercase',
        letterSpacing:1
    },
    categoryTitle:{
        fontSize:16,
        fontWeight:'500',
        marginBottom:5,
        color:'grey',
        textTransform:'uppercase',
        marginLeft:2
    },
    shopName:{
        fontSize:16,
        fontWeight:'500',
        paddingBottom:10,
        color:'grey',
        textTransform:'uppercase',
        marginLeft:6
    },
    itemPrice:{
        fontSize:38,
        fontWeight:'800'
    },
    itemPriceFooter:{
        fontSize:18,
        color:'lightgrey',
        textAlign:'center',
    },
    itemDescription:{
        fontSize:14,
        color:'#2f2f2f',
        marginBottom:10,
        marginLeft:5,
        letterSpacing:1.2
        
    },
    detailsText:{
        fontSize:16,
        marginBottom:10 ,
        fontWeight:'600',
        textTransform:'uppercase',
        marginLeft:3
    },
    infoContainer:{
        flexDirection:'row',
        padding: 30,
        height:110,
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    footerContact:{
        backgroundColor:'black',
        padding: 17,
    },
    contactText:{
        color:'white',
        fontWeight:'600',
        fontSize:12,
    }
})
