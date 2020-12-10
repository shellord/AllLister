import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'



const CategoriesList = ({navigation,imageUri,name}) => {
    return (
        <View style={{ height: 170, width: "100%",marginBottom:20}}>
                <View style={{ flex: 2 }}>
                    <Image source={{uri:imageUri}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{paddingBottom:20,paddingTop:10 }}>
                <Text style={{textTransform:'uppercase',fontWeight:"500",fontSize:18}}>{name}</Text>
                </View>
            </View>
    )
}

export default CategoriesList

const styles = StyleSheet.create({

})
