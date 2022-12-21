import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
    TextInput,
    Modal,
    Pressable,
    Alert,
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
  import auth from '@react-native-firebase/auth';
  import firestore from '@react-native-firebase/firestore';
  
  const EditStoreDetails = ({navigation}) => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  
    const [userData, setUserData] = useState({
      StoreName: '',
      Email: '',
      PhoneNumber: '',
      AddressLine1: '',
      AddressLine2: '',
      City: '',
      State: '',
      Country: '',
      ZipCode: '',
    });
  
    const SignUp = () => {
      auth()
        .createUserWithEmailAndPassword(userData.Email, userData.Password)
        .then(() => {
          console.log('User account created & signed in!');
          const UID = auth().currentUser.uid;
          firestore().collection('Users').doc(UID).set({
            fullname: userData.FullName,
            email: userData.Email,
            zipCode: userData.Email,
            uid: UID,
          });
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
    };
  
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
          <View style={{marginTop:20}}>
            <Logo />
          </View>
  
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text style={styles.heading}>Edit Store Details</Text>
          </View>
  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input
              placeholder="Store Name"
              onchangeText={txt => {
                setUserData({...userData, StoreName: txt});
              }}
              value={userData.StoreName}
            />
          </View>
  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input
              placeholder="Email Address"
              keyboardType="email-address"
              onchangeText={txt => {
                setUserData({...userData, Email: txt});
              }}
              value={userData.Email}
            />
          </View>
  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input
              placeholder="Phone Number"
              keyboardType="number-pad"
              onchangeText={txt => {
                setUserData({...userData, PhoneNumber: txt});
              }}
              value={userData.PhoneNumber}
            />
          </View>
  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input
              placeholder="Address Line 1"
              onchangeText={txt => {
                setUserData({...userData, AddressLine1: txt});
              }}
              value={userData.AddressLine1}
            />
          </View>
  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 10}}>
            <Input
              placeholder="Address Line 2"
              onchangeText={txt => {
                setUserData({...userData, AddressLine2: txt});
              }}
              value={userData.AddressLine2}
            />
          </View>
  
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{width: '49%', alignSelf: 'center'}}>
              <Input
                placeholder="City"
                onchangeText={txt => {
                  setUserData({...userData, City: txt});
                }}
                value={userData.City}
              />
            </View>
            <View style={{width: '49%', alignSelf: 'center'}}>
              <Input
                placeholder="State"
                onchangeText={txt => {
                  setUserData({...userData, State: txt});
                }}
                value={userData.State}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{width: '49%', alignSelf: 'center'}}>
              <Input
                placeholder="Country"
                onchangeText={txt => {
                  setUserData({...userData, Country: txt});
                }}
                value={userData.Country}
              />
            </View>
            <View style={{width: '49%', alignSelf: 'center'}}>
              <Input
                placeholder="Zip Code"
                keyboardType="number-pad"
                onchangeText={txt => {
                  setUserData({...userData, ZipCode: txt});
                }}
                value={userData.ZipCode}
              />
            </View>
          </View>
  
  

  
          <View style={{width: '90%', alignSelf: 'center', marginBottom: 20}}>
            <Button
              onPress={() => navigation.navigate('OwnerHome')}
              buttonText="Save"
              buttonColor={colors.themeBrown}
              textColor="white"
              style={{borderColor: 'lightgrey'}}
            />
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.modalView}>
              <Image source={require('../../assets/checkMark.png')} />
              <Text style={styles.modalHeading}>Thank You</Text>
              <Text style={styles.modalText}>
                Your account is successfully created
              </Text>
              <Button
                buttonText={'Start Your Store Design'}
                buttonColor={colors.themeBrown}
                textColor={'white'}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  navigation.navigate('StorePlan')
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default EditStoreDetails;
  
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
      marginVertical: 12,
    },
    link: {
      color: colors.themeBrown,
      borderBottomWidth: 1,
      borderColor: colors.themeBrown,
    },
    modalView: {
      margin: 20,
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalHeading: {
      color: 'black',
      fontSize: hp('3%'),
      fontWeight: 'bold',
      marginVertical: 10,
    },
    modalText: {
      color: 'black',
      fontSize: hp('2%'),
    },
  });
  