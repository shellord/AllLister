import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { AuthContext } from '../context'
import LandMark from '../components/Landmark'

const Header = ({ navigation }) => {
    const { signOut, locationName } = React.useContext(AuthContext)
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTextStyle}>all lister</Text>
            <View style={styles.signoutTextStyle}>
                <LandMark locationName={locationName} navigation={navigation} />
            </View>

            {/* <TouchableWithoutFeedback onPress={()=> signOut()}>
            <Text style={styles.signoutTextStyle}> LOG OUT </Text>
            </TouchableWithoutFeedback> */}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        // marginBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#FFC300'

    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: "600",
        padding: 10,
        marginLeft: 10,
        letterSpacing: 4
    },
    signoutTextStyle: {
        fontSize: 18,
        fontWeight: "600",
        padding: 10,
        letterSpacing: 1,
        textTransform: 'uppercase'
    }
})
