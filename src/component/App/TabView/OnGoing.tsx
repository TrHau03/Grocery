import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
var radio_props = [
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 2 }

];
export default class OnGoing extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.date}>
                    <Image style={styles.calendar} source={require('../../../assets/images/iconCalendar.png')} />
                    <Text style={styles.textDate}>March 5, 2019</Text>
                    <Text style={styles.textTime}>6:30 pm </Text>
                </View>
                <View style = {styles.grpcontent}>
                    <View>
                        <Image source={require('../../../assets/images/iconProgress.png')}/>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.item}>
                            <Image source={require('../../../assets/images/iconOnGoing1.png')}/>
                            <Text style= {styles.textItem}>    We are packin your items...</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../../../assets/images/iconOnGoing2.png')}/>
                            <Text style= {styles.textItem}>Your order is delivering to your location...</Text>
                        </View>
                        <View style={styles.item}>
                            <Image source={require('../../../assets/images/iconOnGoing3.png')}/>
                            <Text style= {styles.textItem}>   Your order is received.</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grpcontent:{
        flexDirection: 'row',
        marginTop: 40
    },
    textItem:{
        color: 'rgba(109, 56, 5, 1)',
        marginLeft: 20,
        fontSize: 16
    },
    item:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 65,
    },
    content:{
        width: '80%',
        marginLeft: '10%',
        marginTop: -20
    },
    textTime: {
        color: '#F37A20',
        fontSize: 14,
        fontWeight: '400'
    },
    calendar: {
        width: '8%',
        height: '100%'
    },
    textDate: {
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805',
        marginLeft: -90
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    }
});