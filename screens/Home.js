import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, Platform, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import Header from '../components/Header'
import LandMark from '../components/Landmark'
import StoreCategory from '../components/StoreCategory'
import MaterialStoreCardList from '../components/MaterialStoreCardList'
import HeaderWelcome from '../components/HeaderWelcome'
import HomeProductCardList from '../components/HomeProductCardList'
import SearchCard from '../components/SearchCard'
import HomeAds from '../components/HomeAds'
import { AuthContext } from "../context"
import Loading from '../components/Loading'



const Home = ({ navigation }) => {

    const { API_URL, locationName, userLat, userLong } = useContext(AuthContext)

    // useEffect(() => {
    // }, [userLat,userLong])

    return (
        <>
            <SafeAreaView style={styles.container} />
            <View style={styles.bottomSafeArea}>
                <Header navigation={navigation} />
                <ScrollView >
                    {/* <HeaderWelcome/> */}
                    <HomeAds />
                    <StoreCategory navigation={navigation} />
                    <MaterialStoreCardList navigation={navigation} />
                    <Text style={styles.titleStyle}> FEATURED PRODUCTS</Text>
                    <HomeProductCardList navigation={navigation} />
                </ScrollView>
            </View>
        </>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 0,
        backgroundColor: '#FFC300'
    },
    bottomSafeArea: {
        flex: 2,
        backgroundColor: 'white'
    },
    titleStyle: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        letterSpacing: 2
    }
})
