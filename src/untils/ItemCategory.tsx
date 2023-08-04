import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface Item {
  id: number;
  name: string;
  color: string;
  image: string;
}

const items: Item[] = [
  {
    id: 1,
    name: 'Item 1',
    color: '#ff0000',
    image: 'https://picsum.photos/id/1/200/200',
  },
  {
    id: 2,
    name: 'Item 2',
    color: '#00ff00',
    image: 'https://picsum.photos/id/2/200/200',
  },
  {
    id: 3,
    name: 'Item 3',
    color: '#0000ff',
    image: 'https://picsum.photos/id/3/200/200',
  },
];

const renderItem = ({ item }: { item: Item }) => (
  <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <Text style={styles.itemName}>{item.name}</Text>
  </View>
);

const HorizontalFlatList = () => (
  <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
    horizontal
  />
);

const styles = StyleSheet.create({
  itemContainer: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HorizontalFlatList;