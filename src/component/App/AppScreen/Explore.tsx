import { StyleSheet, Text, View, Image, FlatList, TextInput, Pressable, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialData, filterSlice } from '../Slice/filterSlice';
import { todoRemainingSelectCate } from '../../Redux/selector';
interface itemCategory {
    key: Number,
    img: any,
    name: String,
    color: any,
}

type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.ScreenExplore>
const ScreenExplore = (): JSX.Element => {
    const usenavigation = useNavigation<DemoNavigaDrop>();
    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>('');
    const todoList = useSelector(todoRemainingSelectCate);
    const handlSearch = (e: any) => {
        console.log("Value", e);
        setSearch(e);
        dispatch(
            filterSlice.actions.searchFilterChange(
                e
            )
        )
    }
    const handleCategory = (nameCate: any) => {
        dispatch(
            filterSlice.actions.statusFilterChange(nameCate)
        )

    }
    const renderItem = ({ item }: { item: itemCategory }) => (
        <TouchableOpacity
            onPress={() => { usenavigation.navigate(RootStackScreenENum.ScreenFruits, {cateName: item.name}); handleCategory(item.name) }}>
            <View style={styles.containerItemCT} >
                <View style={[{ backgroundColor: item.color }, styles.containerImg]}>
                    <Image source={item.img} />
                </View>
                <Text style={styles.TextCategory}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.Title}>
                <Text style={styles.TitleHome}>Categories</Text>
            </View>
            <View style={styles.SearchPD}>
                <Image source={require('../../../assets/images/ic-search.png')} style={styles.imageSearch} />
                <TextInput
                    placeholder='Search'
                    style={styles.TextSearch}
                    value={search} onChangeText={handlSearch}
                    placeholderTextColor={'rgba(109, 56, 5, 0.57)'}
                />
            </View>
            <FlatList
                data={todoList}
                renderItem={renderItem}
                keyExtractor={(item) => item.key.toString()}
                numColumns={3}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ScreenExplore

const styles = StyleSheet.create({

    containerItemCT: {
        display: 'flex',
        maxWidth: 100,
        maxHeight: 140,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    containerImg: {
        display: 'flex',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    ImgItem: {
        width: 70,
        height: 90,
    },
    TextCategory: {
        fontSize: 15,
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Klarna Text',
        color: '#6D3805',
        lineHeight: 18,
    },
    TitleHome: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FF5E00',

    },
    container: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        paddingHorizontal: 16,
        flexDirection: 'column',
    },
    imageSearch: {
        width: 20,
        height: 20,
    },
    SearchPD: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 7,
        marginTop: '3%',

    },
    Title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        height: '8%',
    },
    TextSearch: {
        width: '94%',
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: 'rgba(109, 56, 5, 0.57)',
        textTransform: 'capitalize',
        fontFamily: 'Klarna Text'
    },
})