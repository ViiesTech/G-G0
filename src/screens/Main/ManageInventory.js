import { View, Text, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ManageInventory = ({navigation}) => {


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

        <ScrollView contentContainerStyle={{flexGrow:1, backgroundColor: 'white'}}>
            <View style={{ padding: 20, flexDirection:'row', alignItems:'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        size={25}
                        color={'black'}
                        name={"arrow-back-outline"}
                    />
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: hp('3%'), color:'black', marginLeft: 15}} >Manage Inventory</Text>
            </View>

            <View style={{ alignSelf: 'center', marginBottom:10 }}>
                <EnterText Holder={'Search'} />
            </View>

            <Text style={{width:'90%', alignSelf: 'center', fontSize: hp('2.5%'), color:'black', fontWeight: 'bold', marginVertical: 10}}>Add Products</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.plusContainer}>
                <Entypo name="plus" size={25} color="black" />
            </TouchableOpacity>


            <View contentContainerStyle={{ flexGrow: 1, paddingBottom: 200, }}>
                <View style={{flexDirection:'row', alignItems:'center', width:'90%',alignSelf:'center'}}>
                    <Text style={{width:'90%', alignSelf: 'center', fontSize: hp('2.5%'), color:'black', fontWeight: 'bold', marginVertical: 10}}>Remove Products</Text>
                    <MaterialCommunityIcons name="delete" color={'black'} size={22} />
                </View>
                <View style={{marginLeft: 8}}>
                    <FlatList
                        horizontal={true}
                        data={Data}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <TouchableOpacity style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                                        <View style={{ alignItems:'center' }}>
                                            <View style={{ height: 60, width: 60, borderRadius: 10, borderWidth: 1, borderColor: colors.themeBrown, alignItems: 'center', justifyContent: 'center' }}>
                                                <Image source={item.img} style={{ height: 30, width: 30, }} resizeMode={'contain'} />
                                            </View>
                                            <Text style={{ fontSize: hp('1.2%') }}>{item.packs}</Text>
                                            <Text style={{ fontSize: hp('1.5%'), color: colors.themeBlack, fontWeight: 'bold' }}>$6.00</Text>
                                        </View>
                                    </TouchableOpacity>
                                </>
                            )
                        }}
                    />
                </View>
            </View>

            <View contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}>
                    <Text style={{width:'90%', alignSelf: 'center', fontSize: hp('2.5%'), color:'black', fontWeight: 'bold', marginBottom: 10, marginTop: 25}}>Edit Price</Text>
                    <FlatList
                        data={Data}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <TouchableOpacity style={{ flexDirection: 'row', height: 70, width: wp('90%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
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
                                    <View style={{ height: 1, width: wp('90%'), alignSelf: 'center', backgroundColor: colors.themeGrey, marginBottom: 10, marginTop: 10 }} />
                                </>
                            )
                        }}
                    />
            </View>


        </ScrollView>



    )
}

export default ManageInventory

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
        marginBottom: 18,
        marginHorizontal: 15
      },
})