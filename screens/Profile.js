import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Constants from 'expo-constants';
import {AuthContext} from '../context'

const Profile = ({navigation}) => {
    const {signOut} = React.useContext(AuthContext)
    return (
        <>
        <ScrollView style={styles.container}>
        
        <Text style={{fontSize:20,fontWeight:'500',marginTop:10,marginBottom:30,letterSpacing:2}}>WELCOME USERNAME </Text>
       
        <Text style={{fontSize:14,fontWeight:'400',marginBottom:10,letterSpacing:1}}>Welcome to your account. In this area you can change your name and email address. Learn how to use this app, FAQ and Learn our T&C. </Text>

        <View
        style={{
            marginTop:30,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
        }}
        />

        <Text style={{fontSize:15,fontWeight:'500',marginTop:30,marginBottom:10,letterSpacing:2}}>NAME </Text>
        <View style={{borderBottomColor:'black',borderWidth:1,padding:7,flexDirection:'row',justifyContent: 'space-between',}}>
        <TextInput value="USERNAME"/> 
        <TouchableWithoutFeedback style={{backgroundColor:'black',padding:7}}>
            <Text style={{color:'white'}}>CHANGE</Text>
        </TouchableWithoutFeedback>
        </View>

        <Text style={{fontSize:15,fontWeight:'500',marginTop:30,marginBottom:10,letterSpacing:2}}>EMAIL </Text>
        <View style={{borderBottomColor:'black',borderWidth:1,padding:7,flexDirection:'row',justifyContent: 'space-between',}}>
        <TextInput value="SOMEONE@EXAMPLE.COM"/> 
        <TouchableWithoutFeedback style={{backgroundColor:'black',padding:7}}>
            <Text style={{color:'white'}}>CHANGE</Text>
        </TouchableWithoutFeedback>
        </View>

        <View
        style={{
            marginTop:40,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
        }}
        />
        <TouchableWithoutFeedback onPress={()=> navigation.navigate('PrivacyPolicy')}>
        <Text style={{fontSize:15,fontWeight:'600',marginTop:30,marginBottom:10,letterSpacing:2}}>PRIVACY POLICY </Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=> navigation.navigate('AboutUs')}>
        <Text style={{fontSize:15,fontWeight:'600',marginTop:15,marginBottom:10,letterSpacing:2}}>ABOUT US </Text>
        </TouchableWithoutFeedback>


        <Text style={{fontSize:15,fontWeight:'600',marginTop:15,marginBottom:10,letterSpacing:2}}>FREQUENTLY ASKED QUESTIONS </Text>
        <Text style={{fontSize:15,fontWeight:'600',marginTop:15,marginBottom:10,letterSpacing:2}}>TERMS AND CONDITIONS </Text>

        <View
        style={{
            marginTop:30,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
        }}
        />

        <TouchableWithoutFeedback onPress={()=> signOut()}>
        <Text style={{fontSize:20,fontWeight:'600',marginTop:30,marginBottom:10,letterSpacing:4}}>LOG OUT </Text>
        </TouchableWithoutFeedback>

        </ScrollView>
        </>
    )
}


export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop: Constants.statusBarHeight,
    },
    header:{
        fontSize:20,
        fontWeight:"600",
        paddingBottom:20,
        letterSpacing:2
    }
})
