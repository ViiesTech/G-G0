import { View, Text, FlatList, Image, ScrollView } from 'react-native'
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

const Discount = ({navigation}) => {

    const Data = [
        { key: 1, img: require('../../assets/lays.png'), packs: "4 Packs", product: "Enjoy 20% Discount on Lay's this week", price: "1.5 each" },
        { key: 2, img: require('../../assets/bread.png'), packs: "5 Packs", product: "Enjoy 20% Discount on Breads this week", price: "1 each" },
        { key: 3, img: require('../../assets/coffee.png'), packs: "4 Packs", product: "Enjoy 20% Discount on Nescafe this week", price: "5 each" },
        { key: 4, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Enjoy 20% Discount on Eggs this week", price: "2 each" },
        { key: 5, img: require('../../assets/coffee.png'), packs: "4 Packs", product: "Enjoy 20% Discount on Nescafe this week", price: "4 each" },
        { key: 6, img: require('../../assets/bread.png'), packs: "4 Packs", product: "Enjoy 20% Discount on Breads this week", price: "1.5 each" },
    ]

    return (

        <View>
            <View style={{ padding: 20 }}>
                <MainHeader backIcon={'arrow-back'} Heading={'Discount'} txt={"Shopping for your needs is easier"} goBack={()=> navigation.goBack()} />
            </View>
            <View style={{ alignSelf: 'center', marginBottom:10 }}>

                <EnterText Holder={'Marche Ste-Urusule'} />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}>


                <FlatList
                    data={Data}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ flexDirection: 'row', height: hp('20%'), width: wp('90%'), alignSelf: 'center', backgroundColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: colors.themeGrey, marginTop: 20, alignItems: 'center', padding: 20 , marginTop:20}}>
                                <Image source={item.img} style={{ height: 70, width: 70, }} resizeMode={'contain'} />
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: colors.themeBlack, width: wp('50%'), }}>Enjoy 20% Discount on Lay's this week</Text>
                                </View>
                            </View>
                        )
                    }}
                />

            </ScrollView>


        </View>



    )
}

export default Discount