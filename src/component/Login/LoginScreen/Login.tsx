import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Dialog from "react-native-dialog";
import SelectDropdown from "react-native-select-dropdown";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack'
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../API/LoginProvider';
import { useDispatch } from 'react-redux';
import { fetchInitialUser } from '../../App/Slice/todoSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Login>
const countriesWithFlags = [
  { image: require("../../../assets/images/Han-Quoc.png") },
  { image: require("../../../assets/images/nam-phi.png") },
  { image: require("../../../assets/images/Singapore.png") },
  { image: require("../../../assets/images/United_States.png") },
  { image: require("../../../assets/images/Vietnam.png") },
]
interface User {
  email: string,
  password: string,
}
const Login = () => {
  const usenavigation = useNavigation<DemoNavigaDrop>();
  
  const { login } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState<any>('');
  const [email, setEmail] = useState<string>('haunho@gmail.com');
  const [password, setPassword] = useState<string>('haunho');
  const [hidePass, setHidePass] = useState<Boolean>(true);
  const dispatch = useDispatch();
  
  const handleLogin = async () => {
    const checkLogin = await login(email, password);
    console.log("checklogin",checkLogin);
    dispatch(
      fetchInitialUser(checkLogin.data.user),
    )

    if (!checkLogin.status) setVisible(true);
  }
  return (
    <ScrollView style={myStyle.Container}>
      <Dialog.Container visible={visible} contentStyle={{ borderRadius: 10 }} >
        <Dialog.Title style={{ fontWeight: '500', fontSize: 20 }}>Notification</Dialog.Title>
        <Dialog.Description style={{ fontWeight: '400', fontSize: 15 }}>
          Email or Password is incorrect!!!
        </Dialog.Description>
        <Dialog.Button color={'black'} label="OK" onPress={() => setVisible(false)} />
      </Dialog.Container>
      <Pressable
        onPress={() => usenavigation.navigate(RootStackScreenENum.User)}
      >
        <Image
          source={require("../../../assets/images/iconBack.png")}
        />
      </Pressable>

      <View style={myStyle.title}>
        <Text style={myStyle.txtSignin}>Sign in</Text>
        <Image
          style={myStyle.phone}
          source={require("../../../assets/images/Phone2.png")}
        />
      </View>
      <View style={myStyle.text}>
        <Text style={myStyle.txtEnter}>Enter your email and password to access your account</Text>
      </View>
      <View style={myStyle.input}>
        <View style={myStyle.PhoneNumber}>
          <SelectDropdown
            data={countriesWithFlags}
            defaultValueByIndex={1}
            // defaultValue={{
            //   title: 'England',
            //   image: require('./Images/England.jpg'),
            //}}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonStyle={myStyle.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={myStyle.dropdown3BtnChildStyle}>
                  {selectedItem ? (
                    <Image
                      source={selectedItem.image}
                      style={myStyle.dropdown3BtnImage}
                    />
                  ) : (<></>
                  )}

                  <Image source={require("../../../assets/images/down.png")} />
                </View>
              );
            }}
            rowStyle={myStyle.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={myStyle.dropdown3RowChildStyle}>
                  <Image source={item.image} style={myStyle.dropdownRowImage} />
                </View>
              );
            }}
          />
          <TextInput style={{width: '70%', backgroundColor: '#E5E5E5', borderRadius: 5, paddingLeft: 10}} placeholder="Email" value={email} onChangeText={setEmail} />
        </View>
        <View style={myStyle.inputPass}>
          <TextInput style={myStyle.txtInput} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={hidePass ? true : false} />
          <Pressable onPress={() => setHidePass(!hidePass)}>
            <Image
              source={require("../../../assets/images/visibility.png")}
            />
          </Pressable>
        </View>
      </View>
      <Pressable style={myStyle.btnForgot}
        onPress={() => usenavigation.navigate(RootStackScreenENum.ForgotPassword)}
      >
        <Text style={myStyle.txtForgot}>Forgot Password</Text>
      </Pressable>

      <View style={myStyle.btn}>
        <View style={myStyle.Next}>
          <Pressable style={myStyle.btnNext}
            // usenavigation.navigate(RootStackScreenENum.RootTab as never)
            onPress={handleLogin}
          >
            <Text style={myStyle.txtNext}>Next</Text>
          </Pressable>

        </View>
        <View style={myStyle.bot}>
          <Text style={myStyle.txtAlready}>
            Already have an account?
          </Text>
          <Pressable style={myStyle.btnLogin} onPress={() => usenavigation.navigate(RootStackScreenENum.Register)}>
            <Text> Register</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login

const myStyle = StyleSheet.create({
  inputPass: {
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
    borderColor: "#F3F3F3",
    borderRadius: 5,
    marginTop: 10,
    paddingRight: 10
  },
  iconBack: {
    backgroundColor: 'red'
  },
  btnLogin: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,

  },
  txtAlready: {
    fontSize: 16,
    color: "#7F4E1D",
    justifyContent: "center",
    alignItems: "center",
  },
  bot: {
    width: "100%",
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  },
  txtNext: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
  btnNext: {
    marginTop: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FF5E00",
    height: 50,
    backgroundColor: "#FF5E00",
    width: "90%",
  },
  Next: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginTop: 10,
    width: "100%",
  },
  txtForgot: {
    fontWeight: "400",
    fontSize: 14,
    color: '#FF5E00'
  },
  btnForgot: {
    alignItems: 'flex-end',
    width: '100%',
    height: 19,
    marginTop: 5,
  },
  txtInput: {
    paddingLeft: 10
  },
  input: {
    width: "100%",
  },
  dropdown3BtnStyle: {
    width: "30%",
    backgroundColor: "#F3F3F3",
    paddingHorizontal: 0,
  },
  dropdown3BtnChildStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3RowStyle: {
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    borderRadius: 10
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  PhoneNumber: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "#F3F3F3",
    borderColor: "#F3F3F3",
    borderRadius: 5,

  },
  txtEnter: {
    fontSize: 18,
    fontWeight: "400",
    color: '#6D3805',
    marginBottom: 20

  },
  text: {
    width: '100%',
    marginTop: 300
  },
  txtSignin: {
    fontWeight: "700",
    fontSize: 24,
    color: "#FF5E00",
  },
  phone: {
    position: 'absolute'
  },
  title: {
    alignItems: "center",
    padding: 20,
  },
  Container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 16
  },
})