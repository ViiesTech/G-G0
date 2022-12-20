import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import Auth from './Auth';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}>
        {
          user ?
            <Stack.Screen name="Main" component={Main} />
            :
            <Stack.Screen name="Auth" component={Auth} />

        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
