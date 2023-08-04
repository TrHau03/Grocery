import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, FlatList, ScrollView } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { Shadow } from 'react-native-shadow-2';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { todoSlice } from '../Slice/todoSlice';
const renderItem = ({ item }: any): React.JSX.Element => {
    const { img, productname, price } = item;
    return (
        <Pressable>
            <View style={myStyle.product}>
                <Image style={myStyle.product_img} source={img} />
                <Text style={myStyle.product_name}>{productname}</Text>
                <Text style={myStyle.product_kg}>1kg</Text>
                <View style={myStyle.Bot}>
                    <Text style={myStyle.product_price}>{price}</Text>
                    <Pressable>
                        <Image style={myStyle.img_iconAdd} source={require('../../../assets/images/iconAdd.png')} />
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Detail_Product>

const Detail_Product = ({navigation, route}: any) => {
    console.log(route.params);
    const {img,name,price,quantity,cate} = route.params.data;
    const usenavigation = useNavigation<DemoNavigaDrop>();
    const dispatch = useDispatch();
    const [amount, setAmount] = useState<number>();
    const [checkHeart, setcheckHeart] = useState<boolean>(false);
    const handleAddFavorite = (data: any) => {
        const {key,img,name,price} =data;
        console.log("name",name);
        
        if (!checkHeart) {
            console.log("CHeck");
            dispatch(todoSlice.actions.addToDoFavorite({
                key: key,
                img: img,
                name: name,
                price: price
            }));
        }else{
            console.log('UnCheck');
            
            dispatch(todoSlice.actions.deleteToDoFavorite({key}))
        }
    }
    const handleAddtoCard = (data: any) =>{
        const {key,img,name,price,quantity,cate} =data;
        dispatch(todoSlice.actions.addToDoCard({
            key: key,
            img: img,
            name: name,
            price: price,
            cate: cate,
            quantity: amount
        }))
    }
    let styles = 'DBD8D8';
    if (checkHeart) {
        styles = '#FF5E00';
    }
    return (
        <ScrollView>

            <View style={myStyle.Container}>
                <Pressable style={myStyle.iconBack} onPress={() => usenavigation.navigate(RootStackScreenENum.ScreenFruits, {cateName: 'All'})}>
                    <Image source={require('../../../assets/images/iconBack.png')} />
                </Pressable>
                <View style={myStyle.top}>
                    <Pressable style={myStyle.Img_heart}>
                        <Image source={require('../../../assets/images/img_small.png')} />
                    </Pressable>
                    <View style={myStyle.Img}>
                        <Image
                            source={{uri: img}} style = {myStyle.Fruits}
                        />
                    </View>
                    <View style={myStyle.title}>
                        <Text style={myStyle.name}>{name}</Text>
                        <Text style={myStyle.price}>${price} /st</Text>
                        <Text style={myStyle.content}>Golden Ripe Alphonsa mangoes delivered to your house in the most hygenic way ever... Best for eating plain but can also be made into shakes and cakes.</Text>
                    </View>
                    <View style={myStyle.up_and_down}>
                        <NumericInput minValue={quantity} rightButtonBackgroundColor={'#ECEBEB'} leftButtonBackgroundColor={'#ECEBEB'} borderColor={'#F4F4F4'} type='plus-minus' rounded totalWidth={286} totalHeight={50} onChange={value => setAmount(value)} />
                        <Pressable onPress={()=>{setcheckHeart(!checkHeart),handleAddFavorite(route.params.data)}}>
                            <Icon name='heart' size={30} style={ checkHeart ? myStyle.heartIconTrue : myStyle.heartIconFalse } />
                        </Pressable>
                    </View>
                    <View style={myStyle.btnStyle}>
                        <Pressable style={myStyle.btnAdd} onPress={() =>{handleAddtoCard(route.params.data), navigation.navigate('Cart', {screen: 'ScreenCart'}) }} >
                            <Text style={myStyle.txtAdd}>Add To cart</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={myStyle.alsoNeed}>You may also need</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
            </View>
        </ScrollView>
    )
}

export default Detail_Product;

const myStyle = StyleSheet.create({
    Fruits:{
        position: 'relative',
        top: -50,
        width: '80%',
        height: 250,
        borderRadius: 20
    },
    iconBack: {
        position: 'absolute',
        marginTop: 20,
        marginLeft: 15
    },
    img_iconAdd: {
        marginRight: 13,
    },

    Bot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },

    product_price: {
        color: '#FF5E00',
        fontWeight: '700',
        fontSize: 18,
        fontFamily: 'klarna Text',
        lineHeight: 21.6,
        paddingLeft: 15,
    },

    product_kg: {
        color: '#929292',
        fontSize: 14,
        lineHeight: 14.4,
        paddingLeft: 15,
    },

    product_name: {
        color: '#6D3805',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 18,
        paddingLeft: 15,
    },

    product_img: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    product: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 190,
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 15,

        elevation: 5,
        shadowRadius: 10,
    },

    top: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    alsoNeed: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21.6,
        paddingTop: 40,
        paddingBottom: 10,
    },

    btnStyle: {
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 50,
    },

    txtAdd: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.12,
    },

    btnAdd: {
        alignItems: 'center',
        backgroundColor: '#FF5E00',
        width: 340,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
    },

    heartIconFalse: {
        marginLeft: 23,
    },
    heartIconTrue: {
        marginLeft: 23,
        color: '#FF5E00'
    },

    up_and_down: {
        paddingTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        fontSize: 14,
        color: '#6D3805',
        marginTop: 16,
    },

    price: {
        marginTop: 6,
        color: '#6D3805',
        fontSize: 20,
    },

    name: {
        fontSize: 24,
        color: '#6D3805',
        fontWeight: "bold",
    },

    title: {
        paddingTop: "25%",
    },

    Img: {
        alignItems: 'center',
        marginTop: "50%",
    },

    Img_heart: {
        position: 'absolute',
        left: "50%",
    },

    Container: {
        paddingHorizontal: 20
    }
})

const data = [
    {
        key: 4,
        img: require('../../../assets/images/strawberry.png'),
        productname: 'Strawberry',
        price: '$24.0',
    },
    {
        key: 5,
        img: require('../../../assets/images/avocado.png'),
        productname: 'Avocado Bowl',
        price: '$24.0',
    },
    {
        key: 6,
        img: require('../../../assets/images/banana.png'),
        productname: 'Original Banana',
        price: '$5.99',
    },
]