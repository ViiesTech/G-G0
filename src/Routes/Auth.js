import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from "../screens/Auth/Login"
import LoginWithEmail from '../screens/Auth/LoginWithEmail'
import Signup from '../screens/Auth/Signup'
import SignupVerification from '../screens/Auth/SignupVerification'
import Successfully from '../screens/Auth/Successfully'
import SelectAccType from '../screens/Auth/SelectAccType'
import OwnerSignup from '../screens/Auth/OwnerSignup'
import StorePlan from '../screens/Main/StorePlan'
import AddMap from '../screens/Main/AddMap'
import SavedMap from '../screens/Main/SavedMap'
import OwnerHome from '../screens/Main/OwnerHome'
import ManageInventory from '../screens/Main/ManageInventory'
import EditStoreDetails from '../screens/Main/EditStoreDetails'

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
    
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="SignupVerification" component={SignupVerification} />
                <Stack.Screen name="Successfully" component={Successfully} />


                {/* -------------- Owner flow ----------------- */}
                <Stack.Screen name="SelectAccType" component={SelectAccType} />
                <Stack.Screen name="OwnerSignup" component={OwnerSignup} />
                <Stack.Screen name="StorePlan" component={StorePlan} />
                <Stack.Screen name="AddMap" component={AddMap} />
                <Stack.Screen name="SavedMap" component={SavedMap} />
                <Stack.Screen name="OwnerHome" component={OwnerHome} />
                <Stack.Screen name="ManageInventory" component={ManageInventory} />
                <Stack.Screen name="EditStoreDetails" component={EditStoreDetails} />
            </Stack.Navigator>

    )
}

export default Auth