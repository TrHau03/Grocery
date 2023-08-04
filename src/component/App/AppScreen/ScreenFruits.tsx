import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { todoCateSelector, todoRemainingSelectProduct } from '../../Redux/selector';
import { fetchInitialData, filterSlice } from '../Slice/filterSlice';
import { todoSlice } from '../Slice/todoSlice';
import Dialog from "react-native-dialog";

interface Product {
    key: number,
    img: any,
    name: String,
    quantity: number,
    price: number,
}
interface category {
    name: any,
};
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.ScreenFruits>


const ScreenFruits = (props: any): JSX.Element => {
    console.log("check", props.route.params);
    const name = props.route.params.cateName;
    const usenavigation = useNavigation<DemoNavigaDrop>();
    const [title, setTitle] = useState<string>(name);
    useEffect(() => {
        setTitle(name);
        dispatch(
            filterSlice.actions.statusFilterChange(name)
        )
}, [name])
const [checkDispatch, setcheckDispatch] = useState<boolean>(true);
const [visible, setVisible] = useState<boolean>(false);
const [search, setSearch] = useState<string>('');
const [selectedCategory, setSelectedCategory] = useState<string>(name);
useEffect(() => {
    setSelectedCategory(name);
}, [name])
const [refresh, setRefresh] = useState<boolean>(false);
const todoList = useSelector(todoRemainingSelectProduct);
let listCategory = useSelector(todoCateSelector);
const dispatch = useDispatch();
if (checkDispatch) {
    dispatch(fetchInitialData());
    setcheckDispatch(false)
}
const All = {
    key: 0,
    name: 'All',
}
const newlistCategory = [All, ...listCategory];
const handlSearch = (e: any) => {
    console.log("Value", e);
    setSearch(e);
    dispatch(
        filterSlice.actions.searchFilterChange(
            e
        )
    )
}
const handleAddtoCard = ({ key, img, name, price, quantity }: Product) => {
    dispatch(todoSlice.actions.addToDoCard({ key, img, name, price, quantity }))
}

const handleCategoryClick = (category: any) => {
    if (category.name) {
        setSelectedCategory(category.name);
    } else {
        setSelectedCategory(category.name);
    }
    setTitle(category.name)
    dispatch(
        filterSlice.actions.statusFilterChange(category.name)
    )
};
const refreshData = async () => {
    if (checkDispatch) {
        setRefresh(true);
        dispatch(fetchInitialData());
        setRefresh(false);
        setcheckDispatch(false);
    }

};
const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity key={item.key} style={styles.containerItemPD}
        onPress={() => usenavigation.navigate(RootStackScreenENum.Detail_Product, { data: item })}>
        <View style={styles.ImgContainerPD}>
            <Image style={{ width: '100%', height: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={{ uri: item.img }} />
        </View>
        <View style={styles.in4PD}>
            <View style={styles.in4Text}>
                <Text style={styles.NamePD}>{item.name}</Text>
                <Text style={styles.QuantityPD}>{item.quantity} kg</Text>
                <Text style={styles.PircePD}> ${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => { handleAddtoCard(item), setVisible(true) }}>
                <Image source={require('../../../assets/images/ic-add.png')} style={styles.imgIC} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);
return (
    <View style={styles.container}>
        <Dialog.Container visible={visible} >
            <Dialog.Title>Notification</Dialog.Title>
            <Dialog.Description>
                Add to Card Successful
            </Dialog.Description>
            <Dialog.Button label="OK" onPress={() => setVisible(false)} />
        </Dialog.Container>
        <TouchableOpacity
            onPress={() => usenavigation.navigate(RootStackScreenENum.ScreenExplore)}
            style={{ marginVertical: '2%' }}>
            <Image source={require('../../../assets/images/iconBack.png')} style={styles.imgICBack} />
        </TouchableOpacity>
        <View style={styles.Title}>
            <Text style={styles.TitleHome}>{title}</Text>
        </View>
        <View style={styles.SearchPD}>
            <Image source={require('../../../assets/images/ic-search.png')} style={styles.imageSearch} />
            <TextInput
                placeholder='Search'
                placeholderTextColor={'rgba(109, 56, 5, 0.57)'}
                style={styles.TextSearch}
                value={search}
                onChangeText={handlSearch}
            />
        </View>
        <ScrollView
            style={styles.categoryScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {newlistCategory.map((category: any) => (
                <TouchableOpacity
                    key={category.key}
                    style={[
                        styles.categoryItem
                    ]}

                    onPress={() => handleCategoryClick(category)}

                >
                    <Text style={[
                        styles.categoryText,
                        selectedCategory == category.name ? styles.selectedCategory : null,
                    ]} >
                        {category.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
        {(todoList.length != 0) ?
            <FlatList
                style={{ height: '100%' }}
                data={todoList}
                renderItem={renderItem}
                keyExtractor={(item) => item.key.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                refreshing={refresh}
                onRefresh={() => { refreshData(), setcheckDispatch(true) }}
            /> : <View><Text style={styles.TextNoData}>No DaTa</Text></View>}
    </View>
)
}

export default ScreenFruits

const styles = StyleSheet.create({
    TextNoData: {
        height: '70%',
        width: '100%',
        position: 'relative',
        left: '40%',
        top: '40%',
        fontSize: 20,
    },
    categoryText: {
        fontSize: 20,
        height: 25,
        lineHeight: 20,
        fontWeight: '400',
        textAlign: 'center',
        color: '#804F1E',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
    },
    categoryItem: {
        paddingHorizontal: 12,
        height: 35,
        marginLeft: 10,
        marginVertical: 12,
        marginRight: 5,
        borderRadius: 5,
        justifyContent: 'center',
    },
    selectedCategory: {
        borderBottomColor: '#F95E01',
        borderBottomWidth: 1,
    },
    categoryScroll: {
        width: '100%',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        paddingBottom: 1,
    },
    imgICBack: {
        marginVertical: '3%',
    },
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
        paddingHorizontal: '2%',
        flexDirection: 'column',
        height: '100%'
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
        marginVertical: 5,
        borderRadius: 7,
        marginTop: '3%',

    },
    Title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-4%',
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
    NamePD: {
        fontSize: 15,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Helvetica Neue',
        lineHeight: 18,
        color: '#6D3805',
        margin: 1,
    },
    QuantityPD: {
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Helvetica Neue',
        lineHeight: 14,
        color: '#929292',
        margin: 1,
    },
    PircePD: {
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Helvetica Neue',
        lineHeight: 24,
        color: '#FF5E00',
        margin: 1,
    },
    ImgContainerPD: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: 170,
        height: '100%',
        borderRadius: 20,

    },
    in4Text: {
        display: 'flex',
        flexDirection: 'column',
    },
    in4PD: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 7,
        paddingHorizontal: 10,
    },
    containerItemPD: {
        width: 170,
        height: 210,
        backgroundColor: '#FFFFFF',
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 20,
        shadowColor: '#C4C4C4',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imgIC: {
        width: 35,
        height: 35,
    },
})
