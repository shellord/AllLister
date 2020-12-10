import React from 'react'
import { Keyboard, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SearchCard from '../components/SearchCard'

const Search = ({navigation}) => {

    return (
        <ScrollView style={styles.container} contentContainerStyle={{justifyContent:'center',alignSelf:'center',flex:1}}>
            <Text style={{fontSize:23,fontWeight:'500',marginBottom:30,textAlign:'center'}}>SEARCH</Text>
            <SearchCard />
            
        </ScrollView>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding: 30,
    }
})
