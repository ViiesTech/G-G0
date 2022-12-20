import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/Routes/Routes'
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux'
import Store from './src/redux/store/Store';


const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})