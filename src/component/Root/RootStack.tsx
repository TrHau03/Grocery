import React from "react";
import Order from "../App/AppScreen/Order";
import NewAddress from "../App/AppScreen/NewAddress";
import Account_Detail from "../App/AppScreen/Account_Detail";
import Address from "../App/AppScreen/Address";
import EditAddress from "../App/AppScreen/EditAddress";
import Login from "../Login/LoginScreen/Login";
import Register from "../Login/LoginScreen/Register";
import RegisterCode from "../Login/LoginScreen/RegisterCode";
import RegisterPass from "../Login/LoginScreen/RegisterPass";
import User from "../Login/LoginScreen/User";
import ScreenExplore from "../App/AppScreen/Explore";
import ScreenShop from "../App/AppScreen/ScreenShop";
import ScreenFruits from "../App/AppScreen/ScreenFruits";
import Profile from "../App/AppScreen/Profile";
import Payment from "../App/AppScreen/Payment";
import ScreenEditProfiles from "../App/AppScreen/ScreenEditProfiles";
import ScreenChangePass from "../App/AppScreen/ScreenChangePassword";
import MyCards from "../App/AppScreen/MyCards";
import ScreenCart from "../App/AppScreen/Cart";
import ScreenFavorite from "../App/AppScreen/ScreenFavorite";
import Detail_Product from "../App/AppScreen/Detail_Product";
import { RootTab } from "../App/AppNavigation/AppNavigation";
import Favoriteenmpty from "../App/AppScreen/Favoriteenmpty";
import ForgotPassword from "../Login/LoginScreen/ForgotPassword";
export enum RootStackScreenENum {
    User = 'User',
    Login = 'Login',
    Register = 'Register',
    RegisterCode = 'RegisterCode',
    RegisterPass = 'RegisterPass',
    ForgotPassword = 'ForgotPassword',
    ScreenShop = 'ScreenShop',
    ScreenExplore = 'ScreenExplore',
    ScreenFruits = 'ScreenFruits',
    Order = 'Order',
    NewAddress = 'NewAddress',
    Account_Detail = 'Account_Detail',
    Profile = 'Profile',
    Address = 'Address',
    EditAddress = 'EditAddress',
    Payment = 'Payment',
    ScreenEditProfiles = 'ScreenEditProfiles',
    ScreenChangePass = 'ScreenChangePass',
    MyCards = 'MyCards',
    RootTab = 'RootTab',
    ScreenCart = 'ScreenCart',
    ScreenFavorite = 'ScreenFavorite',
    Favoriteenmpty = 'Favoriteenmpty',
    Detail_Product = 'Detail_Product',

};
export type RootStackParamList = {
    User: undefined,
    Login: undefined,
    Register: undefined,
    RegisterCode: undefined,
    RegisterPass: {data: {email: string, name: string}} | undefined,
    ForgotPassword: undefined,
    ScreenShop: undefined,
    ScreenExplore: undefined,
    ScreenFruits: {cateName: String} | undefined,
    Order: undefined,
    NewAddress: undefined,
    Account_Detail: undefined,
    Profile: undefined,
    Address: undefined,
    EditAddress: {data: Object} ,
    Payment: undefined,
    ScreenEditProfiles: undefined,
    ScreenChangePass: undefined,
    MyCards: undefined,
    ScreenCart: undefined,
    ScreenFavorite: undefined,
    Favoriteenmpty: undefined,
    Detail_Product: {data: Object} | undefined,
    RootTab: undefined,
};
export const RootStackScreensLogin = () => {
    const Screen: any = [
        { id: 0, name: RootStackScreenENum.User, component: User, option: {} },
        { id: 6, name: RootStackScreenENum.Login, component: Login, option: {} },
        { id: 7, name: RootStackScreenENum.Register, component: Register, option: {} },
        { id: 8, name: RootStackScreenENum.RegisterCode, component: RegisterCode, option: {} },
        { id: 9, name: RootStackScreenENum.RegisterPass, component: RegisterPass, option: {} },
        { id: 20, name: RootStackScreenENum.ForgotPassword, component: ForgotPassword, option: {} },
        { id: 18, name: RootStackScreenENum.RootTab, component: RootTab, option: {} },

    ]
    return Screen;

}
export const RootStackScreensShop = () => {
    const Screen: any = [
        { id: 10, name: RootStackScreenENum.ScreenShop, component: ScreenShop, option: {} },
    ]
    return Screen;
}
export const RootStackScreensExplore = () => {
    const Screen: any = [
        { id: 11, name: RootStackScreenENum.ScreenExplore, component: ScreenExplore, option: {} },
        { id: 12, name: RootStackScreenENum.ScreenFruits, component: ScreenFruits, option: {} },
        { id: 12, name: RootStackScreenENum.Detail_Product, component: Detail_Product, option: {} },
    ]
    return Screen;

}
export const RootStackScreensCart = () => {
    const Screen: any = [
        { id: 12, name: RootStackScreenENum.ScreenCart, component: ScreenCart, option: {} },
    ]
    return Screen;

}
export const RootStackScreensFavorite = () => {
    const Screen: any = [
        { id: 12, name: RootStackScreenENum.ScreenFavorite, component: ScreenFavorite, option: {} },
        { id: 18, name: RootStackScreenENum.Favoriteenmpty, component: Favoriteenmpty, option: {} },
    ]
    return Screen;

}
export const RootStackScreensAccount = () => {
    const Screen: any = [
        { id: 3, name: RootStackScreenENum.Account_Detail, component: Account_Detail, option: {} },
        { id: 13, name: RootStackScreenENum.Profile, component: Profile, option: {} },
        { id: 1, name: RootStackScreenENum.Order, component: Order, option: {} },
        { id: 2, name: RootStackScreenENum.NewAddress, component: NewAddress, option: {} },
        { id: 4, name: RootStackScreenENum.Address, component: Address, option: {} },
        { id: 5, name: RootStackScreenENum.EditAddress, component: EditAddress, option: {} },
        { id: 14, name: RootStackScreenENum.Payment, component: Payment, option: {} },
        { id: 15, name: RootStackScreenENum.ScreenEditProfiles, component: ScreenEditProfiles, option: {} },
        { id: 16, name: RootStackScreenENum.ScreenChangePass, component: ScreenChangePass, option: {} },
        { id: 17, name: RootStackScreenENum.MyCards, component: MyCards, option: {} },
    ]
    return Screen;
}
export const RootStackScreens = () => {
    const Screens: any = [

    ]
    return Screens;
}
export const configStack = (route: any) => {
    return {
        headerShown: false,
    }
}