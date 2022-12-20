import { View, Text, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainHeader from '../../components/MainHeader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { colors } from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo'
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';



const ShopFloorPlan = ({ navigation }) => {
    const [OpenList, setOpenList] = useState(OpenList)
    const [Search, setSearch] = useState('')
    const [secondImage, setSecondImage] = useState(false)
    const [popUp, setPopup] = useState(false)



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

    const toggleViewList = () => {
        setOpenList(!OpenList)
    }

    const openPopUp = () => {
        setPopup(!popUp)
    }

    useEffect(() => {
        setTimeout(() => {
            setSecondImage(true)
        }, 2000);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setPopup(true)
        }, 4000);
    }, [])

    return (

        <View style={{ flex: 1 }}>
            <View style={{ padding: 20, flex: 0.3 }}>

                <MainHeader backIcon={'arrow-back'} Heading={'Hello, Adam'} goBack={() => navigation.goBack()} />


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button buttonText={'Start Shopping'} buttonColor={colors.themeGrey} textColor={'white'} style={{ width: wp('55') }} onPress={() => navigation.navigate('ShopFloorPlan')} />
                    <Button buttonText={'View List'} buttonColor={colors.themeBrown} textColor={'white'} style={{ width: wp('32%') }} onPress={() => toggleViewList()} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Entypo size={15} name={'clock'} color={colors.themeBrown} />
                    <Text style={{ marginLeft: 5, color: colors.themeBrown }}>01:50:17</Text>
                </View>

            </View>
            <View style={{ flex: 1, }}>
                {
                    secondImage == true ?
                        <Image source={require('../../assets/FloorPlan2.png')} resizeMode={'contain'} style={{ flex: 1, width: wp('100%'), }} />

                        :

                        <Image source={require('../../assets/FloorPlan1.png')} resizeMode={'contain'} style={{ flex: 1, width: wp('100%'), }} />
                }
            </View>

            <Modal isVisible={OpenList} style={{ margin: 30, backgroundColor: 'white', borderRadius: 10, }}>
                <TouchableOpacity onPress={() => toggleViewList()} style={{ height: 25, width: 25, backgroundColor: 'black', alignSelf: 'flex-end', borderRadius: 200, marginTop: 10, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Entypo name='cross' color={'white'} size={20} />

                </TouchableOpacity>

                <View style={{ alignSelf: 'center', marginBottom: 10, marginTop: 10 }}>
                    <TextInput
                        placeholder={"Search Product"}
                        style={{ height: 50, width: wp('80%'), borderRadius: 10, elevation: 4, backgroundColor: "white", paddingHorizontal: 10 }}
                        onChangeText={(txt) => {
                            setSearch(txt)
                        }}
                        value={Search}
                    />
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    {
                        HistoryData.filter((val) => {
                            if (Search == "") {
                                return val
                            } else if (val.product.toLowerCase().includes(Search.toLowerCase())) {
                                return val
                            }
                        }).map((item, key) => {
                            console.log(item)
                            return (
                                <View key={key}>
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

                                </View>
                            )
                        })
                    }
                </ScrollView>
            </Modal>


            <Modal isVisible={popUp} style={{ margin: 30, borderRadius: 10, flex: 1 }}>
                <View style={{ width: wp('90%'), borderRadius: 10, backgroundColor: '#F7E0CA', alignSelf: 'center', padding: 20 }}>
                    <TouchableOpacity onPress={()=> openPopUp()}>

                    <Entypo name='cross' color={'black'} size={25} style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity>
                    
                    <Text style={{fontSize:hp('2.5%'), fontWeight:'bold', color:colors.themeBlack, alignSelf:'center', marginBottom:20}}>Your Grocery</Text>

                    <Image source={require('../../assets/done.png')} style={{alignSelf:'center', marginTop:10, height:70, width: 70,}} resizeMode={'contain'}/>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('OrderHistory')} style={{height: 50, width: wp('39%'), backgroundColor:"#BB4903", borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{color:'white', fontSize:hp('2%')}}>View Details</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{height: 50, width: wp('39%'), backgroundColor:"#BB4903", borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{color:'white', fontSize:hp('2%')}}>Main Menu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>




        </View>

    )
}

export default ShopFloorPlan