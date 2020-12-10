import React , { Component } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CategoriesList from '../components/CategoriesList'
import Constants from 'expo-constants';

const Categories = ({navigation}) => {
    return (
        <>
        <ScrollView style={styles.container}>
            <Text style={styles.header}>CATEGORIES</Text>
            
            <TouchableOpacity>
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/6CvYN5z.jpg"
                name="FOOD"
                />
            </TouchableOpacity>

            <TouchableOpacity>
            <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/iRJKDHq.jpg"
                name="TECHNOLOGY"
                />
            </TouchableOpacity>

            
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/fhaqpD1.jpg"
                name="BOOKS"
                />
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/LDVQk5A.jpg"
                name="CLOTHINGS"
                />
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/GNxvgjW.jpg"
                name="FURNITURE"
                />
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/YKK9yQW.jpg"
                name="SPORTS - FITNESS"
                />
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/6LM4Jl0.jpg"
                name="COSMETICS"
                />
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/viWZfQI.jpg"
                name="MEDICAL"
                />
             <CategoriesList navigation={navigation} imageUri="https://i.imgur.com/zX29Ggi.jpeg"
                name="HOME APPLIANCE"
                />
               
        </ScrollView>
        </>
    )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        padding:30,
        paddingTop: Constants.statusBarHeight,
    },
    header:{
        fontSize:20,
        fontWeight:"600",
        paddingBottom:20,
        letterSpacing:2
    }
})
