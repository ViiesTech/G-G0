import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from "../screens/Auth/Login"
import LoginWithEmail from '../screens/Auth/LoginWithEmail'
import Signup from '../screens/Auth/Signup'
import SignupVerification from '../screens/Auth/SignupVerification'
import Successfully from '../screens/Auth/Successfully'

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
    
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="SignupVerification" component={SignupVerification} />
                <Stack.Screen name="Successfully" component={Successfully} />
            </Stack.Navigator>

    )
}

export default Auth