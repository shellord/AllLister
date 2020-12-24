import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FlatListSlider} from 'react-native-flatlist-slider';
import {AuthContext} from '../context'

const HomeAds = () => {

    const [banners, setbanners] = useState([{}])    
    // const image = [{ "id": 1, "image": "https://i.imgur.com/DG1k1rL.png" }, { "id":2, "image":"https://i.imgur.com/XAtn0i8.png"}, { "id":3, "image":"https://i.imgur.com/qyCJbcc.jpeg"}]
    
    const [data, setdata] = useState([{}])
    
    const {API_URL,UPLOAD_URL} = React.useContext(AuthContext)
    let arr = []

    useEffect(() => {
        fetch(API_URL + 'banners')
            .then(response => response.json())
            .then(json => {
                setbanners(json.response)   
                }).catch(e => console.log(e))
        if (banners[0].id) {
            banners.map(e => {
                arr.push({ 'id': e.id, 'image': UPLOAD_URL + 'admin/' + JSON.parse(e.image)[0].name })
                setdata(arr)
            })
        }
    }, [banners])

 

    if(data.length<=1){
        return(
            <Text>Loading</Text>
        )
    }
    return (
        <View>
            {banners ?
                <FlatListSlider
                    data={data}
                    onPress={()=>null}
                />:null 
            }
    
        </View>
    )
}

export default HomeAds

const styles = StyleSheet.create({})
