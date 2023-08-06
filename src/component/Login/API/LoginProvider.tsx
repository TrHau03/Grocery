
import React, { useState, createContext } from 'react'
import Alert from 'react-native';
import AxiosInstance from '../../Axios/AixosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const UserContext = createContext<any>({});

interface User {
    email: string,
    password: string,
    phone: number,
    name: string,
    confirmPassword: string,
}
export const UserProvider = (props: any) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setuser] = useState<Object>();
    const login = async (email: User, password: User) => {
        try {
            const response = await AxiosInstance().post('/user/login',
                {
                    email: email,
                    password: password
                });
            const token = response.data.access_token;
            const user = response.data.user;
            console.log("Usser",user);
            await AsyncStorage.multiSet([['token', token], ['user', JSON.stringify(user)]]);
            if (response.status) { setIsLoggedIn(true), setuser(response.data.user) };
            return response;
        } catch (error) {
            console.log('Login Error: ', error);
        }
        return false;
    }

    const register = async (email: User, name: User, password: User, confirmPassword: User) => {
        try {
            console.log(email, name, password);
            const response = await AxiosInstance().post('/user/register',
                {
                    name: name,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                });
            console.log(response);
            if (!response.status) {
                return false;
            }
            return true;
        } catch (error) {
            console.log('Register Error: ', error);
        }
        return false;
    }
    const forgotPassword = async (email: string) => {
        console.log(email);

        try {
            const response = await AxiosInstance().post('/user/sendMail',
                {
                    email: email,
                });
            if (!response.status) return false;
            return response;
        } catch (error) {
            console.log('forgotPassword Error: ', error);
        }
        return false;
    }
    return (
        <UserContext.Provider
            value={{ isLoggedIn, user, login, register, forgotPassword }}>
            {children}
        </UserContext.Provider>
    )
}