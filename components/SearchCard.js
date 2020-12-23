import React,{ useState } from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchCard = ({navigation}) => {
    const [text, setText] = React.useState('');
   
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.textInput}
            placeholder='SEARCH FOR PRODUCTS & SHOPS'
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={() => navigation.navigate('Search', {
                searchTerm: text
            })}/> 
            <Icon style={styles.icon}  name="search" size={14} color="black" />
        </View>
    )
}

export default SearchCard
const styles = StyleSheet.create({
   
    container: {
    // backgroundColor:'aqua',
    flexDirection: 'row',
    marginBottom:10,
    marginLeft:10,
    justifyContent: 'space-between',
    borderWidth:0.5,
    borderColor:'black',
    },
    textInput:{
        padding:10,
        backgroundColor:'transparent',
        width:'61%',
        fontSize:9,
        fontWeight:'600'
    },
    icon:{
        marginRight:10,
        alignSelf:'center'
    }
    })