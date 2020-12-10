import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native'

const ProdcutScroll = ({id,title,price,category,description,navigation,imageUri,shopName}) => {
    return (
        <TouchableOpacity onPress={() =>{ navigation.navigate('productscreen',{
            itemId: id,
            itemTitle:title,
            itemPrice:price,
            itemCategory:category,
            itemDescription:description,
            itemImage:imageUri,
            itemShopName:shopName,
          });
        }}>
        <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'center'}}>  
            <Image
            style={styles.tinyLogo}
            source={{uri:imageUri}}
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
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default ProdcutScroll

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor:'white',
        width:150,
        height:250,
        marginRight:25,
        borderColor:'black',
        marginLeft:5
    },
    priceTag:{
        fontSize:12,
        fontWeight:'400',
        color:'black',
        marginTop:3
    },
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
