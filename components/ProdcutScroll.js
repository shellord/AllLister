import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'

const ProdcutScroll = ({ id, title, price, category, description, navigation, imageUri, shopName, itemTel }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('productscreen', {
                itemId: id,
                itemTitle: title,
                itemPrice: price,
                itemCategory: category,
                itemDescription: description,
                itemImage: imageUri,
                itemShopName: shopName,
                itemTel: itemTel
            });
        }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{ uri: imageUri }}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>
                        {title}
                    </Text>
                    <Text style={styles.productCat}>
                        {category}
                    </Text>
                    <Text style={styles.priceTag}> ₹{price}.00 INR </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProdcutScroll

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
        letterSpacing: 1

    },
    productCat: {
        marginTop: 7,
        fontSize: 12,
        color: 'grey',
        textTransform: 'uppercase',
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        letterSpacing: 1,
    },
    priceTag: {
        fontSize: 13,
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        color: 'tomato',
        marginTop: 7,
        marginLeft: -3,
        letterSpacing: 1
    },
    tinyLogo: {
        width: "100%",
        height: 200,
    },
})
