import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Modal, TextInput } from 'react-native'
import React, {useState} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Button from '../../components/Button';
import { colors } from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo'

const StorePlan = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView contentContainerStyle={{width:'95%', alignSelf:"center"}}>
        <Text style={styles.heading}>New</Text>
        <Text style={styles.subtext}>Design your store plan</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.6} style={[styles.plusContainer, {marginLeft: 2}]}>
          <FontAwesome5 name='plus' color={'black'} size={35} />
        </TouchableOpacity>
        <Text style={styles.heading}>Sample Store</Text>
        <Text style={styles.subtext}>Choose the pre-planned store design and edit it</Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingVertical: 15, justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => navigation.navigate('SavedMap')} activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}  style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}  style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}  style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.6} style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}  style={styles.plusContainer}>
            <Image source={require('../../assets/map.png')} style={{width:'95%', height:'100%'}} />
          </TouchableOpacity>
        </View>

      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.cross} onPress={() => setModalVisible(!modalVisible)}>
              <Entypo name='cross' size={25} color="black"  />
            </TouchableOpacity>

            <Text style={styles.modalHeading}>Please enter your store dimensions</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.ft}>ft</Text>
              <TextInput placeholder='enter dimensions' placeholderTextColor={'grey'} style={styles.input} />
            </View>

            <Button
              buttonText={'Next'}
              buttonColor={colors.themeBrown}
              textColor={'white'}
              onPress={() => {
                setModalVisible(!modalVisible)
                navigation.navigate('AddMap')
              }}
            />
          </View>
        </View>
      </Modal>      
    </View>
  )
}

export default StorePlan

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: hp('3.6%'),
    fontWeight: 'bold',
    marginTop: 30,
  },
  subtext: {
    color:'grey',
    fontSize: hp('1.7%'),
    marginBottom: 10
  },
  plusContainer: {
    width:wp('30%'),
    height: hp('15%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 8
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
    backgroundColor: colors.themePeach
  },
  modalHeading: {
    color: 'black',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  modalText: {
    color: 'black',
    fontSize: hp('2%'),
  },
  cross: {
    position:'absolute',
    top: 15,
    right: 15
  },
  inputContainer: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems:'center',
    width:'100%',
    paddingHorizontal: 15,
    borderRadius: 10,
    overflow:'hidden',
    marginVertical: 8
  },
  ft: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: hp('2.1%'),
    marginRight: 10
  },
  input: {
    width: '95%'
  }

})