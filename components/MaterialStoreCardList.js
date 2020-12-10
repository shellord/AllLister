import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler' 
import MaterialStoreCard from '../components/MaterialStoreCard'

const MaterialStoreCardList = ({navigation}) => {
    const DATA = [
        {
            id:1,
            name:'Baken Valley',
            tel:'+91 9876543210',
            distance:'2 KM',
            time:'9:00 A.M - 11:00 P.M',
            logoUri:'https://i.imgur.com/jPPKeve.png',
            storeImg:'https://i.imgur.com/xUudfbW.jpg',
        },
        {
            id:2,
            name:'365 Chicken Grill',
            tel:'+91 9876543210',
            distance:'3 KM',
            time:'9:00 A.M - 11:00 P.M',
            logoUri:'https://i.imgur.com/AHT8IKq.png',
            storeImg:'https://i.imgur.com/qCYyqoP.jpg',
            
        },
        {
            id:3,
            name:'Apple Store',
            tel:'+91 9876543210',
            distance:'10 KM',
            time:'9:00 A.M - 11:00 P.M',
            logoUri:'https://i.imgur.com/Lelr7hY.png',
            storeImg:'https://i.imgur.com/CmYrCxh.jpg',
        }
    ]
    const renderItem = ({item}) =>(
        <MaterialStoreCard navigation={navigation} id={item.id} name={item.name} storeImg={item.storeImg} logoUri={item.logoUri} tel={item.tel} distance={item.distance} details={item.details} time={item.time}/>
    )
    return (
        <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
        <Text style={styles.titleStyle}>NEAR YOU</Text>
        <TouchableOpacity onPress={() =>{ navigation.push('NearYou'),{navigation:navigation}}}>
        <Text style={{ fontSize: 15, fontWeight: '600', paddingHorizontal: 20 }}>
        SHOW ALL
        </Text>
        </TouchableOpacity>
        </View>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        
    </View>
    )
}

export default MaterialStoreCardList

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5
    },
    titleStyle:{
        fontSize:18,
        marginLeft:10,
        fontWeight:"600",
        letterSpacing:2
        
    }
})

