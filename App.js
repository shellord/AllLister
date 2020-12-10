import React,{useState} from 'react';
import { AuthContext } from "./context"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AsyncStorage} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Firebase} from './config'
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


const RootStack = createStackNavigator()
const AuthStack = createStackNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
// const Tab = createMaterialTopTabNavigator();


const RootStackScreen = ({userToken,showIntroScreen}) => (
  <RootStack.Navigator headerMode="none">
    {showIntroScreen ? (
			<RootStack.Screen name="IntroScreen" component={IntroScreen} />
		) :  userToken?(
        <RootStack.Screen
        name="Home"
        component={TabScreen}
        
      /> 
      ):(
        <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
      /> 
      )
    }
  </RootStack.Navigator>
)

const AuthStackScreen = ()=> (
  <AuthStack.Navigator>
     <AuthStack.Screen 
      name="GetStarted"
      component={GetStarted}
      options={
        {
          headerShown:false
        }
      }
    />
    <AuthStack.Screen 
      name="Login"
      component={MobileLogin}
      options={
        {
          headerShown:false
        }
      }
    />
     
    
  </AuthStack.Navigator>
)

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator mode='card'>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={
        {
          headerShown:false
        }
    }
    />
     <HomeStack.Screen
      name="storescreen"
      component={StoreScreen}
      options={
        {
          headerShown:false
        }
    }
    />
    <HomeStack.Screen
      name="categories"
      component={Categories}
      options={
        {
          headerShown:false
        }
    }
    />

    
    <HomeStack.Screen
      name="productscreen"
      component={Product}
      options={
        {
          headerShown:false
        }
    }
    />
     <HomeStack.Screen
      name="Search"
      component={Search}
      options={
        {
          headerShown:false
        }
    }
    />

    
<HomeStack.Screen
      name="NearYou"
      component={NearYou}
      options={
        {
          headerShown:false
        }
    }
    />


<HomeStack.Screen
      name="PrivacyPolicy"
      component={PrivacyPolicy}
      options={
        {
          headerShown:false
        }
    }
    />

<HomeStack.Screen
      name="AboutUs"
      component={AboutUs}
      options={
        {
          headerShown:false
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
            headerShown:false
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
          headerShown:false
        }
      }
    />
  </ProfileStack.Navigator>
)

// function MyTabs() {
//   return (
//     <Tab.Navigator
//     initialRouteName="StoreScreen"
//     tabBarOptions={{
//       activeTintColor: '#e91e63',
//       labelStyle: { fontSize: 12 },
//       style: { backgroundColor: 'powderblue' },
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={Home}
//       options={{ tabBarLabel: 'Home' }}
//     />
//     <Tab.Screen
//       name="Notifications"
//       component={Profile}
//       options={{ tabBarLabel: 'Updates' }}
//     />
//     <Tab.Screen
//       name="StoreScreen"
//       component={StoreScreen}
//       options={{ tabBarLabel: 'StoreScreen' }}
//     />
//   </Tab.Navigator>
//   );
// }

const TabScreen = () => (
  <Tabs.Navigator
    tabBarOptions={
      {
        showLabel:true,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }
    }
  >
    <Tabs.Screen 
      name="Home"
      component={HomeStackScreen }
      options={
        {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          )
        }
      }
    />
    <Tabs.Screen 
      name="Search"
      component={SearchStackScreen }
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
      component={ProfileStackScreen }
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
    }
  }, [])


Firebase.auth().onAuthStateChanged((user) => {
  if(user){
    setuserToken(user)
  } else {
    setuserToken(null)
  }
})

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} 
        	showIntroScreen={showIntroScreen}/>
        
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

