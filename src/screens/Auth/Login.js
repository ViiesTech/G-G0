import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import React,{useState} from 'react';
import { images } from '../../assets';
import Logo from '../../components/Logo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { colors } from '../../theme';


const Login = ({ navigation }) => {
  

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        <Logo />
        <Text style={styles.heading}>Sign in to your account</Text>
        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
          <Button
            buttonText="Sign in with google"
            buttonColor="white"
            textColor={'black'}
            style={{ borderColor: 'lightgrey' }}
            icon={<Image source={images.googleIcon} />}
          />
        </View>
        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
          <Button
            buttonText="Sign in with facebook"
            buttonColor="white"
            textColor={'black'}
            style={{ borderColor: 'lightgrey' }}
            icon={<Image source={images.facebookIcon} />}
          />
        </View>
        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 20 }}>
          <Button
            onPress={() => navigation.navigate('LoginWithEmail')}
            buttonText="Continue with email"
            buttonColor={colors.themeBrown}
            textColor='white'
            style={{ borderColor: 'lightgrey' }}
          />
        </View>
        <View style={{ width: '90%', height: 1, backgroundColor: 'lightgrey' }} />
        <Text style={{ marginVertical: 20, color: 'black' }}>Don't have an account?</Text>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Button
            onPress={() => navigation.navigate('Signup')}
            buttonText="Create an account"
            buttonColor={colors.themeGrey}
            textColor='white'
            style={{ borderColor: 'lightgrey' }}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp('6%'),
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 50
  },
});
