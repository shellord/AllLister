import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants'
import { TabBar } from 'react-native-tab-view';
import HomeProductCardList from '../components/HomeProductCardList'
import CategoryStoreList from '../components/CategoryStoreList'
import CategoryProductList from '../components/CategoryProductList'


const initialLayout = { width: Dimensions.get('window').width };

export default function CategoryExpand({ navigation,route }) {
    // console.log(route.params.category)
    const FirstRoute = () => {
        return (
            <View style={[styles.scene, { backgroundColor: 'white' }]} >
                <CategoryProductList navigation={navigation} category={route.params.category}/>
            </View>
        )
    }

    const SecondRoute = () => (
        <View style={[styles.scene, { backgroundColor: 'white' }]} >
            <CategoryStoreList navigation={navigation} category={route.params.category}/>
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

        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});