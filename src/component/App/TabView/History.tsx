import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable, FlatList } from 'react-native';
const renderItem = ({ item }: any): React.JSX.Element => {
    const {number, status, date, price } = item;

    return (
        <Pressable >
            <View style = {styles.item}>
                <Image style={styles.img} source={require("../../../assets/images/iconOrder.png")}/>
                <View  style={styles.grpCenter}>
                        <Text style={styles.textNumber}>Order #{number}</Text>
                        <Text style = {styles.textStatus}>{status}</Text>
                        <Text style = {styles.textDate}>{date}</Text>
                </View>
                <View>
                    <Text  style={styles.textPrice}>{price}</Text>
                </View>
            </View>
        </Pressable>
    );
};
export default class History extends React.Component {

    render() {
        return (
            <View >
                <FlatList
                    removeClippedSubviews={true}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.number}
                    showsVerticalScrollIndicator={false} // ẩn thanh cuộn
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textDate:{
        fontSize: 14,
        color: '#804F1E'
    },
    textStatus:{
        fontSize: 14,
        color: '#5EC401',
    },
    textNumber:{
        color: '#804F1E',
        fontSize: 20,
        letterSpacing: 0.20
    },
    textPrice:{
        fontSize: 20,
        color: '#F37A20',
        fontWeight: '700'
    },
    grpCenter:{
        flexDirection: 'column',
        width: '40%',
        marginLeft: -70
    },
    img:{},
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(109, 56, 5, 0.06)'
    }
});
var data = [
    {
        number: "345",
        status: 'Delivered',
        date: 'October 26, 2014',
        price: '$700'
    },
    {
        number: "346",
        status: 'Cancelled',
        date: 'October 14, 2016',
        price: '$452'
    },
    {
        number: "347",
        status: 'Delivered',
        date: 'July 26, 2017',
        price: '$452'
    },
]