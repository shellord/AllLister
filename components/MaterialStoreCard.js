import { NavigationHelpersContext } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context'

const MaterialStoreCard = ({ id, name, tel, distance, otime, ctime, navigation, logoUri, storeImg, category, recommended }) => {
    const { UPLOAD_URL } = useContext(AuthContext)
    let dist = ''
    if (distance < 1) {
        dist = Math.round(distance * 1000)
        dist = dist.toString() + ' M'
    } else {
        dist = Math.round(distance) + ' KM'
    }
    let img = ''
    logoUri ? img = UPLOAD_URL + JSON.parse(logoUri)[0].name.replace('/var/www/html/', '') : null
    return (

        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('storescreen', {
                itemId: id,
                itemName: name,
                itemTel: tel,
                itemDistance: distance,
                otime: otime,
                ctime: ctime,
                itemImg: storeImg,
                category: category
            });
        }}>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Image source={{ uri: img }} style={styles.imageStyle} />
                    <View style={styles.textContainer}>
                        <Text style={styles.mainTitle}>{name}</Text>
                        <Text style={styles.telTitle}>{tel}</Text>
                        {distance ? <Text style={styles.timeTitle}>{otime} - {ctime}</Text> : null}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            {distance ? <Icon name="location-arrow" size={14} color="black" /> : null}

                            {distance ?
                                <Text style={styles.distanceTitle}>{dist}</Text> : null}
                            {recommended ? <Text style={styles.distanceTitle}>recommended</Text> : null}

                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MaterialStoreCard

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    textContainer: {
        flex: 1,
        padding: 0,
        marginLeft: 10,
        flexDirection: 'column'
    },
    imageStyle: {
        height: 60,
        width: 80,
        // borderRadius:10,
    },
    mainTitle: {
        fontSize: 15,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.7
    },
    telTitle: {
        fontSize: 15,
        fontWeight: '400',
        color: 'grey',
        textTransform: 'uppercase',
        letterSpacing: 0.5
    },
    timeTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
        textTransform: 'uppercase'
    },
    distanceTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
        marginLeft: 5,
        textTransform: 'uppercase',
        letterSpacing: 0.5
    }
})
