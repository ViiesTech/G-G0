import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {images} from '../assets'

const Logo = () => {
  return (
    <View>
      <Image  source={images.logoSm} />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})