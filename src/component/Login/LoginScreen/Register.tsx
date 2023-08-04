import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack'
import { useNavigation } from '@react-navigation/native';
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Register>
const countriesWithFlags = [
  { image: require("../../../assets/images/Han-Quoc.png") },
  { image: require("../../../assets/images/nam-phi.png") },
  { image: require("../../../assets/images/Singapore.png") },
  { image: require("../../../assets/images/United_States.png") },
  { image: require("../../../assets/images/Vietnam.png") },
];
const Register = () => {
  const usenavigation = useNavigation<DemoNavigaDrop>();
  const [email, setemail] = useState<string>('');
  const [name, setname] = useState<string>('');
  return (
    <ScrollView style={myStyle.Container}> 
    <Pressable
   
     onPress={() => usenavigation.navigate(RootStackScreenENum.User)}
     >
      <Image
          source={require("../../../assets/images/iconBack.png")}
        />
    </Pressable>
      <View style={myStyle.title}>
        <Text style={myStyle.txtSignin}>Sign up</Text>
        <Image
          style={myStyle.phone}
          source={require("../../../assets/images/Phone.png")}
        />
      </View>

      <View style={myStyle.input}>
        <View>
          <TextInput style={myStyle.txtInput} placeholder="Name Surname" value={name} onChangeText={setname} />
        </View>
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
                  ) : (
                    <></>
                  )}

                  <Image source={require("../../../assets/images/down.png")} />
                </View>
              );
            }}
            dropdownStyle={myStyle.dropdown3DropdownStyle}
            rowStyle={myStyle.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={myStyle.dropdown3RowChildStyle}>
                  <Image source={item.image} style={myStyle.dropdownRowImage} />
                </View>
              );
            }}
          />
          <TextInput style={myStyle.txtInputPhone} placeholder="Email"  value={email} onChangeText={setemail}/>
        </View>
      </View>
      <View style={myStyle.txt}>
        <Text style={myStyle.txtWe}>
          We need to verify you. We will send you a one time verification code.{" "}
        </Text>
      </View>
      <View style={myStyle.btn}>
        <View style={myStyle.Next}>
          <Pressable style={myStyle.btnNext} 
           onPress={() => {usenavigation.navigate(RootStackScreenENum.RegisterPass, {data: {email, name}})}}
           >
            <Text style={myStyle.txtNext}>Next</Text>
          </Pressable>
        </View>

        <View style={myStyle.account}>
          <Text style={myStyle.accountLabel}>Already have an account? </Text>
          <Pressable 
                onPress={() => usenavigation.navigate(RootStackScreenENum.Login)}>
            <Text style={myStyle.signUpLabel}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const myStyle = StyleSheet.create({
  signUpLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#FF5E00'
  },
  accountLabel: {
    fontWeight: '400',
    color:'#7F4E1D',
    fontSize: 14,
    lineHeight: 21,
  },
  account:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
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
  bot:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  txtNext: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
  btnNext: {
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FF5E00",
    backgroundColor: "#FF5E00",
    height: 50,
    width: "90%",
  },
  Next: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  btn: {
    marginTop: 40,
    width: "100%",
  },
  txtWe: {
    color: "#7F4E1D",
    fontSize: 16,
    fontWeight: "400",
  },
  txt: {
    padding: 10,
    width: "100%",
  },
  txtInputPhone: {
    width: "70%",
    padding: 14,
  },
  dropdown3BtnStyle: {
    width: "30%",
    paddingHorizontal: 0,
  },
  dropdown3BtnChildStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3DropdownStyle: {  },
  dropdown3RowStyle: {
    borderBottomColor: "#444",
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 29,
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
    marginTop: 16,
  },
  txtInput: {
    borderWidth: 1,
    backgroundColor: "#F3F3F3",
    borderColor: "#F3F3F3",
    borderRadius: 5,
    padding: 14,
  },
  input: {
    width: "100%",
    marginTop: '80%'
  },
  txtSignin: {
    fontWeight: "700",
    fontSize: 24,
    color: "#FF5E00",
  },
  phone: {
    position: 'absolute',

  },
  title: {
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  Container: {
    width: "100%",
    padding: 16,
  },
});