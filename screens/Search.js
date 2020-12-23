import React, { useState, useEffect, useContext } from 'react'
import { Keyboard, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialStoreCard from '../components/MaterialStoreCard'
import { AuthContext } from '../context'

const Search = ({ navigation, route }) => {

    const { API_URL } = useContext(AuthContext)
    console.log('mounted')
    let searchTerm = ''
    route.params ? searchTerm = route.params.searchTerm : null
    const [searchtext, setsearchtext] = useState(searchTerm)
    const [shops, setshops] = useState([{}])
    const [products, setproducts] = useState([{}])

    useEffect(() => {
        console.log(searchtext)

        if (searchtext) {
            console.log(API_URL + "psearch/" + searchtext)
            fetch(API_URL + "ssearch/" + searchtext)
                .then(response => response.json())
                .then(json => {
                    setproducts(json.response)
                }).catch(e => console.log(e))

            fetch(API_URL + "ssearch/" + searchtext)
                .then(response => response.json())
                .then(json => {
                    setshops(json.response)

                }).catch(e => console.log(e))
        }
    }, [searchtext])

    const renderItem = ({ item }) => (
        <MaterialStoreCard navigation={navigation} id={item.id} name={item.shopname} storeImg={item.shopimage} logoUri={item.logo} tel={item.mobilenumber} distance={item.distance} otime={item.openingtime} ctime={item.closingtime} category={item.category} />
    )
    return (

        <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            <Text style={{ fontSize: 23, fontWeight: '500', marginBottom: 30, textAlign: 'center', marginTop: 50 }}>SEARCH</Text>

            <View style={styles.searchContainer}>
                <Icon style={styles.icon} name="search" size={14} color="black" />
                <TextInput style={styles.TextInp} onChangeText={text => setsearchtext(text)} />
            </View>

             <FlatList
                data={shops}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </ScrollView>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        height: 30,
        alignItems: 'center'
    },
    TextInp: {
        width: '100%',

    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    }
})
