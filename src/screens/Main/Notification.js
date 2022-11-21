import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { images } from '../../assets';
import MainHeader from '../../components/MainHeader';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { colors } from '../../theme';
const Notification = () => {

    const Data = [
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: 4 },
        { key: 5 },
        { key: 6 },
        { key: 7 },
    ]

    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, flexGrow:1}}>
            <MainHeader Heading={'Notification'} />

            <View style={{ width: wp('90%'), borderRadius: 10, backgroundColor: "white", elevation: 5,  }}>
                <FlatList
                    data={Data}
                    renderItem={() => {
                        return (

                            <>

                                <View style={{ width: wp('80%'), height: 70, flexDirection: 'row' , alignSelf:'center', marginTop:20}}>
                                    <Image source={require('../../assets/o.png')} />
                                    <View style={{ marginLeft: 10 }}>

                                        <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: colors.themeBlack }}>
                                            Marche ste-Ursle
                                        </Text>

                                        <Text style={{ fontSize: hp('1.5%') }}>
                                            You purchase your grocery from this store
                                        </Text>
                                    </View>

                                    <Text style={{fontSize:hp('1.2%'), fontWeight:'bold', right:50}}>Jul 27,2022 ' 4:51PM</Text>
                                </View>

                                <View style={{ width: wp('85%'), height: 1, backgroundColor: colors.themeGrey, alignSelf: 'center', marginBottom: 10 }} />
                            </>
                        )
                    }}

                />
            </View>
        </ScrollView>
    )
}

export default Notification