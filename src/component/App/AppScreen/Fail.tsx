import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderFail = () => {
  return (
    <View style={mystyles.Container}>
      <Image source={require('../../../assets/images/iconPhone.png')} />
      <Text style={mystyles.textOOP}>Oops! Order Failed!</Text>
      <Text style={mystyles.textSomething}>Something went terribly wrong</Text>
      <View style={{width: '100%', marginTop: 66}}>
        <Pressable style={mystyles.btn}>
          <Text style={mystyles.textBTN}>Try Again</Text>
        </Pressable>
        <Pressable style={mystyles.btnBackHome}>
          <Text style={mystyles.textBTNBackHome}>Back Home</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default OrderFail

const mystyles = StyleSheet.create({
  textBTNBackHome:{
    color: '#FF5E00',
    fontWeight: '700',
    fontSize: 18
  },
  btnBackHome:{
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: '#FF5E00',
    borderWidth: 1,
    marginTop: 16
  },
  textBTN: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF5E00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  textSomething: {
    color: '#6D3805',
    fontWeight: '400',
    fontSize: 16
  },
  textOOP: {
    color: 'rgba(109, 56, 5, 1)',
    fontWeight: '700',
    fontSize: 20
  },
  Container: {
    paddingLeft: 36,
    paddingRight: 36,
    alignItems: 'center',
    paddingTop: 125

  }
})