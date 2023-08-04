import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams, RouteProp, useNavigation } from '@react-navigation/native';
import { RootTabParamList, RootTabScreenENum } from '../../Root/RootTabParams';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
const Favoriteenmpty = ({props}:any) => {
  
  return (
    <View style={myStyle.Container}>
      <Text style={myStyle.title}>Favorite</Text>
      <Image style={myStyle.img} source={require('../../../assets/images/favoriteempty.png')} />
      <Text style={myStyle.title2}>Your heart is empty</Text>
      <Text style={myStyle.content}>Start fall in love with some good goods </Text>
      <View style={myStyle.btnStyle}>
        <Pressable style={myStyle.btnStart} onPress={() => {
          props.navigation.navigate('Explore', { screen: 'ScreenExplore'})
        }}>
          <Text style={myStyle.txtStart}>Start shopping</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Favoriteenmpty

const myStyle = StyleSheet.create({
  txtStart: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'klarna Text',
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  btnStart: {
    alignItems: 'center',
    backgroundColor: '#FF5E00',
    width: 340,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 100
  },

  btnStyle: {
    alignItems: 'center',
    marginTop: '15%',
  },

  content: {
    fontFamily: 'Klarna Text',
    fontSize: 16,
    color: '#6D3805',
    paddingTop: 8,
  },

  title2: {
    fontFamily: 'Klarna Text',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#6D3805',
  },

  img: {
    alignItems: 'center',
    paddingTop: 10,
  },

  title: {
    fontFamily: 'Klarna Text',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FF5E00',
  },

  Container: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  }
})