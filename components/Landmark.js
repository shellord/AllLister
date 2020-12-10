import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Landmark = () => {
    return (
        <View style={styles.locationContainer}>
            <Text style={styles.locationText}>VALLUVAMBRAM</Text>
            <Ionicons name="ios-pin" color='#1f1f1f' size={22} style={{marginLeft:5}}/>
         </View>
    )
}

export default Landmark

const styles = StyleSheet.create({
    locationContainer:{
        flex: 1,
        flexDirection:'row',
        marginBottom:10,
        justifyContent: 'flex-end',
        marginRight:10,
        // backgroundColor:'green',
        borderWidth:0.5,
        borderColor:'black',
        padding:3,
        borderLeftColor:'transparent'
    },
    locationText:{
        alignSelf:'center',
        fontSize:12,
        color:'#1f1f1f',
        fontWeight:'500'
    }
})
