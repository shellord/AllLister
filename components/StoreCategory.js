import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Category from '../components/Category'
import { AuthContext } from '../context'

const StoreCategory = ({ navigation }) => {

    const { API_URL } = useContext(AuthContext)
    const [storecategories, setstorecategories] = useState([{}])

    useEffect(() => {
        console.log(API_URL + 'shopcategory')
        fetch(API_URL + 'shopcategory')
            .then(response => response.json())
            .then(json => {
                setstorecategories(json.response.slice(0,5))
                console.log(storecategories)
            })

    }, [])


    return (
        <View style={styles.container} >
            <ScrollView
                scrollEventThrottle={16}
            >
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, letterSpacing: 2, fontWeight: '600', paddingHorizontal: 20 }}>
                            CATEGORIES
                            </Text>
                        <TouchableOpacity onPress={() => { navigation.push('categories'), { navigation: navigation } }}>
                            <Text style={{ fontSize: 15, fontWeight: '600', paddingHorizontal: 20 }}>
                                SHOW ALL
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 230, marginTop: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {storecategories.map(elem => (
                                <TouchableOpacity onPress={() => { navigation.navigate('categoryexpand', { category: elem.name }) }}>

                                <Category imageUri={{ uri: elem.image }}
                                    name={elem.name}
                                />
                                </TouchableOpacity>
                            ))}

                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default StoreCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginBottom: 20,
        marginTop: 10
    },
    headContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleStyle: {
        fontSize: 20,
        marginLeft: 15,
        fontWeight: "600",
        textTransform: 'uppercase'
    },
    viewAllStyle: {
        color: 'black',
        marginRight: 10,
        fontWeight: '600'
    },
    categoryList: {
        justifyContent: 'center',
        width: "100%",
        height: 180,
    },
    imageContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center'
    },
    imageStyle: {
        height: 200,
        width: 150
    },
    itemTitle: {
        marginTop: 5,
        fontWeight: '500',
        textTransform: 'uppercase',
        fontSize: 11
    }
})
