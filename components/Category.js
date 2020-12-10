import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

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


class Category extends Component {
    render() {
        return (
            <View style={{ height: 220, width: 130, marginLeft: 20 }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{paddingBottom:10,paddingTop:10 }}>
                    <Text style={{textTransform:'uppercase',fontWeight:'500'}}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});