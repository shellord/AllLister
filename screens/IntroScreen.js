import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { AsyncStorage } from 'react-native'
import { AuthContext } from "../context"

const data = [
  {
    title: 'The Simple way to find your product',
    text: 'With just one touch, find the shops and products that fits exactly your demand & budget ',
    image: require('../assets/illustrations/product.png'),
    // bg: '#59b2ab',
    bg:'#fff'
  },
  {
    title: 'Find the nearest shop and products',
    text: 'Help you find the nearest shop based on your search keywords and location',
    image: require('../assets/illustrations/near.png'),
    bg:'#fff'
  },
  {
    title: 'We help you save your time',
    text: "Give us your location, we suggest you plenty of shops and products that you absolutely love and looking for",
    image: require('../assets/illustrations/time.png'),
    bg: '#fff',
  },
   {
    title: 'Ready!',
    text: "You're all ready,set to rock and roll. Get started with alllister now!",
    image: require('../assets/illustrations/ready.png'),
    bg: '#fff',
  },
]


const IntroScreen = () => {
    const {IntroDone} = React.useContext(AuthContext)
    const _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-arrow-round-forward"
              color='black'
              size={24}
            />
          </View>
        )
      }

     const  _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-checkmark"
              color='black'
              size={24}
            />
          </View>
        )
      }

  const _renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  }


return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={(item)=>(item.title)}
          renderItem={_renderItem}
          data={data}
          renderDoneButton={_renderDoneButton}
          renderNextButton={_renderNextButton}
          onDone={IntroDone}
        />
      </View>
    ) 
}

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white', 
      padding:30,
    },
    image: {
      width: 300,
      height: 300,
      marginVertical: 32,
    },
    text: {
      // color: 'rgba(255, 255, 255, 0.8)',
      color:'#000',
      textAlign: 'left',
      fontWeight:"500",
      fontSize:14,
      letterSpacing:2
    },
    title: {
      marginBottom:10,
      fontSize: 24,
      color: 'black',
      textAlign: 'left',
      fontWeight:'600',
      textTransform:'uppercase',
      letterSpacing:1
    },
  })

export default IntroScreen