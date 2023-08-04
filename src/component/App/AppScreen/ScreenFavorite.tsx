import { Animated, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useDispatch, useSelector } from 'react-redux';
import { todoRemainingSelectFavorite } from '../../Redux/selector';
import { todoSlice } from '../Slice/todoSlice';
import Favoriteenmpty from './Favoriteenmpty';
import Dialog from "react-native-dialog";
import Item from 'antd/es/list/Item';
const ScreenFavorite = (props: any) => {
    const todoList = useSelector(todoRemainingSelectFavorite);
    console.log('check',todoList);
    
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = (key: any) => {
        dispatch(todoSlice.actions.deleteToDoFavorite({
            key
        }));
    }
    const handleAdd = (item : any) =>{
        const{key, name, price,category,quantity,img} = item
        dispatch(todoSlice.actions.addToDoCard({key, name, price,category,quantity,img}))
    }
    const closeRow = (rowMap: any, rowKey: any) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };
    const deleteRow = (rowMap: any, rowKey: any) => {
        closeRow(rowMap, rowKey);
    };
    const renderItem = ({ item }: any): React.JSX.Element => {
        const { img, name, price } = item;
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
                        <Pressable style={mystyles.Add} onPress={() =>{ setVisible(true), handleAdd(item)}} >
                            <Image source={require('../../../assets/images/iconShopping.png')} />
                            <Text style={mystyles.txtAdd}>Add to card</Text>
                        </Pressable>
                        <View style={mystyles.Price}>
                            <Text style={mystyles.txtPrice}> ${price} /kg</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const renderHiddenItem = (data: any, rowMap: any) => (
        <Pressable style={mystyles.rowBack} onPress={() => { deleteRow(rowMap, data.item.key), handleDelete(data.item.key) }}>
            <Image style={[mystyles.backRightBtn, mystyles.backRightBtnRight]} source={require('../../../assets/images/recycle.png')} />
        </Pressable>
    );
    return (
        (todoList.length != 0) ?
            <View style={mystyles.container}>
                 <Dialog.Container visible={visible} >
                <Dialog.Title>Notification</Dialog.Title>
                <Dialog.Description>
                    Update Address Completed
                </Dialog.Description>
                <Dialog.Button label="OK" onPress={() => setVisible(false)} />
            </Dialog.Container>
                <Pressable>
                    <Image style={mystyles.back} source={require('../../../assets/images/iconBack.png')} />
                </Pressable>
                <Text style={mystyles.txtTitle}>Favorite</Text>
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
                />
            </View> : <Favoriteenmpty props={props} />
    )
}

export default ScreenFavorite

const mystyles = StyleSheet.create({

    backTextWhite: {
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
        gap: 80,
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

    txtAdd: {
        paddingLeft: 8,
        fontSize: 14,
        color: '#FF5E00',
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
        width: 100,
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
    },
    container: {
        paddingTop: 20,
        flexDirection: 'column',
        height: '100%'
    },
})

