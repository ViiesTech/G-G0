import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../theme';
import EnterText from '../../components/EnterText';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const OrderHistory = () => {

    const [showHistory, setShowHistory] = useState(true)

    const toggleHistory = () => {
        setShowHistory(!showHistory)
    }

    const Data = [
        { key: 1, },
        { key: 2, },
        { key: 3, },
        { key: 4, },
        { key: 5, },
        { key: 6, },
    ]
    const HistoryData = [
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
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
            <MainHeader Heading={"Order History"} txt={'Shopping for your needs is easier'} />
            <EnterText Holder={"November"} />

            <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: colors.themeBlack, marginTop: 20 }}>November</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Data}
                renderItem={() => {
                    return (
                        <View>
                            <TouchableOpacity onPress={() => toggleHistory()} style={{ height: 100, width: 100, borderRadius: 10, backgroundColor: colors.themePeach, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/order.png')} resizeMode={'contain'} style={{ height: 60, width: 60, }} />
                                <Text style={{ color: '#CC9D86', fontSize: hp('1.5%'), fontWeight: 'bold', marginTop: 5 }}>02/11/2022</Text>
                            </TouchableOpacity>


                        </View>
                    )
                }}

            />

            <View>
                {
                    showHistory ?
                        <View style={{ width: wp('90%'), alignSelf: 'center', backgroundColor: "white", borderWidth: 1, borderColor: colors.themeGrey, borderRadius: 10, padding: 10, marginTop: 20 }}>
                            <TouchableOpacity onPress={() => toggleHistory()} style={{ height: 25, width: 25, backgroundColor: 'black', borderRadius: 200, alignSelf: 'flex-end', alignItems:'center', justifyContent:'center' }}>
                                <Entypo name='cross' color={'white'} size={20}/>
                            </TouchableOpacity>

                            <FlatList
                                data={HistoryData}
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

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), alignSelf: 'center' }}>
                                <Text>Sub-Total:</Text>
                                <Text>$54.00</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), alignSelf: 'center' }}>
                                <Text>Sales-Taxes:</Text>
                                <Text>$02.00</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('80%'), alignSelf: 'center' }}>
                                <Text>Total:</Text>
                                <Text>$56.00</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>

                                <FontAwesome
                                    size={20}
                                    name={"clock-o"}
                                    color={colors.themeBrown}
                                />
                                <Text style={{ alignSelf: 'center', color: colors.themeBrown, marginLeft: 5 }}>Total Time: 4 min 27 sec </Text>
                            </View>
                        </View>

                        :
                        null
                }
            </View>

        </ScrollView>
    )
}

export default OrderHistory