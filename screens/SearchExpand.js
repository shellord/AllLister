import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Dimensions, Text,TextInput } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants'
import { TabBar } from 'react-native-tab-view';
import HomeProductCardList from '../components/HomeProductCardList'
import SearchProductList from '../components/SearchProductList'
import SearchShopList from '../components/SearchShopList'
import Icon from 'react-native-vector-icons/FontAwesome'

const initialLayout = { width: Dimensions.get('window').width };

export default function SearchExpand({ navigation, route }) {
    // console.log(route.params.category)
    let searchTerm = ''

    route.params ? searchTerm = route.params.searchTerm : ''
    const [searchtext, setsearchtext] = useState(searchTerm)

    const FirstRoute = () => {
        return (
            <View style={[styles.scene, { backgroundColor: 'white' }]} >
                <SearchProductList navigation={navigation} searchtext={searchtext}/>
            </View>
        )
    }

    const SecondRoute = () => (
        <View style={[styles.scene, { backgroundColor: 'white' }]} >
            <SearchShopList navigation={navigation} searchtext={searchtext}/>
        </View>
    );

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'ProductS' },
        { key: 'second', title: 'Shops' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{ backgroundColor: 'white' }}
            labelStyle={{ color: 'black', fontWeight: '600', letterSpacing: 2 }}
        />
    );

    return (
        <View style={styles.container}>
            
            <Text style={{ fontSize: 23, fontWeight: '500', marginBottom: 30, textAlign: 'center', marginTop: 50 }}>SEARCH</Text>

            <View style={styles.searchContainer}>
                <Icon style={styles.icon} name="search" size={14} color="black" />
                <TextInput placeholder="Search for products and shop" style={styles.TextInp} onChangeText={text => setsearchtext(text)} value={searchtext} />
            </View>
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    },
    scene: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 40,
        alignItems: 'center'
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    }
});