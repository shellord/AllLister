import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const StoreCard = ({id,name,tel,distance}) => {
    return (
        <View style={styles.container}>
            <View style={styles.storeCardContainer}>
                <View style={styles.storeHeaderStyle}>
                    <Image source={{uri:'https://i.imgur.com/gSLzPin.jpg'}} style={styles.imageStyle} />
                </View>
                <View style={styles.storeFooterStyle}>
                    <Text style={styles.storeNameStyle}>{name}</Text>
                    <View style={styles.storeDetailsStyle}>
                        <Text style={styles.storeDetailsTextStyle}>Tel :</Text>
                        <Text style={styles.storeTextStyle}>{tel}</Text>
                    </View>
                    <View style={styles.storeDetailsStyle}>
                        <Text style={styles.storeDetailsTextStyle}>Distance :</Text>
                        <Text style={styles.storeTextStyle}>{distance}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StoreCard

const styles = StyleSheet.create({
    container:{

    },
    storeCardContainer:{
        margin:10,
        
    },
    imageStyle:{
        height:100,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    storeHeaderStyle:{

    },
    storeFooterStyle:{
        borderWidth:0.25
    },
    storeNameStyle:{
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:5,
        paddingTop:10
    },
    storeDetailsTextStyle:{
        fontWeight:'bold',
        fontSize:12,
        paddingLeft:5,
        paddingTop:5
    },
    storeDetailsStyle:{
        flexDirection:'row'
    },
    storeTextStyle:{
        fontSize:12,
        paddingTop:5,
        paddingLeft:5,
    }
})
