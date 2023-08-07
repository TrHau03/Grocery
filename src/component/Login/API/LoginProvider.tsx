
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
    const [user, setuser] = useState<Object>();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const login = async (email: User, password: User) => {
        try {
            const response = await AxiosInstance().post('/user/login',
                {
                    email: email,
                    password: password
                });
            const token = response.data.access_token;
            const user = response.data.user;
            const refreshToken = response.data.refresh_token ;
            console.log("Usser", JSON.stringify(user));
            await AsyncStorage.multiSet([['token', token],['refreshToken', refreshToken],['user', JSON.stringify(user)]]);
            if (response.status) { setIsLoggedIn(true); setuser(user)};
            console.log(response.status);
            
            return response;
        } catch (error) {
            console.log('Login Error: ', error);
        }
        return false;
    }
    const checkToken = async (access_token: any) => {

        try {
            const response = await AxiosInstance().post('/user/checkToken',
                {
                    access_token: access_token
                });
                console.log("CheckToken", response);
                
            return response.status;
        } catch (error) {
            console.log('CheckToken Error: ', error);
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
    const refreshToken = async (email: string, refreshToken: string) => {
        try {
            console.log(email, refreshToken);
            
            const response = await AxiosInstance().post('/user/refresh_token', {
                email: email,
                refreshToken: refreshToken,
            });
            if (response.status) {
                console.log("refreshToken", response.status);
                await AsyncStorage.setItem('token', response.data.access_token );
                return true;
            }
            return false;
        } catch (error: any) {
            console.log(error);

        }
    }
    return (
        <UserContext.Provider
            value={{ isLoggedIn,user, login, register, forgotPassword, checkToken,refreshToken }}>
            {children}
        </UserContext.Provider>
    )
}