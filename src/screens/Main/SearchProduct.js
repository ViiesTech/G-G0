import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import EnterText from '../../components/EnterText'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { colors } from '../../theme';


const SearchProduct = ({ navigation }) => {

    

    return (
        <>
            <View>
                <View style={{ padding: 20 }}>
                    <MainHeader backIcon={'arrow-back'} Heading={'Hello, Adam'} goBack={() => navigation.goBack()} />
                </View>

                <View style={{ alignSelf: 'center' }}>

                    <EnterText Holder={'Search store'} />
                </View>

                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    userInterfaceStyle={'dark'}
                    style={{ height: hp('100%'), width: wp('100%'), marginTop: 20, backgroundColor: 'black' }}
                    // customMapStyle={}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>


            </View>

            <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                <Button buttonText={'Search'} buttonColor={colors.themeBrown} textColor={'white'} onPress={() => navigation.navigate('FloorPlan')} />
            </View>


           



        </>
    )
}

export default SearchProduct