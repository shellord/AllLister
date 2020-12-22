import React,{useContext,useEffect,useState} from 'react'
import { View,StyleSheet,Text} from 'react-native'
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



const Home = ({navigation}) => {

    const { API_URL, locationName, userLat, userLong } = useContext(AuthContext)

    // useEffect(() => {
    // }, [userLat,userLong])

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView >
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <SearchCard navigation={navigation}/>
                    <LandMark locationName={locationName} navigation={navigation}/>
                </View>
                {/* <HeaderWelcome/> */}
                <StoreCategory navigation={navigation}/>
                <HomeAds/>
                <MaterialStoreCardList navigation={navigation}/>
                <Text style={styles.titleStyle}> FEATURED PRODUCTS</Text>
                <HomeProductCardList navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
        backgroundColor:'white'
    },
    titleStyle:{
        fontSize:18,
        marginLeft:10,
        fontWeight:"600",   
        letterSpacing:2
    }
})
