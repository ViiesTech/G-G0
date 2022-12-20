import { View, Text, TextInput, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import MainHeader from '../../components/MainHeader'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../theme';
import EnterText from '../../components/EnterText';
import HomeCard from '../../components/HomeCard';
import Button from '../../components/Button';

const StoreLocator = ({navigation}) => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <MainHeader Heading={"Store Locator"} txt={'Shopping for your needs is easier'} />
            <EnterText Holder={"Area"} />


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                <TextInput
                    placeholder='enter zip code'
                    style={{ height: 60, borderRadius: 10, width: wp('60%'), backgroundColor: 'white', elevation: 4, paddingHorizontal:10}}
                />
                <TouchableOpacity style={{ height: 60, padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.themeBrown, width: wp('27%'), borderRadius: 10 }}>
                    <Text style={{ color: "white" }}>Search</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop:20 }}>
                    <View style={{width: wp('40%'),height:2, backgroundColor:'gray'}}/>
                    <Text>OR</Text>
                    <View style={{width: wp('40%'),height:2, backgroundColor:'gray'}}/>
            </View>
            
            <Button
            buttonText="Use my current location"
            buttonColor={colors.themeGrey}
            textColor="white"
            style={{borderColor: 'lightgrey'}}
            onPress={()=> navigation.navigate('SearchProduct')}
          />

    <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>

          <Image source={require('../../assets/cartLogo.png')} style={{alignSelf:'center', marginTop:20}}/>
    </View>

        </View>
    )
}

export default StoreLocator