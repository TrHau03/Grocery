import { Animated, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useDispatch, useSelector } from 'react-redux';
import { todoRemainingSelectCard } from '../../Redux/selector';
import { todoSlice } from '../Slice/todoSlice';
import Favoriteenmpty from './Favoriteenmpty';
import NumericInput from 'react-native-numeric-input'
interface ChangeQuantity  {
    key: number,
    quantity: number,
}
interface renderItem{
    key : number, img: any, name: string, price: number, quantity: number,cate : string,
}
const ScreenCart = ({navigation, route}: any) => {
    const todoList = useSelector(todoRemainingSelectCard);
    const dispatch = useDispatch();
    const handleDelete = (key: number) => {
        dispatch(todoSlice.actions.deleteTodoCard({
            key
        }));
    }
    const handleQuantityChage = (key: ChangeQuantity, quantity: ChangeQuantity) =>{
        dispatch(todoSlice.actions.updateQuanlityCard({key, quantity}))
    }
    const closeRow = (rowMap: any, rowKey: number) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };
    const deleteRow = (rowMap: any, rowKey: number) => {
        closeRow(rowMap, rowKey);
        // const newData = [...listData];
        // const prevIndex = listData.findIndex((item: { key: any; }) => item.key === rowKey);
        // newData.splice(prevIndex, 1);
        // setListData(newData);
    };
    const renderItem = ({ item }: any): React.JSX.Element => {
        const {key, img, name, price, quantity,cate } = item;
        return (
            <View style={mystyles.item}>
                <View>
                    <Image style={mystyles.img} source={{uri: img}} />
                </View>
                <View>
                    <View>
                        <Text style={mystyles.txtProductName}>{name}</Text>
                    </View>
                    <View style={mystyles.bottom}>
                        <View style={mystyles.Add} >
                            <NumericInput value={quantity} textColor={'#6D3805'} leftButtonBackgroundColor={'#ECEBEB'} rightButtonBackgroundColor={'#ECEBEB'}  borderColor={'#F4F4F4'} type='plus-minus' rounded totalWidth={98} totalHeight={29.65} onChange={(quantity: any) => {handleQuantityChage(key, quantity)}} />
                        </View>
                        <View style={mystyles.Price}>
                            <Text style={mystyles.txtPrice}>${price * quantity}/kg</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const renderHiddenItem = (data: any, rowMap: any) => (
        <Pressable style={mystyles.rowBack} onPress={() => {deleteRow(rowMap, data.item.key), handleDelete(data.item.key)}}>
            <Image style={[mystyles.backRightBtn, mystyles.backRightBtnRight]} source={require('../../../assets/images/recycle.png')} />
        </Pressable>
    );
    return (
        <View style={mystyles.container}>
            <Pressable>
                <Image style={mystyles.back} source={require('../../../assets/images/iconBack.png')} />
            </Pressable>
            <Text style={mystyles.txtTitle}>Cart</Text>
            {(todoList.length != 0) ? 
            <SwipeListView
            disableRightSwipe
            data={todoList}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-75}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
        />:<Text style={{height: '80%', fontSize: 20, position: 'relative', left: '40%', top: '40%'}}>No data</Text>}
            <View style={mystyles.btnStyle}>
                        <Pressable style={mystyles.btnAdd} onPress={() =>{navigation.navigate('Account', {screen: 'Payment'})}} >
                            <Text style={mystyles.txtAdd}>Check Out</Text>
                        </Pressable>
                    </View>
        </View>
    )
}

export default ScreenCart

const mystyles = StyleSheet.create({

    backTextWhite: {
    },
    btnStyle: {
      alignItems: 'center',
      paddingBottom: 20,
  },
  txtAdd: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'klarna Text',
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
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginTop: 2,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 2,
        width: 75,
        height: 100

    },
    backRightBtnRight: {
        right: 0,
    },
    swipeout: {
        backgroundColor: 'white',
    },

    back: {
        marginLeft: 15,
    },

    bottom: {
        flexDirection: 'row',
        gap: 70,
        marginBottom: 10,
    },

    txtKG: {
        color: '#6D3805',
        fontSize: 13,
        paddingTop: 5,
        paddingLeft: 5,
    },

    txtPrice: {
        color: '#6D3805',
        fontSize: 18,
    },
    txtTitle: {
        paddingTop: 5,
        paddingBottom: 15,
        color: '#FF5E00',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },

    txtProductName: {
        paddingTop: 15,
        paddingLeft: 10,
        color: '#6D3805',
        fontWeight: 'bold',
        fontSize: 18,
    },

    img: {
        width: 120,
        height: 100,
    },

    Price: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        
    },

    Add: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 10,

    },

    item: {
        borderBottomWidth: 0.3,
        borderBottomColor: '#6D3805',
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: 'white',
        height: 100,
    },
    container: {
        paddingTop: 20,
        flexDirection: 'column',
        height: '100%'
    },
})

