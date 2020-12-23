import { NavigationHelpersContext } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

const MaterialStoreCard = ({id,name,tel,distance,otime,ctime,navigation,logoUri,storeImg,category}) => {
    return (
        
        <TouchableWithoutFeedback onPress={() =>{ navigation.navigate('storescreen',{
            itemId: id,
            itemName:name,
            itemTel:tel,
            itemDistance:distance,
            otime:otime,
            ctime:ctime,
            itemImg:storeImg,
            category:category
          });
        }}>
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            <Image source={{uri:logoUri}} style={styles.imageStyle} />
            <View style={styles.textContainer}>
                <Text style={styles.mainTitle}>{name}</Text>
                <Text style={styles.telTitle}>{tel}</Text>
                <Text style={styles.timeTitle}>{otime} - {ctime}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name="location-arrow" size={14} color="black" />
                <Text style={styles.distanceTitle}>{Math.round(distance)} km</Text>
                </View>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default MaterialStoreCard

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        backgroundColor:'white'
    },
    mainContainer:{
        flex:1,
        flexDirection:'row'
    },
    textContainer:{
        flex:1,
        padding:0,
        marginLeft:10,
        flexDirection:'column'
    },
    imageStyle:{
        height:60,
        width:80,
        // borderRadius:10,
    },
    mainTitle:{
        fontSize:16,
        fontWeight:'600',
        textTransform:'uppercase'
    },
    telTitle:{
        fontSize:15,
        fontWeight:'500',
        color:'grey',
        textTransform:'uppercase'
    },
    timeTitle:{
        fontSize:12,
        fontWeight:'500',
        color:'grey',
        textTransform:'uppercase'
    },
    distanceTitle:{
        fontSize:15,
        fontWeight:'500',
        color:'black',
        marginLeft:5,
        textTransform:'uppercase'
    }
})
