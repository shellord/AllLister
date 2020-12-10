import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FlatListSlider} from 'react-native-flatlist-slider';

const HomeAds = () => {
    const images = [
        {
         image:'https://i.imgur.com/DG1k1rL.png',
         desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
       {
         image:'https://i.imgur.com/XAtn0i8.png',
         desc:
           'Red fort in India New Delhi is a magnificient masterpeiece of humans',
       },
       ]
    return (
        <View>
             
        <FlatListSlider 
            data={images} 
        />
        </View>
    )
}

export default HomeAds

const styles = StyleSheet.create({})
