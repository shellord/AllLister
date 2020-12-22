import React, { useState } from 'react'
import { StyleSheet, Image,Dimensions, View, Text} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'


const { width, height } = Dimensions.get('window')

const Carousel = ({route,itemImage}) => {

    const DATA = [

        {
            id:1,
            imguri:'https://i.imgur.com/nbr6VVQ.jpg'    
        },
        {
            id:2,
            imguri:'https://i.imgur.com/8qBw85a.jpg'
        },
        {
            id:3,
            imguri:'https://i.imgur.com/w8I8Vqa.jpg'
        },
        {
            id:4,
            imguri:'https://i.imgur.com/mgl8WUc.jpg'
        }
    ]

    const renderItem = ({item}) =>(
        <View style={{flex:1,flexDirection:'column'}}>
            <Text style={{alignSelf:'center', color:'grey'}}>- SWIPE TO SEE PRODUCT IMAGES -</Text>
      <Image 
        style={styles.imageStyle}
        source={{uri:item.imguri}}
      />  
      </View>
    )
    return (
            <FlatList 
                style={styles.container}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            
    )
}

export default Carousel

const styles = StyleSheet.create({
    container:{
        height:300
    },
    imageStyle:{
        width:width,
        height: "100%",
        marginHorizontal: 10,
    }
})