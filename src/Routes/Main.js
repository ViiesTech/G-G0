import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from '../screens/Main/Home'
import OrderHistory from '../screens/Main/OrderHistory';
import StoreLocator from '../screens/Main/StoreLocator';
import Notification from '../screens/Main/Notification';
import Profile from '../screens/Main/Profile';
import { colors } from '../theme';
import SearchProduct from '../screens/Main/SearchProduct';
import FloorPlan from '../screens/Main/FloorPlan';
import MyList from '../screens/Main/MyList';
import Discount from '../screens/Main/Discount';
import Grocery from '../screens/Main/Grocery';
import ShopFloorPlan from '../screens/Main/ShopFloorPlan';


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          title: '',
          tabBarIcon: (({ focused }) => {
            return (
              <View >
                <Image source={require('../assets/home.png')} style={{ tintColor: focused ? colors.themeBrown : null }} />
              </View>
            )
          })
        }}

      />
      <Tab.Screen name="OrderHistory" component={OrderHistory}
        options={{
          title: '',
          tabBarIcon: (({ focused }) => {
            return (
              <View >
                <Image source={require('../assets/cart.png')} style={{ tintColor: focused ? colors.themeBrown : null }} />
              </View>
            )
          })
        }}
      />
      <Tab.Screen name="StoreLocator" component={StoreLocator}
        options={{
          title: '',
          tabBarIcon: (({ focused }) => {
            return (
              <View >
                <Image source={require('../assets/search.png')} style={{ tintColor: focused ? colors.themeBrown : null }} />
              </View>
            )
          })
        }}
      />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          title: '',
          tabBarIcon: (({ focused }) => {
            return (
              <View >
                <Image source={require('../assets/noti.png')} style={{ tintColor: focused ? colors.themeBrown : null }} />
              </View>
            )
          })
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          title: '',
          tabBarIcon: (({ focused }) => {
            return (
              <View >
                <Image source={require('../assets/profile.png')} style={{ tintColor: focused ? colors.themeBrown : null }} />
              </View>
            )
          })
        }}
      />
    </Tab.Navigator>
  );
}

const Main = () => {
  return (

    <Stack.Navigator initialRouteName='MyTabs' screenOptions={{ headerShown: false }} >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen name="FloorPlan" component={FloorPlan} />
      <Stack.Screen name="MyList" component={MyList} />
      <Stack.Screen name="Discount" component={Discount} />
      <Stack.Screen name="Grocery" component={Grocery} />
      <Stack.Screen name="ShopFloorPlan" component={ShopFloorPlan} />


    </Stack.Navigator>

  )
}

export default Main

