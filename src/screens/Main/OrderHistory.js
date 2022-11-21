import { View, Text, TextInput, FlatList , Image} from 'react-native'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../theme';
import EnterText from '../../components/EnterText';

const OrderHistory = () => {

    const Data = [
        {key: 1, },
        {key: 2, },
        {key: 3, },
        {key: 4, },
        {key: 5, },
        {key: 6, },
    ]

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <MainHeader Heading={"Order History"} txt={'Shopping for your needs is easier'} />
            <EnterText Holder={"November"} />

            <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: colors.themeBlack, marginTop: 20 }}>November</Text>

            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={()=>{
                return(
                    <View style={{height:100, width: 100, borderRadius:10, backgroundColor:colors.themePeach, marginLeft:10, alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../assets/order.png')} resizeMode={'contain'} style={{height:60, width: 60,}}/>
                        <Text style={{color:'#CC9D86', fontSize:hp('1.5%'),fontWeight:'bold', marginTop:5}}>02/11/2022</Text>
                    </View>
                )
            }}
            
            />

        </View>
    )
}

export default OrderHistory