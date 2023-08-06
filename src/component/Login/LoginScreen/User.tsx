import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Login from './Login';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { useNavigation } from '@react-navigation/native';
import { fetchInitialUser } from '../../App/Slice/todoSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.User>
const User = () => {
    const usenavigation = useNavigation<DemoNavigaDrop>();
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            handleGetToken();
        }, 2000)
    })
    const handleGetToken = async () => {
        const dataToken = await AsyncStorage.getItem('token');
        const user :any = await AsyncStorage.getItem('user');
        const parseUser = JSON.parse(user);
        console.log("data", dataToken);
        console.log("data", user);
        if (!dataToken) {
            usenavigation.navigate(RootStackScreenENum.Login);
        } else {
            dispatch(fetchInitialUser(parseUser));
            usenavigation.navigate(RootStackScreenENum.RootTab);

        }
    }
    return (
        <View style={myStyle.Container}>
            <View style={myStyle.Img}>
                <Image
                    source={{ uri: 'https://data.terabox.com/thumbnail/e533ed8ca3719e393af19be7171c475a?fid=4401262978770-250528-449782843686104&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jBzQuMKhP7KFVsMS%2fiSbkjwgX%2bI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=376038524017783449&dp-callid=0&time=1691082000&size=c1536_u864&quality=90&vuk=4401262978770&ft=image&autopolicy=1' }}
                    style={{ height: '100%', width: '100%' }}
                />
            </View>
            <View style={myStyle.Content}>
                <Text style={myStyle.title}>Realax and shop</Text>
                <Text style={myStyle.ContentTitle}>    Shop online and get grocories
                    delivered from stores to your home
                    in as fast as 1 hour .
                </Text>
            </View>
            <View style={myStyle.user}>
                <View style={myStyle.Signup}>
                    <Pressable
                        style={myStyle.btnSignup}
                        onPress={() => usenavigation.navigate(RootStackScreenENum.Register)}
                    >
                        <Text style={myStyle.txtSignup}>Sign up</Text>
                    </Pressable>
                </View>
                <View style={myStyle.Signin}>
                    <Pressable style={myStyle.btnSignin}
                        onPress={() => usenavigation.navigate(RootStackScreenENum.Login)}>
                        <Text style={myStyle.txtSignin}>Sign in</Text>
                    </Pressable>
                </View>
            </View>
        </View>


    )
}

export default User

const myStyle = StyleSheet.create({
    txtSignin: {
        //color: '#FF5E00',
        fontSize: 17,
        fontWeight: "700"
    },
    btnSignin: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FF5E00',
        height: '80%',
        backgroundColor: 'white',
        width: '90%',
    },
    Signin: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSignup: {
        color: 'white',
        fontSize: 17,
        fontWeight: "700"
    },
    btnSignup: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FF5E00',
        height: '80%',
        backgroundColor: '#FF5E00',
        width: '90%',
    },
    Signup: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%'
    },
    user: {
        height: '20%'
    },
    ContentTitle: {
        marginTop: 16,
        justifyContent: 'center',
        fontWeight: "400",
        fontSize: 16,
        width: '70%'
    },
    title: {
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 20,
        marginTop: 33,
    },
    Content: {
        alignItems: 'center',
        width: '100%',
        height: '25%',
    },
    Img: {
        width: '100%',
        height: '53%',
        alignItems: 'center',
        marginTop: 20,
    },
    Container: {
        flex: 1,
        padding: 16
    }
})