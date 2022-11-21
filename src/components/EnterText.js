import { View, Text,TextInput } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const EnterText = (props) => {
  return (
    <TextInput
    placeholder={props.Holder}
    style={{ height: 60, width: wp('90%'), borderRadius: 10, elevation: 4, backgroundColor: "white", paddingHorizontal: 10 }}
  />
  )
}

export default EnterText