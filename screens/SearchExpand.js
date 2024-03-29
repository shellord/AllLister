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
import { ScrollView } from 'react-native-gesture-handler';

const initialLayout = { width: Dimensions.get('window').width };

export default function SearchExpand({ navigation, route }) {
    // console.log(route.params.category)
    let searchTerm = ''

    route.params ? searchTerm = route.params.searchTerm : ''
    const [searchtext, setsearchtext] = useState(searchTerm)

    const ProductRoute = () => {
        return (
            <View style={[styles.scene, { backgroundColor: 'white' }]} >
                <SearchProductList navigation={navigation} searchtext={searchtext} />
            </View>
        )
    }

    const ShopRoute = () => (
        <View style={[styles.scene, { backgroundColor: 'white' }]} >
            <SearchShopList navigation={navigation} searchtext={searchtext} />
        </View>
    );

    const LoyalProductRoute = () => (
        <View style={[styles.scene, { backgroundColor: 'white' }]} >
            <LoyalProductList navigation={navigation} searchtext={searchtext} />
        </View>
    );

    const AllRoute = () => (
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.scene, { backgroundColor: 'white' }]} >
            <LoyalProductList navigation={navigation} searchtext={searchtext} />
            <SearchShopList navigation={navigation} searchtext={searchtext} />
            <SearchProductList navigation={navigation} searchtext={searchtext} />
        </ScrollView>
    );
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All' },
        { key: 'second', title: 'Products' },
        { key: 'third', title: 'Shops' },
        { key: 'fourth', title: 'favorite' }
    ]);

    const renderScene = SceneMap({
        first: AllRoute,
        second: ProductRoute,
        third: ShopRoute,
        fourth: LoyalProductRoute
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{ backgroundColor: 'white' }}
            labelStyle={{ color: 'black', fontWeight: '700', letterSpacing: 0, fontSize: 10 }}
        />
    )

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