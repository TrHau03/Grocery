import React from "react";
import { Image } from "react-native";
import { StackShop, StackExplore as StackExplore, StackCart, StackFavorite, StackAccount } from "../../component/App/AppNavigation/AppNavigation";
import { NavigatorScreenParams } from "@react-navigation/native";
import { RootStackParamList } from "./RootStack";
export enum RootTabScreenENum {
  StackShop = 'Shop',
  StackExplore = 'Explore',
  StackFavorite = 'Favorite',
  StackCart = 'Cart',
  StackAccount = 'Account',
};
export type RootTabParamList = {
  StackShop: NavigatorScreenParams<RootStackParamList>,
  StackExpole: NavigatorScreenParams<RootStackParamList> ,
  StackFavorite: NavigatorScreenParams<RootStackParamList>,
  StackCard: NavigatorScreenParams<RootStackParamList>,
  StackAccount: NavigatorScreenParams<RootStackParamList>,
};
export const RootTabScreens = () => {
  
  const Screens: any[] = [
    { id: 1, name: RootTabScreenENum.StackShop, component: StackShop, option: {},user:{} },
    { id: 2, name: RootTabScreenENum.StackExplore, component: StackExplore, option: {},user:{} },
    { id: 3, name: RootTabScreenENum.StackCart, component: StackCart, option: {},user:{} },
    { id: 4, name: RootTabScreenENum.StackFavorite, component: StackFavorite, option: {},user:{} },
    { id: 5, name: RootTabScreenENum.StackAccount, component: StackAccount, option: {},user:{} },

  ]
  return Screens;
}
export const configTab = (route: any) => {
  return {
    tabBarIcon: ({ focused, color }: any) => {
      if (route.name === 'Shop') {
        if (focused) {
          return <Image source={require('../../assets/images/iconShop_Active.png')} />
        } else {
          return <Image source={require('../../assets/images/iconShop.png')} />
        }
      } else if (route.name === 'Explore') {
        if (focused) {
          return <Image source={require('../../assets/images/iconExplore_Active.png')} />
        } else {
          return <Image source={require('../../assets/images/iconExplore.png')} />
        }
      } else if (route.name === 'Cart') {
        if (focused) {
          return <Image source={require('../../assets/images/iconCart_Active.png')} />
        } else {
          return <Image source={require('../../assets/images/iconCart.png')} />
        }
      } else if (route.name === 'Favorite') {
        if (focused) {
          return <Image source={require('../../assets/images/iconFavorite_Active.png')} />
        } else {
          return <Image source={require('../../assets/images/iconFavorite.png')} />
        }
      } else if (route.name === 'Account') {
        if (focused) {
          return <Image source={require('../../assets/images/iconAccount_Active.png')} />
        } else {
          return <Image source={require('../../assets/images/iconAccount.png')} />
        }
      }

    },
    tabBarActiveTintColor: '#FF5E00',
    tabBarInactiveTintColor: '#6D3805',
    headerShown: false,
  }
}
