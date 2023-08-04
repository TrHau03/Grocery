import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useDispatch } from 'react-redux';
import { todoSlice } from '../Slice/todoSlice';
import Dialog from "react-native-dialog";
const data = [
    { key: '1', value: 'HCM', },
    { key: '2', value: 'DN' },
    { key: '3', value: 'HN' },
    { key: '4', value: 'CT' },
    { key: '5', value: 'HP' },
    { key: '6', value: 'V' },
    { key: '7', value: 'HL' },
]
const dataOffice = [
    { key: '1', value: 'Home', },
    { key: '2', value: 'School' },
    { key: '3', value: 'The Coffee' },
    { key: '4', value: 'Office' },
]
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.EditAddress>
const EditAddress = (props: any) => {
    const [visible, setVisible] = useState(false);
    const { id, name, icon, addressTitle, city, address } = props.route.params.data;
    const usenavigation = useNavigation<DemoNavigaDrop>();
    const [changeAddress, setchangeAddress] = useState<string>(address);
    const [changeCity, setchangeCity] = useState<string>(city);
    const [changeAddressTitle, setchangeAddressTitle] = useState<string>(addressTitle);
    const [changeName, setchangeName] = useState<string>(name);
    const dispatch = useDispatch();
    const handleUpdate = () => {
        console.log("change", id, changeAddressTitle, changeAddress, changeCity, changeName);

        dispatch(
            todoSlice.actions.updateAddressUser({ id, changeAddressTitle, changeAddress, changeCity, changeName })
        )
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, borderRadius: 50 }}>
            <Dialog.Container visible={visible} >
                <Dialog.Title>Notification</Dialog.Title>
                <Dialog.Description>
                    Update Address Completed
                </Dialog.Description>
                <Dialog.Button label="OK" onPress={() => setVisible(false)} />
            </Dialog.Container>
            <View style={mystyles.Container}>
                <Pressable style={mystyles.iconBack} onPress={() => usenavigation.navigate(RootStackScreenENum.Address)}>
                    <Image source={require('../../../assets/images/iconBack.png')} />
                </Pressable>
                <Text style={mystyles.textNewAddress}>Update Addresses</Text>
                <View style={mystyles.input}>
                    <SelectList
                        defaultOption={{ key: id, value: addressTitle }}
                        setSelected={(text: any) => {
                            if (text === id) { }
                            else {
                                console.log("Title", text);
                                setchangeAddressTitle(text);
                            }
                        }}
                        data={dataOffice}
                        save="value"
                        search={false}
                        placeholder='Home'
                        boxStyles={mystyles.textinput}
                        inputStyles={{ color: '#AC8E71' }}
                        dropdownTextStyles={{ color: '#AC8E71' }}
                        maxHeight={180}
                    />
                    <TextInput style={mystyles.textinput} placeholder='Name Surename' placeholderTextColor={'#AC8E71'} value={changeName} onChangeText={setchangeName} />
                    <SelectList
                        defaultOption={{ key: id, value: city }}
                        setSelected={(text: any) => {
                            if (text === id) { }
                            else {
                                console.log("City", text);
                                setchangeCity(text);
                            }
                        }}
                        data={data}
                        save="value"
                        search={false}
                        placeholder='City'
                        boxStyles={mystyles.textinput}
                        inputStyles={{ color: '#AC8E71' }}
                        dropdownTextStyles={{ color: '#AC8E71' }}
                        maxHeight={180}
                    />
                    <TextInput style={mystyles.textinput} placeholder='Address' placeholderTextColor={'#AC8E71'} value={changeAddress} onChangeText={setchangeAddress} />
                </View>
                <Pressable style={mystyles.btn} onPress={() => { handleUpdate(); setVisible(true) }}>
                    <Text style={mystyles.textBTN}>Update Address</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default EditAddress

const mystyles = StyleSheet.create({
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
        borderRadius: 30,
        marginTop: 150
    },
    textinput: {
        marginBottom: 30,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 15,
        borderWidth: 0,
    },
    input: {
        width: '100%',
        marginTop: 60
    },
    textNewAddress: {
        color: 'rgba(255, 94, 0, 1)',
        fontWeight: '700',
        fontSize: 24,
        marginTop: 5
    },
    iconBack: {
        position: 'absolute',
        top: '5%',
        left: '10%',
    },
    Container: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: '10%',
        backgroundColor: 'white'
    }
})