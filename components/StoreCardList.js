import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import StoreCard from './StoreCard'

const StoreCardList = () => {
    const DATA = [
        {
            id:1,
            name:'Store Name',
            tel:'+91 9876543210',
            distance:'2 KM'
        },
        {
            id:2,
            name:'Store Name',
            tel:'+91 9876543210',
            distance:'3 KM'
        }
    ]

    const renderItem = ({item}) =>(
        <StoreCard id={item.id} name={item.name} tel={item.tel} distance={item.distance}/>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Nearest Stores</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            
        </View>
    )
}

export default StoreCardList

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5
    },
    titleStyle:{
        fontSize:20,
        marginLeft:10,
        fontWeight:"600",
        
    }
})
