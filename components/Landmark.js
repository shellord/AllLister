import React,{useContext,useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from "../context"

const Landmark = ({navigation,locationName}) => {
    const { API_URL } = useContext(AuthContext)  
    return (
        <TouchableOpacity onPress={() => navigation.push('ChangeLocation')}>
            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>{locationName}</Text>
                <Ionicons name="ios-pin" color='#1f1f1f' size={22} style={{marginLeft:5}}/>
            </View>
        </TouchableOpacity>
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
