import React, { useState, useEffect } from 'react';
import { AuthContext } from "./context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AsyncStorage } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Firebase } from './config'
import MobileLogin from './screens/MobileLogin'
import Home from './screens/Home'
import Search from './screens/Search'
import Profile from './screens/Profile'
import StoreScreen from './screens/StoreScreen';
import Product from './screens/Product';
import Catrgories from './screens/Categories'
import Categories from './screens/Categories';
import GetStarted from './screens/GetStarted'
import PrivacyPolicy from './screens/PrivacyPolicy'
import AboutUs from './screens/AboutUs'
import NearYou from './screens/NearYou'
import IntroScreen from './screens/IntroScreen'
import CategoryExpand from './screens/CategoryExpand'
import Loading from './components/Loading'
import * as Location from 'expo-location'
import Geocoder from 'react-native-geocoding'
import ChangeLocation from './screens/ChangeLocation'

const RootStack = createStackNavigator()
const AuthStack = createStackNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Tabs = createBottomTabNavigator()


const API_URL = "http://alllisterapi.ddns.net:3000/api/"
const UPLOAD_URL = "http://alllisterapi.ddns.net/"
const API_KEY = "AIzaSyAScZ9mwTrPHrYjr68NeYsFqUgaGvrpWLU"

const RootStackScreen = ({ userToken, showIntroScreen }) => (
  <RootStack.Navigator headerMode="none">
    {showIntroScreen ? (
      <RootStack.Screen name="IntroScreen" component={IntroScreen} />
    ) : userToken ? (
      <RootStack.Screen
        name="Home"
        component={TabScreen}

      />
    ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
          />
        )
    }
  </RootStack.Navigator>
)

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="GetStarted"
      component={GetStarted}
      options={
        {
          headerShown: false
        }
      }
    />
    <AuthStack.Screen
      name="Login"
      component={MobileLogin}
      options={
        {
          headerShown: false
        }
      }
    />


  </AuthStack.Navigator>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator mode='card'>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={
        {
          headerShown: false
        }
      }
    />
    <HomeStack.Screen
      name="storescreen"
      component={StoreScreen}
      options={
        {
          headerShown: false
        }
      }
    />
    <HomeStack.Screen
      name="categories"
      component={Categories}

      options={
        {
          showLabel: false,
          headerShown: false
        }
      }
    />
    <HomeStack.Screen
      name="categoryexpand"
      component={CategoryExpand}
      options={
        {
          showLabel: false,
          title: 'CATEGORIES',
          headerShown: true
        }
      }
    />


    <HomeStack.Screen
      name="productscreen"
      component={Product}
      options={
        {
          headerShown: false
        }
      }
    />
    <HomeStack.Screen
      name="Search"
      component={Search}
      options={
        {
          headerShown: false
        }
      }
    />


    <HomeStack.Screen
      name="NearYou"
      component={NearYou}
      options={
        {
          headerShown: false
        }
      }
    />


    <HomeStack.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicy}
      options={
        {
          headerShown: false
        }
      }
    />

    <HomeStack.Screen
      name="AboutUs"
      component={AboutUs}
      options={
        {
          headerShown: false
        }
      }
    />
    <HomeStack.Screen
      name="ChangeLocation"
      component={ChangeLocation}
      options={
        {
          headerShown: false
        }
      }
    />

  </HomeStack.Navigator>
)


const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={
        {
          headerShown: false
        }
      }
    />
  </SearchStack.Navigator>
)


const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={
        {
          headerShown: false
        }
      }
    />
  </ProfileStack.Navigator>
)


const TabScreen = () => (
  <Tabs.Navigator
    tabBarOptions={
      {
        showLabel: true,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }
    }
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={
        {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          )
        }
      }
    />
    <Tabs.Screen
      name="Categories"
      component={Categories}
      options={
        {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list" color={color} size={size} />
          )
        }
      }
    />
    <Tabs.Screen
      name="Search"
      component={SearchStackScreen}
      options={
        {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" color={color} size={size} />
          )
        }
      }
    />
    <Tabs.Screen
      name="Settings"
      component={ProfileStackScreen}
      options={
        {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          )
        }
      }
    />
  </Tabs.Navigator>
)

export default function App() {

  const [userToken, setuserToken] = useState(null)
  const [showIntroScreen, setShowIntroScreen] = useState(1)
  const [isInitializing, setisInitializing] = useState(1)
  const [locationName, setlocationName] = useState(null)
  const [userLat, setuserLat] = useState(null)
  const [userLong, setuserLong] = useState(null)

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setuserLat(location.coords.latitude)
      setuserLong(location.coords.longitude)

    })()
  }, [])

  useEffect(() => {
    if (userLong && userLat) {
      Geocoder.init(API_KEY)
      Geocoder.from(userLat, userLong)
        .then(json => {
          var addressComponent = json.results[0].address_components[2].long_name
          setlocationName(addressComponent)
          setisInitializing(0)
        })
        .catch(error => console.warn(error))
    }
  }, [userLat, userLong])

  AsyncStorage.getItem("showIntro").then((val) => {
    if (val !== null) setShowIntroScreen(0)
  })


  const authContext = React.useMemo(() => {
    return {
      signOut: () => {
        Firebase.auth().signOut()
      },
      IntroDone: () => {
        setShowIntroScreen(0)
        AsyncStorage.setItem("showIntro", "false")
      },
      userLat: userLat,
      userLong: userLong,
      locationName: locationName,
      chgLocation: (lat, long) => {
        setuserLat(lat)
        setuserLong(long)
      },
      API_URL: API_URL,
      UPLOAD_URL: UPLOAD_URL,
      API_KEY: API_KEY
    }
  }, [userLat, userLong, locationName])

  const checkReg = (user) => {
    fetch(API_URL + `users/${user.phoneNumber}`)
      .then((response) => response.json())
      .then((json) => {
        try {
          if (json.response.length == 0) {
            fetch(API_URL + `adduser/${user.phoneNumber}`)
              .catch(e => alert("Network Error!"))
          }

        }
        catch (e) {

        }
        // if(Object.keys(json.response).length!=0){
        //   setisFinishedSignup(1)
        // }

      })
      .catch((error) => {
        alert(error)
      })

  }
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      checkReg(user)
      setuserToken(user)
      // setisInitializing(0)
    } else {
      setuserToken(null)
    }
  })
  if (isInitializing || !locationName) {
    return (
      <Loading />
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken}
          showIntroScreen={showIntroScreen}
        />
      </NavigationContainer>
    </AuthContext.Provider>
  )


}

