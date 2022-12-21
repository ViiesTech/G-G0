import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import { colors } from '../../theme';
import Button from '../../components/Button';

const SavedMap = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'90%', alignSelf:'center', marginTop: 30}}>
            <TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: hp('2.5%'), color: 'black'}}>Done</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', width:'35%', justifyContent:'space-between'}}>
                <TouchableOpacity>
                    <MaterialCommunityIcons  name="arrow-u-left-top" color="black" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
                    <MaterialCommunityIcons  name="plus" color="black" size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons  name="format-text" color="black" size={25} />
                </TouchableOpacity>
            </View>
        </View>
        <Image source={require('../../assets/bigMap.png')} style={{alignSelf:'center', marginTop: 65}} />
        <View style={{width: '90%', alignSelf: 'center', marginTop: -5, position: 'absolute', bottom: 20}}>
            <Button  buttonText={"Save"} buttonColor={colors.themeBrown} textColor="white" style={{borderWidth: 0}} onPress={() => navigation.navigate('OwnerHome')} />
        </View>
        <Modal onBackButtonPress={() => setModalVisible(false) } isVisible={isModalVisible} coverScreen={false} hasBackdrop={false} animationIn='slideInUp' animationOut='slideOutDown' style={{ margin: 0}} >
            <View style={{ width:'100%', backgroundColor: '#2B2B2B' , height:hp('40%'), position:'absolute', bottom: 0 }}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingVertical: 15, justifyContent: 'space-around'}}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
                        <Image source={require('../../assets/item1.png')} resizeMode='contain' style={{width:'60%', height:'60%'}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
                        <Image source={require('../../assets/item2.png')} resizeMode='contain' style={{width:'60%', height:'60%'}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
                        <Image source={require('../../assets/item3.png')} resizeMode='contain' style={{width:'60%', height:'60%'}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
                        <Image source={require('../../assets/item4.png')} resizeMode='contain' style={{width:'60%', height:'60%'}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
                        <Image source={require('../../assets/item5.png')} resizeMode='contain' style={{width:'60%', height:'60%'}} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
                        <Image source={require('../../assets/item6.png')} resizeMode='contain' style={{width:'60%', height:'60%'}} />
                    </TouchableOpacity>
                </View>
                <View style={{width: '90%', alignSelf: 'center', marginTop: -5}}>
                    <Button  buttonText={"Save"} buttonColor={colors.themeBrown} textColor="white" style={{borderWidth: 0}} onPress={() => navigation.navigate('OwnerHome')}/>
                </View>
            </View>
        </Modal>

    </View>
  )
}

export default SavedMap

const styles = StyleSheet.create({
    plusContainer: {
        width:wp('25%'),
        height: hp('12%'),
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
        marginTop: 8,
        marginHorizontal: 10
      },
})