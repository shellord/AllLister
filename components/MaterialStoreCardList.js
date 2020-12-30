import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Platform } from 'react-native'
import { FlatList } from 'react-native-gesture-handler' 
import MaterialStoreCard from '../components/MaterialStoreCard'
import {AuthContext} from '../context'

const MaterialStoreCardList = ({navigation}) => {

    const { API_URL, userLat,userLong} = React.useContext(AuthContext)
    const [shops, setshops] = useState([{}])
    
    useEffect(() => {
        fetch(API_URL + 'shop/' + userLat + '/' + userLong+'/50')
            .then(response => response.json())
            .then(json => {
                setshops(json.response)
            }).catch(e => console.log(e))
    }, [userLat,userLong])

    const renderItem = ({item}) =>(
        <MaterialStoreCard navigation={navigation} id={item.id} name={item.shopname} storeImg={item.shopimage} logoUri={item.logo} tel={item.mobilenumber} distance={item.distance} otime={item.openingtime} ctime={item.closingtime} category={item.category}/>
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
        fontWeight: Platform.OS === 'ios' ? "600" : "bold",
        letterSpacing:2,
        
    }
})

