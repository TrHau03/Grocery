import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Dialog from "react-native-dialog";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack'
import { useNavigation } from '@react-navigation/native';
import { UserContext } from "../API/LoginProvider";
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.RegisterPass>
const LoginPass = ({ route }: any) => {
  const { register } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const { email, name } = route.params.data;
  const usenavigation = useNavigation<DemoNavigaDrop>();
  const [password, setpassword] = useState<string>('');
  const [confirmPassword, setconfirmPassword] = useState<string>('');
  const [hidePass, setHidePass] = useState<Boolean>(true);
  const [hideConfirmPass, setHideConfirmPass] = useState<Boolean>(true);
  const handdleRegister = async () => {
    const checkRegister = await register(email, name, password, confirmPassword);
    console.log("CheckRegister", checkRegister);
    
    if (checkRegister) {usenavigation.navigate(RootStackScreenENum.Login) , setVisible(true)};

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
          style={{ width: 20, height: 20 }}
          source={require("../../../assets/images/ic_Back.png")}
        />
      </Pressable>
      <View style={myStyle.title}>
        <Text style={myStyle.txtSignin}>Sign up</Text>
        <Image
          style={myStyle.phone}
          source={require("../../../assets/images/PhonePass.png")}
        />
      </View>

      <View style={myStyle.text}>
        <Text style={myStyle.txtEnter}>Enter the password</Text>
        <Text style={myStyle.txtFor}>
          For the security & safety please choose a password
        </Text>
      </View>
      <View style={myStyle.input}>
        <Image
          style={myStyle.imgVector}
          source={require("../../../assets/images/padlock.png")}
        />
        <TextInput style={myStyle.txtInput} placeholder="Password" secureTextEntry={hidePass ? true : false} value={password} onChangeText={setpassword} />
        <Pressable onPress={() => setHidePass(!hidePass)}>
          <Image
            source={require("../../../assets/images/visibility.png")}
          />
        </Pressable>
      </View>
      <View style={myStyle.input}>
        <Image
          style={myStyle.imgVector}
          source={require("../../../assets/images/padlock.png")}
        />
        <TextInput style={myStyle.txtInput} placeholder="Confirm Password" secureTextEntry={hideConfirmPass ? true : false} value={confirmPassword} onChangeText={setconfirmPassword} />
        <Pressable onPress={() => setHideConfirmPass(!hideConfirmPass)}>
          <Image
            source={require("../../../assets/images/visibility.png")}
          />
        </Pressable>
      </View>
      <View style={myStyle.Next}>
        <Pressable style={myStyle.btnNext}
          onPress={handdleRegister}
        >
          <Text style={myStyle.txtNext}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LoginPass;

const myStyle = StyleSheet.create({
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
    width: "90%",
    height: 50,
    marginTop: '10%'
  },
  Next: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },

  imgVector: {
    width: "10%",
    height: 30,
  },
  txtInput: {
    fontSize: 16,
    color: "#AC8E71",
    width: "80%",
    marginLeft: 10,
  },
  input: {
    marginTop: 30,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#F3F3F3",
    borderColor: "#F3F3F3",
  },
  txtFor: {
    marginLeft: 2,
    fontWeight: "400",
    fontSize: 16,
    color: "#7F4E1D",
    marginTop: 12,
  },
  txtEnter: {
    marginTop: 5,
    fontWeight: "700",
    fontSize: 20,
    color: "#7F4E1D",
  },
  text: {
    width: "100%",
  },
  txtSignin: {
    fontWeight: "700",
    fontSize: 24,
    color: "#FF5E00",
  },
  phone: {

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
