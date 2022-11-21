import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Button = ({buttonColor, buttonText, textColor, style, icon, onPress, disabled=false ,Elevation}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.6} style={[styles.container, {backgroundColor: buttonColor, elevation:Elevation}, style]}>
        {icon}
     
        <Text style={[styles.buttonText, {color: textColor}]}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'grey',
        paddingVertical: '5%',
        borderRadius: 15,
        flexDirection: 'row',
        marginTop:20
    },
    buttonText: {
        fontSize: wp('4.4%'),
        marginLeft: 10
    }
})