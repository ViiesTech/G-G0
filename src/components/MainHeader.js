import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import {colors} from '../../theme';

const MainHeader = () => {
  return (
    <View>
      <Text style={{fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black'}}>
        Hello, Adam
      </Text>
      <Text style={{fontSize: hp('1.5%')}}>
        Shopping for your needs is easier
      </Text>
    </View>
  );
};

export default MainHeader;
