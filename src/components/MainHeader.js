import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { colors } from '../../theme';

const MainHeader = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

      <View>
        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black' }}>
          {
            props.Heading
          }
        </Text>
        <Text style={{ fontSize: hp('1.5%') }}>
          {props.txt}
        </Text>
      </View>

      <Image source={require('../assets/Pfp.png')} />
    </View>
  );
};

export default MainHeader;
