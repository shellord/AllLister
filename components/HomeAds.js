import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FlatListSlider} from 'react-native-flatlist-slider';
import {AuthContext} from '../context'

const HomeAds = () => {

    const [banners, setbanners] = useState([{}])
    // const image = [{ "id": 1, "image": "https://i.imgur.com/DG1k1rL.png" }, { "id":2, "image":"https://i.imgur.com/XAtn0i8.png"}, { "id":3, "image":"https://i.imgur.com/qyCJbcc.jpeg"}]
    const {API_URL} = React.useContext(AuthContext)

    useEffect(() => {
        fetch(API_URL + 'banners')
            .then(response => response.json())
            .then(json => {
                setbanners(json.response)
            })

    }, [])
    if(banners.length<=1){
        return(
            <Text>Loading</Text>
        )
    }
    return (
        <View>
            {banners ?
                <FlatListSlider
                    data={banners}
                />:null 
            }
    
        </View>
    )
}

export default HomeAds

const styles = StyleSheet.create({})
