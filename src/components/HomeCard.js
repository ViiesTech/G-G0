import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../theme';

const HomeCard = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.Nav} activeOpacity={0.8} style={{ height: hp('25%'), width: wp('44%'), backgroundColor: colors.themePeach, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={props.Img} />
      </TouchableOpacity>

      <Text style={{fontSize:hp('1.7%'), fontWeight:'bold', color:colors.themeBlack, marginTop:3,  alignSelf:'center'}}>{props.txt}</Text>
    </View>
  )
}

export default HomeCard