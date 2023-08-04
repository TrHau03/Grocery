import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { todoRemainingSelectAddressUser } from '../../Redux/selector'
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Address>
type ItemProps = {
    id: string,
    icon: any,
    addressTitle: string,
    city: string,
    address: string
}
const Address = () => {
    const usenavigation = useNavigation<DemoNavigaDrop>();
    const listAddressUser = useSelector(todoRemainingSelectAddressUser);  
    const renderItem = ( {item} : any): React.JSX.Element => {
        const { id, icon, addressTitle, city, address } : ItemProps = item;
        console.log(item);
        return (
            <Pressable onPress={()=> {usenavigation.navigate(RootStackScreenENum.EditAddress , {data: item})} } >
                <View style={mystyles.item}>
                    <Image source={icon} />
                    <View style={mystyles.textAddress}>
                        <Text style={mystyles.textTitleAddress}>{addressTitle}</Text>
                        <Text style={mystyles.textAddressDetail} >{address}</Text>
                    </View>
                    <View>
                        <Image source={require('../../../assets/images/VectorAddress.png')} />
                    </View>
                </View>
            </Pressable>
        );
    };
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} nestedScrollEnabled={true} horizontal={true}>
            <View style={mystyles.Container}>
                <Pressable style={mystyles.iconBack} onPress={() => usenavigation.navigate(RootStackScreenENum.Account_Detail)}>
                    <Image source={require('../../../assets/images/iconBack.png')} />
                </Pressable>
                <Pressable style={mystyles.iconAdd} onPress={() => usenavigation.navigate(RootStackScreenENum.NewAddress)}>
                    <Image source={require('../../../assets/images/iconAdd.png')} />
                </Pressable>
                <Text style={mystyles.textNewAddress}>Addresses</Text>
                <View style={mystyles.flat} >
                    <FlatList
                        removeClippedSubviews={true}
                        data={listAddressUser}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false} // ẩn thanh cuộn
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Address

const mystyles = StyleSheet.create({
    textAddressDetail: {
        color: 'rgba(109, 56, 5, 0.8)',
        fontWeight: '400',
        fontSize: 16,
    },
    textTitleAddress: {
        color: '#6D3805',
        fontWeight: '700',
        fontSize: 18
    },
    textAddress: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        borderBottomColor: 'rgba(128, 79, 30, 0.1)',
        borderBottomWidth: 1,
        paddingLeft: '10%',
        paddingRight: '5%'

    },
    flat: {
        width: '100%',
    },

    textNewAddress: {
        color: 'rgba(255, 94, 0, 1)',
        fontWeight: '700',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 68
    },
    iconAdd: {
        position: 'absolute',
        top: '5%',
        right: '10%',
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
var data = [
    {
        id: '1',
        icon: require('../../../assets/images/iconOffice.png'),
        addressTitle: "Home",
        city: 'HN',
        address: 'Lungangen 6, 41722',
        name: 'Le Trung Hau 1'
    },
    {
        id: '2',
        icon: require('../../../assets/images/iconOffice.png'),
        addressTitle: "School",
        city: 'DN',
        address: 'Lungangen 6, 41722',
        name: 'Le Trung Hau 2'
    },
    {
        id: '3',
        icon: require('../../../assets/images/iconOffice.png'),
        addressTitle: "Office",
        city: 'HCM',
        address: 'Lungangen 6, 41722',
        name: 'Le Trung Hau 3'
    },
    {
        id: '4',
        icon: require('../../../assets/images/iconOffice.png'),
        addressTitle: "The Coffee",
        city: 'HN',
        address: 'Lungangen 6, 41722',
        name: 'Le Trung Hau 4'
    
    },
]