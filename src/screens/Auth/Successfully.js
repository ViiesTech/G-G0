import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import {colors} from '../../theme';

const Successfully = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <Image source={images.Success} style={{alignSelf: 'center'}} />
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: 'black',
          fontSize: hp('2.5%'),
          width: wp('40%'),
          textAlign: 'center',
          marginTop: 20,
        }}>
        Successfully Verified
      </Text>
      <Button
        buttonText={'Back To Login'}
        textColor={'white'}
        buttonColor={colors.themeBrown}
      />
    </View>
  );
};

export default Successfully;
