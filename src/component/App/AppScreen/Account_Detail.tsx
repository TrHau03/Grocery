import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack'
import { useNavigation } from '@react-navigation/native'


type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Account_Detail>

const Account_Detail = () => {
    const usenavigation = useNavigation<DemoNavigaDrop>();
    return (
        <View style={myStyle.Container}>
            
            <View style={myStyle.title}>
                <Text style={myStyle.txtTitle}>Account</Text>
            </View>
            <Pressable
                onPress={() => usenavigation.navigate(RootStackScreenENum.Profile)}
            >
                <View style={myStyle.Content}>
                    <View style={myStyle.viewimage}>
                        <Image style={myStyle.imgContent} source={require('../../../assets/images/profile.png')} />
                        </View>
                    <Text style={myStyle.txtContent}>Profile</Text>
                </View>
            </Pressable>
            <Pressable
                onPress={() => usenavigation.navigate(RootStackScreenENum.Order)}>
                <View style={myStyle.Content}>
                    <View style={myStyle.viewimage}>
                        <Image style={myStyle.imgContent} source={require('../../../assets/images/iconOrder.png')} />
                        </View>
                    <Text style={myStyle.txtContent}>Others</Text>
                </View>
            </Pressable>
            <Pressable
                onPress={() => usenavigation.navigate(RootStackScreenENum.Address)}
            >
                <View style={myStyle.Content}>
                    <View style={myStyle.viewimage}>
                        <Image style={myStyle.imgContent} source={require('../../../assets/images/address.png')} />
                        </View>
                    <Text style={myStyle.txtContent}>Address</Text>
                </View>
            </Pressable>
            <Pressable
                onPress={() => usenavigation.navigate(RootStackScreenENum.Payment)}
            >
                <View style={myStyle.Content}>
                    <View style={myStyle.viewimage}>
                        <Image style={myStyle.imgContent} source={require('../../../assets/images/payment.png')} /></View>
                    <Text style={myStyle.txtContent}>Payments</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Account_Detail

const myStyle = StyleSheet.create({
    viewimage:{
        width: 40
    },
    iconBack: {
        position: 'absolute',
        top: '5%',
    },
    txtContent: {
        fontFamily: 'Klarna Text',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#6D3805',
    },

    imgContent: {
        marginRight: 15,
    },

    Content: {
        flexDirection: 'row',
        paddingTop: '10%',
    },

    txtTitle: {
        fontFamily: 'Klarna Text',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FF5E00',
    },

    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    Container: {
        margin: 35,
        marginTop: 21,
    }
})