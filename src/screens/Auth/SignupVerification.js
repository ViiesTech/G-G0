import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from '../../assets';
import Logo from '../../components/Logo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import {colors} from '../../theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Modal from 'react-native-modal';

const SignupVerification = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    
  };

  const backToLogin =() => {
    navigation.navigate('Login')
    setModalVisible(!isModalVisible);
  }

  const [count, setCount] = useState(30);

  useEffect(() => {
    Counter();
  }, [count]);

  const Counter = () => {
    if (count == 0) {
      console.log('Dead');
    } else {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  };

  return (
    <View style={{flex: 1}}>
      {console.log(count)}
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        <View style={{width: '90%', alignSelf: 'center', paddingLeft: 4}}>
          <Text style={styles.heading}>Email</Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center', paddingLeft: 4}}>
          <Text style={styles.subHeading}>
            An email has been sent to your registered email address. Enter the
            verification code below:
          </Text>
        </View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <OTPInputView
            style={{width: '95%', height: 200}}
            pinCount={5}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.verySmallText}>Didn't recieve a code?</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.smallText}>Resend Code</Text>
        </TouchableOpacity>

        <Text style={{alignSelf: 'center', marginBottom: 20}}>00:{count}</Text>

        <View style={{width: '90%', alignSelf: 'center', marginBottom: 20}}>
          <Button
            onPress={toggleModal}
            buttonText="Verify"
            buttonColor={colors.themeBrown}
            textColor="white"
            style={{borderColor: 'lightgrey'}}
          />
        </View>
        <Modal isVisible={isModalVisible} style={{margin: 0}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              backgroundColor: 'white',
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
              onPress={()=> backToLogin()}
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default SignupVerification;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp('6%'),
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  smallText: {
    alignSelf: 'center',
    color: 'rgba(0,0,0,0.7)',
    marginBottom: 25,
    fontWeight: 'bold',
    fontSize: wp('5%'),
    marginRight: 6,
  },
  verySmallText: {
    alignSelf: 'center',
    color: 'black',
    marginVertical: 8,
    fontSize: wp('3.7%'),
    marginRight: 6,
  },
  subHeading: {
    fontSize: wp('3.8%'),
    marginTop: 5,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    backgroundColor: '#EEEEEE',
  },

  underlineStyleHighLighted: {
    width: 50,
    height: 50,
    color: 'black',
  },
});
