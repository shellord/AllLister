import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Constants from 'expo-constants'

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={{alignItems:'center',marginTop:200}}>
            <Text style={{fontSize:60,letterSpacing:5}}>alllister</Text>
            <Text style={{fontSize:10}}>DISCOVER SHOPS AND PRODUCTS NEAR YOU</Text>
            </View>
            
            <View style={styles.btnWrap}>
            
            <TouchableOpacity onPress= {()=> navigation.push('Login')}>
            <View style={styles.userBtn}>
                <Text style={styles.userBtnText}>LOGIN</Text>
            </View>
            </TouchableOpacity>
            
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent: 'space-between',
        padding:30,
        
    },
    btnWrap:{
        justifyContent:'space-between',
        flexDirection:'column',
        marginBottom:30
    },
    userBtn:{
        padding:20,
        backgroundColor:'#1f1f1f',
        marginBottom:5
    },
    vendorBtn:{
        padding:20,
        backgroundColor:'transparent',
        marginBottom:5,
        borderColor:'black',
        borderWidth:0.5
    },
    userBtnText:{
        color:'white',
        textAlign:'center'
    },
    vendorBtnText:{
        color:'black',
        textAlign:'center'
    }
})
