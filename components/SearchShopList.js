import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, ScrollView, FlatList } from 'react-native'
import { AuthContext } from '../context'
import MaterialStoreCard from '../components/MaterialStoreCard'

const SearchShopList = ({searchtext,navigation}) => {

    const { API_URL, userLat, userLong } = useContext(AuthContext)
    const [shops, setshops] = useState([{}])

    useEffect(() => {
        fetch(API_URL + "ssearch/" + userLat + "/" + userLong + "/" + searchtext)
            .then(response => response.json())
            .then(json => {
                setshops(json.response)
            }).catch(e => console.log(e))
    }, [searchtext])

    const renderItem = ({ item }) => (
        <MaterialStoreCard navigation={navigation} id={item.id} name={item.shopname} storeImg={item.shopimage} logoUri={item.logo} tel={item.mobilenumber} distance={item.distance} otime={item.openingtime} ctime={item.closingtime} category={item.category} />
    )
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            {shops.length != 0 ? <FlatList
                data={shops}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> : null}
        </ScrollView>
    )
}

export default SearchShopList

const styles = StyleSheet.create({

})
