import { View, Text, FlatList, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
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
import Modal from "react-native-modal";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/slice/AddToCartSlice'
import Entypo from 'react-native-vector-icons/Entypo'

const Grocery = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const [Search, setSearch] = useState('')
    const [ProductDetail, setProductDetail] = useState({
        productImg: "",
        productName: ""
    })

    const toggleModal = (img, name) => {
        setModalVisible(!isModalVisible);
        setProductDetail({ productImg: img, productName: name })
        // setProductDetail({...ProductDetail, productName : name})
    };




    const addToList = () => {

    }

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
        { key: 12, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Eggs", price: "1.5 each" },
        { key: 13, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Eggs", price: "1.5 each" },
        { key: 14, img: require('../../assets/egg.png'), packs: "4 Packs", product: "Eggs", price: "1.5 each" },

    ]

    return (
        <SafeAreaView>
            <View>
                <View style={{ padding: 20 }}>
                    <MainHeader backIcon={'arrow-back'} Heading={'Grocery'} txt={"Shopping for your needs is easier"} goBack={() => navigation.goBack()} />
                </View>

                <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                    <TextInput
                        placeholder={"Search Product"}
                        style={{ height: 60, width: wp('90%'), borderRadius: 10, elevation: 4, backgroundColor: "white", paddingHorizontal: 10 }}
                        onChangeText={(txt) => {
                            setSearch(txt)
                        }}
                        value={Search}
                    />
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 380, }}>

                    {
                        Data.filter((val) => {
                            if (Search == "") {
                                return val
                            } else if (val.product.toLowerCase().includes(Search.toLowerCase())) {
                                return val
                            }
                        }).map((item, key) => {
                            console.log(item)
                            return (
                                <View key={key} style={{ flexDirection: 'row', height: 100, width: wp('90%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', padding: 10, marginTop: 20, borderRadius: 10, borderWidth: 1 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: 60, width: 60, borderRadius: 10, borderColor: colors.themeBrown, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={item.img} style={{ height: 30, width: 30, }} resizeMode={'contain'} />
                                        </View>
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{ fontSize: hp('1.2%') }}>{item.packs}</Text>
                                            <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: colors.themeBlack }}>{item.product}</Text>
                                            <Text style={{ fontSize: hp('1.2%') }}>${item.price}</Text>
                                        </View>
                                    </View>

                                    <View>

                                        <TouchableOpacity onPress={() => toggleModal(item.img, item.product)} style={{ height: 30, width: 90, backgroundColor: 'green', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontSize: hp('1.4%'), fontWeight: 'bold' }}>Add to my list</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: hp('1.5%'), color: colors.themeBlack, fontWeight: 'bold', marginTop: 5 }}>$6.00</Text>

                                    </View>
                                </View>
                            )
                        })
                    }


                </ScrollView>


            </View>

            {/* <Button title="Show modal" onPress={} /> */}

            <Modal isVisible={isModalVisible}>
                <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20 }}>

                    <Image source={ProductDetail.productImg} style={{ height: 50, width: 50, alignSelf: 'center' }} resizeMode={'contain'} />
                    <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black', alignSelf: 'center' }}>{ProductDetail.productName}</Text>
                    {/* <Button title="Hide modal" onPress={toggleModal} /> */}

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 10, width: wp('80%'), justifyContent: 'space-between', marginTop: 20 }}>


                        <TouchableOpacity onPress={() => { count === 0 ? null : dispatch(decrement()) }} style={{ height: 30, width: wp('30%'), alignSelf: 'center', backgroundColor: 'red', borderRadius: 3, alignItems: 'center', justifyContent: 'center', }}>
                            <Entypo name='minus' color={'white'} size={20} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: hp('2.5%'), color: 'black' }}>{count}</Text>

                        <TouchableOpacity onPress={() => dispatch(increment())} style={{ height: 30, width: wp('30%'), alignSelf: 'center', backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 3, }}>
                            <Entypo name='plus' color={'white'} size={20} />
                        </TouchableOpacity>

                    </View>
                    
                    
                    <TouchableOpacity style={{ height: 50, width: wp('80%'), backgroundColor: 'green', borderRadius: 10, alignItems: 'center', justifyContent: 'center', }} onPress={() => toggleModal()}>
                        <Text style={{ fontSize: hp('2%'), color: 'white' }}>Add To Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 50, width: wp('80%'), backgroundColor: 'red', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop:10}} onPress={() => toggleModal()}>
                        <Text style={{ fontSize: hp('2%'), color: 'white' }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </SafeAreaView>





    )
}

export default Grocery