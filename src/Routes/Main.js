import { StyleSheet, Text, View } from 'react-native'
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


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Notification' screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="OrderHistory" component={OrderHistory} />
      <Tab.Screen name="StoreLocator" component={StoreLocator} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Main = () => {
  return (
    
    <Stack.Navigator initialRouteName='MyTabs' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="MyTabs" component={MyTabs} />
       
        {/* <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupVerification" component={SignupVerification} />
        <Stack.Screen name="Successfully" component={Successfully} /> */}
    </Stack.Navigator>

)
}

export default Main

