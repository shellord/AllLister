import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CategoriesList from '../components/CategoriesList'
import Constants from 'expo-constants';
import { AuthContext } from '../context'

const Categories = ({navigation}) => {
    const { API_URL } = React.useContext(AuthContext)
    const [storecategories, setstorecategories] = useState([{}])

    useEffect(() => {
        fetch(API_URL + 'shopcategory')
            .then(response => response.json())
            .then(json => {
                setstorecategories(json.response)
            })

    }, [])

    return (
        <>
        <ScrollView style={styles.container}>
            <Text style={styles.header}>CATEGORIES</Text>
            
                <TouchableOpacity onPress={() => { navigation.navigate('categoryexpand') }}>

                    {storecategories.map(elem => {            
                        return(
                        <CategoriesList navigation={navigation} imageUri={elem.image}
                            name={elem.name}
                        />
                        )
                    })}
            </TouchableOpacity>

            
               
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
