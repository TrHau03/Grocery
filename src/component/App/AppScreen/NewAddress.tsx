import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack'
import { SelectList } from 'react-native-dropdown-select-list'
import { useDispatch } from 'react-redux'
import { todoSlice } from '../Slice/todoSlice'
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
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.NewAddress>
const NewAddress = () => {
    const usenavigation = useNavigation<DemoNavigaDrop>();
    const [addressTitle, setaddressTitle] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [visible, setVisible] = useState(false);
    const icon = require('../../../assets/images/iconOffice.png');
    const id = 5;
    const dispatch = useDispatch();
    const handleAdd = () => {
        console.log(addressTitle, name, city, address);

        dispatch(
            todoSlice.actions.addAddressUser({id,icon, addressTitle, name, city, address })
        )
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
             <Dialog.Container visible={visible} >
                <Dialog.Title>Notification</Dialog.Title>
                <Dialog.Description>
                    Add Address Completed
                </Dialog.Description>
                <Dialog.Button label="OK" onPress={() => {setVisible(false), usenavigation.navigate(RootStackScreenENum.Address)}} />
            </Dialog.Container>
            <View style={mystyles.Container}>
                <Pressable style={mystyles.iconBack} onPress={() => usenavigation.navigate(RootStackScreenENum.Address)}>
                    <Image source={require('../../../assets/images/iconBack.png')} />
                </Pressable>
                <Text style={mystyles.textNewAddress}>New Addresses</Text>
                <View style={mystyles.input}>
                    <TextInput style={mystyles.textinput} placeholder='Address Title' placeholderTextColor={'#AC8E71'} onChangeText={setaddressTitle} />
                    <TextInput style={mystyles.textinput} placeholder='Name Surename' placeholderTextColor={'#AC8E71'} onChangeText={setName} />
                    <SelectList
                        setSelected={(text: any) => setCity(text)}
                        data={data}
                        save="value"
                        search={false}
                        placeholder='City'
                        boxStyles={mystyles.textinput}
                        inputStyles={{ color: '#AC8E71' }}
                        dropdownTextStyles={{ color: '#AC8E71' }}
                        maxHeight={180}
                    />
                    <TextInput style={mystyles.textinput} placeholder='Address' placeholderTextColor={'#AC8E71'} onChangeText={setAddress} />
                </View>
                <Pressable style={mystyles.btn} onPress={() =>{handleAdd(), setVisible(true)}}>
                    <Text style={mystyles.textBTN}>New Address</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default NewAddress

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