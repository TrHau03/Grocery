//react native by typescript

import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import ItemCategory from '../../../untils/ItemCategory'
import { useDispatch, useSelector } from 'react-redux';
import { todoRemainingSelectCate } from '../../Redux/selector';
import { filterSlice } from '../Slice/filterSlice';
import Dialog from "react-native-dialog";
import { todoSlice } from '../Slice/todoSlice';

interface Product {
  key: number,
  img: any,
  name: String,
  quantity: number,
  price: number,
}






const ScreenShop = ({ navigation, route }: any): JSX.Element => {
  const todoList = useSelector(todoRemainingSelectCate);
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  
  const handleAddtoCard = ({ key, img, name, price, quantity }: Product) => {
    dispatch(todoSlice.actions.addToDoCard({ key, img, name, price, quantity }))
}
  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.containerItemPD} onPress={() => navigation.navigate('Explore', { screen: 'Detail_Product', params: { data: item } })}>
      <View style={styles.ImgContainerPD}>
        <Image source={item.img} />
      </View>

      <View style={styles.in4PD}>
        <View style={styles.in4Text}>
          <Text style={styles.NamePD}>{item.name}</Text>
          <Text style={styles.QuantityPD}>{item.quantity}kg</Text>
          <Text style={styles.PircePD}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => {setVisible(true), handleAddtoCard(item)} }>
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
      <View style={styles.Title}>
        <Image source={require('../../../assets/images/ic-location.png')} style={styles.imagetitle} />
        <Text style={styles.TitleHome}>Lungangen</Text>
      </View>
      <View style={styles.SearchPD}>
        <Image source={require('../../../assets/images/ic-search.png')} style={styles.imageSearch} />
        <TextInput
          placeholder='Search'
          placeholderTextColor={'rgba(109, 56, 5, 0.57)'}
          style={styles.TextSearch}
        />
      </View>
      <View style={styles.Categorytitle}>
        <Text style={styles.textCategory}>Category</Text>
        <Pressable onPress={() => navigation.navigate('Explore', { screen: 'ScreenExplore' })}>
          <Text style={styles.textSeeAll}>See All</Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {todoList.map((item: any) => (
          <TouchableOpacity key={item.key} onPress={() => { navigation.navigate('Explore', {screen: 'ScreenFruits', params: { cateName: item.name }} ) }}>
            <View style={styles.containerItemCT}  >
              <View style={[{ backgroundColor: item.color }, styles.containerImg]}>
                <Image source={item.img} />
              </View>
              <Text style={styles.TextCategory}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.Categorytitle}>
        <Text style={styles.textCategory}>Popular deals</Text>
        <Pressable onPress={() => navigation.navigate('Explore', { screen: 'ScreenFruits', params: { cateName: 'All' } })}>
          <Text style={styles.textSeeAll}>See All</Text>
        </Pressable>
      </View>
      <FlatList
        data={DataProduct}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()}
        horizontal
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ScreenShop

const styles = StyleSheet.create({
  categoryScroll: {
    maxWidth: '100%',
    flexDirection: 'row',
    maxHeight: 140,
  },
  TextCategory: {
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Klarna Text',
    color: '#6D3805',
    lineHeight: 18,
  },
  containerItemCT: {
    display: 'flex',
    maxWidth: 100,
    maxHeight: 140,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
  textSeeAll: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Klarna Text',
    color: '#FF5E00',
    textTransform: 'capitalize',
  },
  textCategory: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Klarna Text',
    color: '#6D3805',
    textTransform: 'capitalize',
  },
  Categorytitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginTop: '7%',
    alignItems: 'center',
    marginBottom: '7%',
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
  TitleHome: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FF5E00',

  },
  imagetitle: {
    margin: 8,
    width: 20,
    height: 27,
    padding: 10,
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    padding: 16,
    flexDirection: 'column',
  },
  imgIC: {
    width: 35,
    height: 35,
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
    width: '100%',
    height: 100,
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
  },
  containerItemPD: {
    width: 170,
    height: 210,
    backgroundColor: '#FFFFFF',
    margin: 10,
    paddingHorizontal: 10,
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
})

const DataProduct: Product[] = [
  {
    key: 1,
    img: require('../../../assets/images/img-pd1.png'),
    name: 'Red Apple',
    quantity: 1,
    price: 4.99,
  },
  {
    key: 2,
    img: require('../../../assets/images/img-pd2.png'),
    name: 'Orginal Banana',
    quantity: 1,
    price: 5.99,
  },
  {
    key: 3,
    img: require('../../../assets/images/img-pd3.png'),
    name: 'Avocado Bowl',
    quantity: 1,
    price: 3.99,
  },
  {
    key: 4,
    img: require('../../../assets/images/img-pd4.png'),
    name: 'Strawberry',
    quantity: 1,
    price: 7.99,
  },
  {
    key: 5,
    img: require('../../../assets/images/img-pd5.png'),
    name: 'Orginal Mango',
    quantity: 1,
    price: 2.99,
  },

];