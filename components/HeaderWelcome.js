import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderWelcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.mainTitleHey}>Hey</Text>
            <Text style={styles.mainTitleUname}> Husnul</Text>
            </View>
            <Text style={styles.subTitle}>Find Everything you wanted</Text>
        </View>
    )
}

export default HeaderWelcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'white',
        marginBottom:10
    },
    textContainer:{
        flex:1,
        flexDirection:'row'
    },
    mainTitleHey:{
        fontSize:44,
        fontWeight:'600'
    },
    mainTitleUname:{
        fontSize:44,
        fontWeight:'200'
    },
    subTitle:{
        fontSize:20,
        fontWeight:'400',
        color:'lightgrey'
    }
})
