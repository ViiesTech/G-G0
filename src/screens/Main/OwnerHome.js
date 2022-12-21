import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import EnterText from '../../components/EnterText'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { colors } from '../../theme';
import { ScrollView } from 'react-native';

const Discount = ({navigation}) => {


    return (

        <View>
            <View style={{ padding: 20 }}>
                <MainHeader  Heading={'Hello, Adam'} txt={'Business for your needs easier'} goBack={()=> navigation.goBack()} />
            </View>
            <View style={{ alignSelf: 'center', marginBottom:10 }}>
                <EnterText Holder={'Search'} />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}> 
                <TouchableOpacity onPress={() => navigation.navigate('ManageInventory')} activeOpacity={0.6} style={{ flexDirection: 'row', height: hp('20%'), width: wp('90%'), alignSelf: 'center', backgroundColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: colors.themeGrey, marginTop: 20, alignItems: 'center', padding: 20 , marginTop:20}}>
                    <Image source={require('../../assets/ownerHomeImg1.png')} style={{ height: 100, width: 100, }} resizeMode={'contain'} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: colors.themeBlack, width: wp('50%'), }}>Manage Inventory</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('StorePlan')} activeOpacity={0.6} style={{ flexDirection: 'row', height: hp('20%'), width: wp('90%'), alignSelf: 'center', backgroundColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: colors.themeGrey, marginTop: 20, alignItems: 'center', padding: 20 , marginTop:20}}>
                    <Image source={require('../../assets/ownerHomeImg2.png')} style={{ height: 100, width: 100, }} resizeMode={'contain'} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: colors.themeBlack, width: wp('50%'), }}>Store Design</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('EditStoreDetails')} activeOpacity={0.6} style={{ flexDirection: 'row', height: hp('20%'), width: wp('90%'), alignSelf: 'center', backgroundColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: colors.themeGrey, marginTop: 20, alignItems: 'center', padding: 20 , marginTop:20}}>
                    <Image source={require('../../assets/ownerHomeImg3.png')} style={{ height: 100, width: 100, }} resizeMode={'contain'} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: colors.themeBlack, width: wp('50%'), }}>Edit Store Details</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>


        </View>



    )
}

export default Discount