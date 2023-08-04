import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView} from "react-native";
import React from "react";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack'
import { useNavigation } from '@react-navigation/native';
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.RegisterCode>
const LoginCode = () => {
  const usenavigation = useNavigation<DemoNavigaDrop>();
  return (
    <ScrollView style={myStyle.Container}>
      <Pressable
        onPress={() => usenavigation.navigate('User')}
      >
        <Image
            style={{width: 20, height: 20}}
            source={require("../../../assets/images/ic_Back.png")}
          />
      </Pressable>
      <View style={myStyle.title}>
        <Text style={myStyle.txtSignin}>Sign up</Text>
        <Image
          source={require("../../../assets/images/Phone1.png")}
        />
      </View>
      <View>
        <Text style={myStyle.txtEnter}>Enter Verification Code</Text>
        <Text style={myStyle.txtSMS}>We have sent SMS to:</Text>
        <Text style={myStyle.txtSDT}>046 XXX XX XX</Text>
      </View>
      <View style={myStyle.btn}>
        <TextInput style={myStyle.btn_1}/>
        <TextInput style={myStyle.btn_1}/>
        <TextInput style={myStyle.btn_1}/>
        <TextInput style={myStyle.btn_1}/>
        <TextInput style={myStyle.btn_1}/>
      </View>
      <View style={myStyle.Next}>
          <Pressable style={myStyle.btnNext}
          onPress={() => usenavigation.navigate(RootStackScreenENum.RegisterPass)}>
            <Text style={myStyle.txtNext}>Sign up</Text>
          </Pressable>
        </View>
    </ScrollView>
  );
};

export default LoginCode;

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
      height: "80%",
      backgroundColor: "#FF5E00",
      width: "90%",
    },
    Next: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      width: "100%",
      height: "10%",
    },

  btn_1:{
    
      width: '15%',
      borderColor: 'black',
      backgroundColor:'#DDDDDD',
      borderRadius: 5,
      borderEndWidth: 1,
      padding: 20
  },
  btn:{
      marginTop: 5,
      padding: 15,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
  },
  txtSDT:{
      fontSize: 18,
      color: '#7F4E1D',
      fontWeight: "400"
  },
  txtSMS:{
      fontSize: 18,
      color: '#7F4E1D',
      fontWeight: "400"
  },
txtEnter:{
  fontWeight: "700",
  fontSize: 20,
   color: '#7F4E1D',
   marginTop: 40
},
  txtSignin: {
  fontWeight: "700",
  fontSize: 24,
  color: "#FF5E00",
},
title: {
  alignItems: "center",
  padding: 20,
  width: "100%",
  height: "50%",
},
Container: {
  width: "100%",
  height: "100%",
  padding: 16,
},
});
