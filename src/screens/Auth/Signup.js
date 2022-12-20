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
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Signup = ({ navigation }) => {
  const [isAccepted, setIsAccepted] = useState(false)

  const [userData, setUserData] = useState({
    Email: "",
    Password: "",
    FullName: "",
    ZipCode: "",
    ReTypePassword: "",
  })


  const SignUp = () => {
    auth()
      .createUserWithEmailAndPassword(userData.Email, userData.Password)
      .then(() => {
        console.log('User account created & signed in!');
        const UID = auth().currentUser.uid
        firestore()
          .collection("Users")
          .doc(UID)
          .set({
            fullname: userData.FullName,
            email: userData.Email,
            zipCode: userData.Email,
            uid: UID,

          })
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

        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Text style={styles.heading}>Create an account</Text>
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
          <Input placeholder="Full Name" onchangeText={(txt) => { setUserData({ ...userData, FullName: txt }) }} value={userData.FullName} />
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
          <Input placeholder="Email Address" keyboardType='email-address' onchangeText={(txt) => { setUserData({ ...userData, Email: txt }) }} value={userData.Email} />
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
          <Input placeholder="Zip Code" keyboardType='number-pad' onchangeText={(txt) => { setUserData({ ...userData, ZipCode: txt }) }} value={userData.ZipCode} />
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
          <Input placeholder="Password" secureTextEntry={true} onchangeText={(txt) => { setUserData({ ...userData, Password: txt }) }} value={userData.Password} />
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 10 }}>
          <Input placeholder="Re-type Password" secureTextEntry={true} onchangeText={(txt) => { setUserData({ ...userData, ReTypePassword: txt }) }} value={userData.ReTypePassword} />
        </View>

        <View style={styles.checkContainer}>
          <CheckBox value={isAccepted} onValueChange={setIsAccepted} />
          <Text style={{ color: 'black' }}>I have read and accept the <Text style={styles.link}>terms and conditions</Text></Text>
        </View>

        <View style={{ width: '90%', alignSelf: 'center', marginBottom: 20 }}>
          <Button
            onPress={() => SignUp()}
            disabled={!isAccepted}
            buttonText="Create Account"
            buttonColor={isAccepted ? colors.themeBrown : 'rgba(187,73,3,0.6)'}
            textColor="white"
            style={{ borderColor: 'lightgrey' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp('6.5%'),
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 30,
    alignSelf: 'flex-start',
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
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    alignItems: 'center',
    marginVertical: 12
  },
  link: {
    color: colors.themeBrown,
    borderBottomWidth: 1,
    borderColor: colors.themeBrown,
  }
});
