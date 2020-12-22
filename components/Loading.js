import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})
