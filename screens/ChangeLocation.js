import React,{ useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Constants from 'expo-constants'

const ChangeLocation = ({navigation}) => {

    const { API_KEY,chgLocation } = useContext(AuthContext)

    onPressHandler = (lat,long) =>{
        chgLocation(lat,long)
        navigation.goBack()
    }
    
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details ) => {

                    onPressHandler(details.geometry.location.lat, details.geometry.location.lng)

                }}
                fetchDetails={true}
                query={{
                    key: API_KEY,
                    language: 'en',
                    components: 'country:in'
                }}
                
                currentLocation={true}
                currentLocationLabel='Current location'
            />
        </View>
        
    )
}

export default ChangeLocation

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        justifyContent:'center'
    }
})
