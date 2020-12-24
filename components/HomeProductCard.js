import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native'
import { AuthContext } from '../context'

const HomeProductCard = ({id,title,price,category,description,navigation,imageUri,shopId}) => {

    const { API_URL,UPLOAD_URL } = useContext(AuthContext)
    const [shopname, setshopname] = useState('')

    useEffect(() => {
       fetch(API_URL+'shop/id/'+shopId)
       .then(response => response.json())
       .then(json => {
            setshopname(json.response[0].shopname)
       }).catch(e => alert("Network Error!"))
    }, [])
    let img = ''
    imageUri ? img = UPLOAD_URL + JSON.parse(imageUri)[0].name.replace('/var/www/html/', '') : null
    return (
        <TouchableOpacity onPress={() =>{ navigation.navigate('productscreen',{
            itemId: id,
            itemTitle:title,
            itemPrice:price,
            itemCategory:category,
            itemDescription:description,
            itemImage:imageUri,
            itemShopName:shopname,
          });
        }}>
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>  
            <Image
            style={styles.tinyLogo}
            source={{uri:img}}
            />
            </View> 
            <View style={styles.detailsContainer}>
            <Text style={styles.productTitle}>
            {title}
            </Text>
            <Text  style={styles.productCat}>
            {category}
            </Text>
            <Text style={styles.priceTag}> {price} </Text>
             <Text> {shopname} </Text>

            </View>
        </View>
        </TouchableOpacity>
    )
}

export default HomeProductCard

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'white',
        width:150,
        // height:290,
        // borderRadius:30,
        marginRight:25,
        borderColor:'black',
        marginLeft:15 
    },
    priceTag:{
        fontSize:12,
        fontWeight:'400',
        color:'black',
        marginTop:3
    },
    // priceTagContainer:{
    //     backgroundColor:'#ffe9ee',
    //     paddingHorizontal:17,
    //     paddingVertical:13,
    //     // borderTopRightRadius:30,
    //     borderBottomLeftRadius:30
    // },
    detailsContainer:{
        flexDirection:'column',
        backgroundColor:'white',
        // alignSelf:'center',
        // alignItems:'center'
    },
    productTitle:{
        marginTop:5,
        fontSize:15,
        textAlign:'left',
        fontWeight:'600',
        textTransform:'uppercase'
    },
    productCat:{
        fontSize:12,
        color:'grey',
        textTransform:'uppercase',
        marginTop:3,
        fontWeight:'600'
    },
    tinyLogo: {
        width: "100%",
        height: 200,
      },
})