import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { images } from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'


import { colors } from '../../theme';

const MainHeader = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={props.goBack}>
            <Ionicons
              size={20}
              color={'black'}
              name={props.backIcon}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black', marginLeft: props.backIcon ? 10 : 0  }}>
            {
              props.Heading
            }
          </Text>
        </View>
        <Text style={{ fontSize: hp('1.5%'), marginLeft: props.backIcon ? 25 : 0 }}>
          {props.txt}
        </Text>
      </View>

      <Image source={require('../assets/Pfp.png')} />
    </View>
  );
};

export default MainHeader;
