import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Dimensions, Text, TextInput } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants'
import { TabBar } from 'react-native-tab-view';
import HomeProductCardList from '../components/HomeProductCardList'
import SearchProductList from '../components/SearchProductList'
import SearchShopList from '../components/SearchShopList'
import LoyalProductList from '../components/LoyalProductList'

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
                <SearchProductList navigation={navigation} searchtext={searchtext} />
            </View>
        )
    }

    const SecondRoute = () => (
        <View style={[styles.scene, { backgroundColor: 'white' }]} >
            <SearchShopList navigation={navigation} searchtext={searchtext} />
        </View>
    );

    const ThirdRoute = () => (
        <View style={[styles.scene, { backgroundColor: 'white' }]} >
            <LoyalProductList navigation={navigation} searchtext={searchtext} />
        </View>
    );
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'ProductS' },
        { key: 'second', title: 'Shops' },
        { key: 'third', title: 'favorite' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
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

            <View style={styles.searchContainer}>
                <Icon style={styles.icon} name="search" size={14} color="black" />
                <TextInput placeholder="SEARCH PRODUCTS AND SHOP" onChangeText={text => setsearchtext(text)} value={searchtext} />
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
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: 20
    },
    scene: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 40,
        alignItems: 'center',
        width: '90%',
        borderWidth: 0,
        borderBottomWidth: 0.5,
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    icon: {
        marginLeft: 10,
        marginRight: 10
    }
});