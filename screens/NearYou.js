import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler' 
import MaterialStoreCard from '../components/MaterialStoreCard'
import { AuthContext } from '../context'
import Constants from 'expo-constants'

const NearYou = ({navigation}) => {
    const { API_URL,userLat,userLong } = React.useContext(AuthContext)
    const [shops, setshops] = useState([{}])

    useEffect(() => {
        fetch(API_URL + 'shop/'+userLat+'/'+userLong+'/10')
            .then(response => response.json())
            .then(json => {
                setshops(json.response)
                console.log(shops)
            }).catch(e => console.log(e))
    }, [userLat,userLong])

    const renderItem = ({item}) =>(
        <MaterialStoreCard navigation={navigation} id={item.id} name={item.shopname} storeImg={item.shopimage} logoUri={item.logo} tel={item.mobilenumber} distance={item.distance} otime={item.openingtime} ctime={item.closingtime} />
    )
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleStyle}>NEAR YOU</Text>
        <FlatList
            data={shops}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </ScrollView>
    )
}

export default NearYou

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:Constants.statusBarHeight
    },
    titleStyle:{
        fontSize:18,
        marginLeft:10,
        fontWeight:"600",
        letterSpacing:2,
        padding:20
        
    }
})
