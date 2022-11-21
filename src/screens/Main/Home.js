import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../theme';
import EnterText from '../../components/EnterText';
import HomeCard from '../../components/HomeCard';


const Home = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <MainHeader Heading={"Hello, Adam"} txt={'Shopping for your needs is easier'} />
      <EnterText Holder={"Find Now"} />

      <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: colors.themeBlack, marginTop: 20 }}>Main Menu</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <HomeCard Img={require('../../assets/C1.png')} />
        <HomeCard Img={require('../../assets/C2.png')} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop:10 }}>
        <HomeCard Img={require('../../assets/C3.png')} />
        <HomeCard Img={require('../../assets/C4.png')} />
      </View>

    </View>
  )
}

export default Home