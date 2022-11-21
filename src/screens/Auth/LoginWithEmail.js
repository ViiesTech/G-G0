import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import Logo from '../../components/Logo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import {colors} from '../../theme';
import Input from '../../components/Input';

const LoginWithEmail = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
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

        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.heading}>
            Sign In with email{`\n`}or username
          </Text>
        </View>

        <View style={{width: '90%', alignSelf: 'center', marginBottom: 0}}>
          <Input placeholder="username or email" />
        </View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.smallText}>forgot password?</Text>
        </View>

        <View style={{width: '90%', alignSelf: 'center', marginBottom: 20}}>
          <Input placeholder="password" secureTextEntry={true} />
        </View>

        <View style={{width: '90%', alignSelf: 'center', marginBottom: 20}}>
          <Button
            onPress={() => navigation.navigate('Main')}
            buttonText="Sign In"
            buttonColor={colors.themeBrown}
            textColor="white"
            style={{borderColor: 'lightgrey'}}
          />
        </View>
        <View style={{width: '90%', height: 1, backgroundColor: 'lightgrey'}} />
        <Text style={{marginVertical: 20, color: 'black'}}>
          Don't have an account?
        </Text>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Button
            onPress={() => navigation.navigate('Signup')}
            buttonText="Create an account"
            buttonColor={colors.themeGrey}
            textColor="white"
            style={{borderColor: 'lightgrey'}}
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
});
