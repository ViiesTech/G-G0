import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { images } from '../../assets';
import Logo from '../../components/Logo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { colors } from '../../theme';
import Input from '../../components/Input';
import auth from '@react-native-firebase/auth';

const LoginWithEmail = ({ navigation }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const LoginUser = () => {
    if (userData.email == "") {
      return null
    } else if (userData.password == "") {
      return null
    } else {
      auth()
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }

  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        <Logo />

        <View style={{ width: '90%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.heading}>
            Sign In with email{`\n`}or username
          </Text>
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 0 }}>
          <Input placeholder="username or email" onchangeText={(txt) => { setUserData({ ...userData, email: txt }) }} value={userData.email} />
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 0, marginTop: 15 }}>
          <Input placeholder="password" secureTextEntry={true} onchangeText={(txt) => { setUserData({ ...userData, password: txt }) }} value={userData.password} />
        </View>

        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Text style={styles.smallText}>forgot password?</Text>
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 20 }}>
          <Button
            onPress={() => LoginUser()}
            buttonText="Sign In"
            buttonColor={colors.themeBrown}
            textColor="white"
            style={{ borderColor: 'lightgrey' }}
          />
        </View>
        <View style={{ width: '90%', height: 1, backgroundColor: 'lightgrey' }} />
        <Text style={{ marginVertical: 20, color: 'black' }}>
          Don't have an account?
        </Text>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Button
            onPress={() => navigation.navigate('SelectAccType')}
            buttonText="Create an account"
            buttonColor={colors.themeGrey}
            textColor="white"
            style={{ borderColor: 'lightgrey' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginWithEmail;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp('6.5%'),
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 30,
    // alignSelf: 'flex-start',
    textAlign: 'center',
    paddingLeft: 10,

  },
  smallText: {
    alignSelf: 'flex-end',
    color: 'black',
    marginVertical: 14,
    fontWeight: 'bold',
    fontSize: wp('4%'),
    marginRight: 6,
  },
});
