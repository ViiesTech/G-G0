import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../theme';
import EnterText from '../../components/EnterText';
import HomeCard from '../../components/HomeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slice/AddToCartSlice'


const Home = ({navigation}) => {
  const count = useSelector(state => state.counter.addNum)
  const dispatch = useDispatch()


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <MainHeader Heading={"Hello, Adam"} txt={'Shopping for your needs is easier'} />
      <EnterText Holder={"Find Now"} />

      <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: colors.themeBlack, marginTop: 20 }}>Main Menu</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10   }}>
        <HomeCard Img={require('../../assets/C2.png')} txt={"Grocery"} Nav={()=> navigation.navigate('Grocery')}/>
        <HomeCard Img={require('../../assets/C3.png')} Nav={()=> navigation.navigate('MyList')} txt={"My List"}/>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop:10 }}>
        <HomeCard Img={require('../../assets/C4.png')} Nav={()=> navigation.navigate('Discount')} txt={"Discount"}/>
        <HomeCard Img={require('../../assets/C1.png')} txt={"Order History"} Nav={()=> navigation.navigate('OrderHistory')}/>
      </View>
{/* 
      <TouchableOpacity onPress={()=> dispatch(incrementByAmount("Banana"))} style={{height:10, width: wp('90%'), alignSelf:'center', backgroundColor:'red'}}>

      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={()=> dispatch(decrement())} style={{height:10, width: wp('90%'), alignSelf:'center', backgroundColor:'red'}}>

      </TouchableOpacity> */}

    </View>
  )
}

export default Home