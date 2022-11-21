import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../theme';
import EnterText from '../../components/EnterText';
import HomeCard from '../../components/HomeCard';
import Button from '../../components/Button';

const Profile = () => {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', color: colors.themeBlack }}>Profile</Text>

            <View style={{ backgroundColor: 'white', elevation: 5, justifyContent: 'flex-start', borderRadius: 20 }}>

                <Image source={require('../../assets/cover.png')} style={{ alignSelf: 'center', width: wp('90%'), borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 150 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                    <View style={{ flexDirection: 'row',  }}>

                        <Image source={require('../../assets/PfpImg.png')} style={{ height: 100, width: 100, top: -30, left: 10 }} />

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: colors.themeBlack }}>Adam Christ</Text>
                            <Text style={{ color: colors.themeBrown, fontWeight: 'bold' }}>Verified Profile</Text>
                        </View>
                    </View>

                    <Text style={{ right: 10, color: colors.themeBlack, fontSize: hp('1.5%'), fontWeight:'bold' }}>Edit Profile</Text>
                </View>
            </View>


            <Button Elevation={4} buttonColor={'white'} style={{borderColor: 'white', justifyContent:'flex-start' , alignItems:'center', paddingHorizontal: 20}} icon={<Image source={require('../../assets/acc.png')}/>} buttonText={'Account Setting'}/>
            <Button Elevation={4} buttonColor={'white'} style={{borderColor: 'white', justifyContent:'flex-start' , alignItems:'center', paddingHorizontal: 20, marginTop: 20}} icon={<Image source={require('../../assets/logout.png')}/>} buttonText={'Logout'}/>

 
        </View>
    )
}

export default Profile