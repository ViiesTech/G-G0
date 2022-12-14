import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
  } from 'react-native';
  import React, {useState} from 'react';
  import {images} from '../../assets';
  import Logo from '../../components/Logo';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Button from '../../components/Button';
  import {colors} from '../../theme';
  import Input from '../../components/Input';
  import CheckBox from '@react-native-community/checkbox';
  
  const Signup = ({navigation}) => {
    const [isAccepted, setIsAccepted] = useState(false)
    
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
            <Text style={styles.heading}>Create an account</Text>
          </View>
  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input placeholder="Full Name" />
          </View>
  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input placeholder="Email Address" keyboardType='email-address' />
          </View>

          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input placeholder="Zip Code" keyboardType='number-pad' />
          </View>
          
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input placeholder="Password" secureTextEntry={true} />
          </View>

          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input placeholder="Re-type Password" secureTextEntry={true} />
          </View>
  
          <View style={styles.checkContainer}>
            <CheckBox value={isAccepted} onValueChange={setIsAccepted} />
            <Text style={{color: 'black'}}>I have read and accept the <Text style={styles.link}>terms and conditions</Text></Text>
          </View>

          <View style={{width: '90%', alignSelf: 'center', marginBottom: 20}}>
            <Button
              onPress={() => navigation.navigate('SignupVerification')}
              disabled={!isAccepted}
              buttonText="Create Account"
              buttonColor={isAccepted ? colors.themeBrown : 'rgba(187,73,3,0.6)'}
              textColor="white"
              style={{borderColor: 'lightgrey'}}
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
  