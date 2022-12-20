import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
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

const MyList = ({navigation}) => {


    const Data = [
        { key: 1, img: require('../../assets/banana.png'), packs: "4 Packs", product: "banana", price: "1.5 each" },
        { key: 2, img: require('../../assets/bread.png'), packs: "5 Packs", product: "Classic Bread", price: "1 each" },
        { key: 3, img: require('../../assets/coffee.png'), packs: "4 Packs", product: "Nescafe coffee", price: "5 each" },
        { key: 4, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Eggs", price: "2 each" },
        { key: 5, img: require('../../assets/coffee.png'), packs: "4 Packs", product: "Nescafe coffee", price: "4 each" },
        { key: 6, img: require('../../assets/bread.png'), packs: "4 Packs", product: "Classic Bread", price: "1.5 each" },
        { key: 7, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Eggs", price: "1.5 each" },
        { key: 8, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Eggs", price: "2 each" },
        { key: 9, img: require('../../assets/coffee.png'), packs: "4 Packs", product: "Nescafe coffee", price: "4 each" },
        { key: 10, img: require('../../assets/bread.png'), packs: "4 Packs", product: "Classic Bread", price: "1.5 each" },
        { key: 11, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Eggs", price: "1.5 each" },
    ]

    return (

        <View>
            <View style={{ padding: 20 }}>
                <MainHeader backIcon={'arrow-back'} Heading={'My List'} txt={"Shopping for your needs is easier"} goBack={()=> navigation.goBack()} />
            </View>

            <View style={{ alignSelf: 'center', marginBottom:10 }}>

                <EnterText Holder={'Marche Ste-Urusule'} />
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 200, }}>
                <View style={{ width: wp('90%'), alignSelf: 'center', backgroundColor: "white", borderWidth: 1, borderColor: colors.themeGrey, borderRadius: 10, padding: 10, marginTop: 20 }}>

                    <FlatList
                        data={Data}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <TouchableOpacity style={{ flexDirection: 'row', height: 70, width: wp('80%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ height: 60, width: 60, borderRadius: 10, borderWidth: 1, borderColor: colors.themeBrown, alignItems: 'center', justifyContent: 'center' }}>
                                                <Image source={item.img} style={{ height: 30, width: 30, }} resizeMode={'contain'} />
                                            </View>
                                            <View style={{ marginLeft: 20 }}>
                                                <Text style={{ fontSize: hp('1.2%') }}>{item.packs}</Text>
                                                <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: colors.themeBlack }}>{item.product}</Text>
                                                <Text style={{ fontSize: hp('1.2%') }}>${item.price}</Text>
                                            </View>
                                        </View>

                                        <Text style={{ fontSize: hp('1.5%'), color: colors.themeBlack, fontWeight: 'bold' }}>$6.00</Text>
                                    </TouchableOpacity>
                                    <View style={{ height: 1, width: wp('80%'), alignSelf: 'center', backgroundColor: colors.themeGrey, marginBottom: 10, marginTop: 10 }} />
                                </>
                            )
                        }}
                    />
                </View>
            </ScrollView>


        </View>



    )
}

export default MyList