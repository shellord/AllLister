import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ShopSearch from '../screens/ShopSearch'

const StoreSearchCard = ({ navigation, shopId }) => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Search for products'
                value={text}
                onChangeText={text => setText(text)}
                onSubmitEditing={() => navigation.navigate('ShopSearch', { searchTerm: text, shopId: shopId })} />
            <Icon style={styles.icon} name="search" size={14} color="darkgrey" />
        </View>
    )
}

export default StoreSearchCard
const styles = StyleSheet.create({

    container: {
        // backgroundColor:'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 0.3,
        borderColor: 'black'
    },
    textInput: {
        padding: 10,
        backgroundColor: 'transparent',
        width: '90%',
    },
    icon: {
        marginRight: 20
    }
})