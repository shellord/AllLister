import React, { useContext, useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform
} from "react-native";
import { AuthContext } from '../context'


const Category =({name,imageUri}) => {

         const { UPLOAD_URL } = useContext(AuthContext)
         let img=''
         imageUri.uri? img = (UPLOAD_URL + JSON.parse(imageUri.uri)[0].name.replace('/var/www/html/', ''))
         :null

        return (
            <View style={{ height: 220, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                    <Image source={{uri:img}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{paddingBottom:10,paddingTop:10 }}>
                    <Text style={{textTransform:'uppercase',letterSpacing:1,fontWeight:Platform.OS === 'ios' ? "600" : "bold",}}>{name}</Text>
                </View>
            </View>
        );
    }

export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});