import React from 'react'
import { View, Text, StyleSheet, Image ,SafeAreaView, TouchableOpacity} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Category from '../components/Category'

const StoreCategory = ({navigation}) => {
    const DATA = [
        {
            id:1,
            imguri:'https://img.icons8.com/ios/400/000000/kawaii-pizza.png',
            title:'Food'
        },
        {
            id:2,
            imguri:'https://img.icons8.com/ios/400/000000/automatic.png',
            title:'Techs'
        },
        {
            id:3,
            imguri:'https://img.icons8.com/ios/400/000000/home-safety.png',
            title:'Appliances'
        },
        {
            id:4,
            imguri:'https://img.icons8.com/ios/400/000000/t-shirt.png',
            title:'Clothing'
        },
        {
            id:5,
            imguri:'https://img.icons8.com/ios/480/000000/furniture.png',
            title:'Furniture'
        },
        {
            id:6,
            imguri:'https://img.icons8.com/ios/480/000000/ea-sports.png',
            title:'Sports'
        },
        {
            id:7,
            imguri:'https://img.icons8.com/ios/480/000000/nail-polish.png',
            title:'Cosmetics'
        },
        {
            id:8,
            imguri:'https://img.icons8.com/ios/480/000000/read.png',
            title:'Books'
        }
    ]

   
    return (
        <View style={styles.container} >
            <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white'}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 18,letterSpacing:2, fontWeight: '600', paddingHorizontal: 20 }}>
                                CATEGORIES
                            </Text>
                            <TouchableOpacity onPress={() =>{ navigation.push('categories'),{navigation:navigation}}}>
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
                                    <Category imageUri={{uri:'https://i.imgur.com/6CvYN5z.jpg'}}
                                        name="FOOD"
                                    />
                                    <Category imageUri={{uri:'https://i.imgur.com/iRJKDHq.jpg'}}
                                        name="TECHNOLOGY"
                                    />
                                    <Category imageUri={{uri:'https://i.imgur.com/fhaqpD1.jpg'}}
                                        name="BOOKS"
                                    />
                                     <Category imageUri={{uri:'https://i.imgur.com/LDVQk5A.jpg'}}
                                        name="CLOTHING"
                                    />
                                     <Category imageUri={{uri:'https://i.imgur.com/GNxvgjW.jpg'}}
                                        name="FURNITURE"
                                    />
                                </ScrollView>
                                </View>
                                </View>
                                </ScrollView>
        </View>
    )
}

export default StoreCategory

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        marginBottom:20,
        marginTop:10
    },
    headContainer:{
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleStyle:{
        fontSize:20,
        marginLeft:15,
        fontWeight:"600",
        textTransform:'uppercase'
    },
    viewAllStyle:{
        color:'black',
        marginRight:10,
        fontWeight:'600'
    },
    categoryList:{
        justifyContent:'center',
        width:"100%",
        height:180,
    },
    imageContainer:{
        paddingHorizontal:20,
        paddingVertical:10,
        alignItems:'center'
    },
    imageStyle:{
        height:200,
        width:150
        },
    itemTitle:{
        marginTop:5,
        fontWeight:'500',
        textTransform:'uppercase',
        fontSize:11
    }
})
