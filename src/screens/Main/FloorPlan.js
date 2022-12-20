import { View, Text, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { colors } from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo'
import Modal from 'react-native-modal';

const FloorPlan = ({ navigation }) => {
   
    return (

        <View style={{ flex: 1 }}>
            <View style={{ padding: 20, flex: 0.3 }}>

                <MainHeader backIcon={'arrow-back'} Heading={'Hello, Adam'} goBack={() => navigation.goBack()} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button buttonText={'Start Shopping'} buttonColor={colors.themeGrey} textColor={'white'} style={{ width: wp('90') }} onPress={()=> navigation.navigate('ShopFloorPlan')} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Entypo size={15} name={'clock'} color={colors.themeBrown} />
                    <Text style={{ marginLeft: 5, color: colors.themeBrown }}>01:50:17</Text>
                </View>

            </View>
            <View style={{ flex: 1, }}>

                <Image source={require('../../assets/plan.png')} resizeMode={'stretch'} style={{ flex: 1, width: wp('100%'), }} />
            </View>

           
        </View>

    )
}

export default FloorPlan