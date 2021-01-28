import React, { useContext } from 'react'
import { StyleSheet, Image, Dimensions, View, Text } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { AuthContext } from '../context'

const { width, height } = Dimensions.get('window')

const Carousel = ({ route, data }) => {

    const { UPLOAD_URL } = useContext(AuthContext)

    const renderItem = ({ item }) => {
        let img = ''
        if (item)
            item.image ? img = UPLOAD_URL + JSON.parse(item.image)[0].name.replace('/var/www/html/', '')
                : null
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={{ alignSelf: 'center', color: 'grey' }}>- SWIPE TO SEE PRODUCT IMAGES -</Text>

                <Image
                    style={styles.imageStyle}
                    source={{ uri: img }}
                />
            </View>
        )
    }
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />

    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        height: 230
    },
    imageStyle: {
        width: width,
        height: "100%",
        marginHorizontal: 5,
    }
})
