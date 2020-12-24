import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants'
import { TabBar } from 'react-native-tab-view';
import HomeProductCardList from '../components/HomeProductCardList'
import MaterialStoreCardList from '../components/MaterialStoreCardList'



const initialLayout = { width: Dimensions.get('window').width };

export default function CategoryExpand({ navigation }) {

    const FirstRoute = () => {
        return (
            <View style={[styles.scene, { backgroundColor: 'white' }]} >
                <HomeProductCardList navigation={navigation} />
            </View>
        )
    }

    const SecondRoute = () => (
        <View style={[styles.scene, { backgroundColor: 'white' }]} >
            <MaterialStoreCardList navigation={navigation} />
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