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


const SelectAccType = ({ navigation }) => {
  

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
        <Text style={styles.heading}>Welcome to <Text style={{color: colors.themeBrown}} >G-Go</Text></Text>
        <Text style={styles.subText} >Create an account as user or store owner</Text>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Button
            onPress={() => navigation.navigate('Signup')}
            buttonText="User"
            buttonColor={colors.themeBrown}
            textColor='white'
            style={{ borderColor: 'lightgrey' }}
          />
        </View>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Button
            onPress={() => navigation.navigate('OwnerSignup')}
            buttonText="Store Owner"
            buttonColor={colors.themeGrey}
            textColor='white'
            style={{ borderColor: 'lightgrey' }}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default SelectAccType;

const styles = StyleSheet.create({
  heading: {
    fontSize: wp('6%'),
    color: 'black',
    fontWeight: 'bold',
    marginTop: 50
  },
  subText: {
    fontSize: hp('2%'),
    marginVertical: 10,
    color:'black'
  }
});
