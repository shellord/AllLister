import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler' 
import MaterialStoreCard from '../components/MaterialStoreCard'
import {AuthContext} from '../context'

const MaterialStoreCardList = ({navigation}) => {

    const {API_URL} = React.useContext(AuthContext)
    const [shops, setshops] = useState([{}])

    useEffect(() => {
        fetch(API_URL + 'shop/10.8505/76.2711/10')
            .then(response => response.json())
            .then(json => {
                setshops(json.response)
                console.log(shops)
            }).catch(e => console.log(e))
    }, [])

    const renderItem = ({item}) =>(
        <MaterialStoreCard navigation={navigation} id={item.id} name={item.shopname} storeImg={item.shopimage} logoUri={item.logo} tel={item.mobilenumber} distance={item.distance} otime={item.openingtime} ctime={item.closingtime}/>
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
            data={shops}
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

