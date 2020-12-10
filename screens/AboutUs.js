import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutUs = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,fontWeight:'600',marginTop:10,marginBottom:30,letterSpacing:3}}>ABOUT US </Text>
            <Text style={{fontSize:16,fontWeight:'500',letterSpacing:2}}>
        Welcome to All Lister, your number one source for all products. We're dedicated to giving you the very best of product.


        Founded in 2020 by All Lister INC, All Lister has come a long way from its beginnings in Kerala.


        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contacting us.
        </Text>
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding:30,
        backgroundColor:'white'
    }
})
