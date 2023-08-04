import React, { useState } from 'react';
import { View, Text, TextInput,Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import Dialog from "react-native-dialog";
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Payment>

const Payment = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [deliveLocation, setdeliveLocation] = useState<string>('53 Duong Duc Hien, Tay Thanh, Tan Phu, HCM')
  const [checkApplePay, setcheckApplePay] = useState<boolean>(false);
  const [checkCash, setcheckCash] = useState<boolean>(true);
  const handleGoBack = () => {
    // Xử lý sự kiện quay lại trang trước đó
  };

  const handleUpdateProfile = () => {
    // Xử lý sự kiện cập nhật hồ sơ
  };
  const usenavigation = useNavigation<DemoNavigaDrop>();
  return (
    <View style={styles.container}>
       <Dialog.Container visible={visible} >
                <Dialog.Title>Change Delivery Location</Dialog.Title>
                <Dialog.Input placeholder={'Your Address'} defaultValue={deliveLocation} onChangeText={(value) => setdeliveLocation(value)}/>
                <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
                <Dialog.Button label="OK" onPress={() => setVisible(false)} />
            </Dialog.Container>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => usenavigation.navigate(RootStackScreenENum.Account_Detail)}>
          <Icon name="chevron-left" size={15} color="#FF5E00" />
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.deliveryLocationContainer, { backgroundColor: '#FFF4E9', borderColor: '#FFE6CC', borderWidth: 1 }]}>
          <View style={styles.deliveryLocationHeader}>
            <Text style={styles.deliveryLocationTitle}>Delivery Location</Text>
            <TouchableOpacity onPress={() =>{ setVisible(true)}}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addressContainer}>
            <Icon name="map-marker" size={29} color="#FF5E00" style={[styles.icon1, { width: 20, height: 29 }]} />
            <View >
              <Text style={styles.addressText}>{deliveLocation}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.expectedDateTimeContainer, { backgroundColor: '#FFF4E9', borderColor: '#FFE6CC', borderWidth: 1 }]}>
          <Text style={styles.expectedDateTimeTitle}>Expected date & Time</Text>
        <View style={styles.datePickerContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="calendar" size={20} color="#6D3805" style={styles.calendarIcon} />
          <TextInput
            style={styles.datePickerInput}
            placeholder="Select Date"
            placeholderTextColor="rgba(109, 56, 5, 0.64)"
          />
          <Icon style={styles.chevronIcon} name="chevron-down" size={15} color="#804F1E" />
        </View>
  
        </View>
        <View style={styles.timeSlotsContainer}>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>8 AM - 11 AM</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>11 AM - 13 PM</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>13 PM - 15 PM</Text>
            </View>
          </View>
          <View style={styles.timeSlotsContainer}>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>15 AM - 17 AM</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>17 AM - 19 PM</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>19 PM - 21 PM</Text>
            </View>
          </View>
        </View>

        <View style={styles.InStorePickUp}>
          <View style={styles.viewHeader}>
            <Text style={[styles.viewTitle, styles.titleAlignLeft]}>In-Store Pick Up</Text>
            <Text style={styles.freeText}>FREE</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Icon style={styles.iconInStore} name="chevron-right" size={15} color="#804F1E" />
            <View style={styles.subTitleTextContainer}>
              <Text style={styles.subTitle}>Some Stores May Be Temporarily</Text>
            <Text style={styles.subTitle}>Unavailable.</Text>
            </View>
          </View>
        </View>

        <View style={[styles.seeItemsContainer, { backgroundColor: '#FFF4E9', borderColor: '#FFE6CC', borderWidth: 1 }]}>
          <View style={styles.contentSeeItems}>
            
            <Icon name="shopping-cart" size={25} color="#804F1E" />
            <Text style={styles.seeItemsTitle}>See Items</Text>
            <Icon style={styles.iconSeeItems} name="chevron-right" size={15} color="#804F1E" />
          </View>
        </View>

        <View style={[styles.paymentMethodContainer, { backgroundColor: '#FFF4E9', borderColor: '#FFE6CC', borderWidth: 1 }]}>
          <Text style={styles.paymentMethodTitle}>Payment Method</Text>
          <TouchableOpacity style={styles.menuItemMethod} onPress={() => {setcheckCash(false), setcheckApplePay(true)}}>
            <Image source={require('../../../assets/images/icon_applepay.png')} style={[styles.menuItemIcon, { width: 40, height: 25 }]} />
            <Text style={styles.MethodText}>Apple Pay</Text>
            {(checkApplePay) ? 
            <Icon name="check" size={20} color="#58A919" style={[styles.iconcheck, { width: 20, height: 29 }]} />
           : <></>}
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.menuItemMethod} onPress={() => {setcheckCash(true), setcheckApplePay(false)}}>
            <Image source={require('../../../assets/images/icon_money.png')} style={[styles.menuItemIcon, { width: 41, height: 41 }]} />
            <Text style={styles.MethodText}>Cash on delivery</Text>
            {(checkCash) ? 
            <Icon name="check"  size={20} color="#58A919" style={[{ width: 20, height: 29, marginLeft: 115 }]} />
          : <></>}
          </TouchableOpacity>
        </View>

        <View style={[styles.orderSummaryContainer, { backgroundColor: '#FFF4E9', borderColor: '#FFE6CC', borderWidth: 1 }]}>
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          <View style={styles.menuItemOder}>
            <Text style={styles.MethodText}>Subtototal</Text>
          </View>
          <View style={styles.menuItemOder}>           
            <Text style={styles.MethodText}>Task</Text>
          </View>
          <View style={styles.menuItemOder}>           
            <Text style={styles.MethodText}>In-Store Pick Up</Text>
          </View>
          <View style={styles.separatorOder} />
          <View style={styles.menuItemOderTotal}>           
            <Text style={styles.MethodTextTotal}>Total: </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>CheckOut</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF5E00',
    marginLeft: 130,
  },
  inputContainer: {
    marginBottom: 30,
    marginRight: 20,
    width: windowWidth * 0.8,
  },
  input: {
    height: 48,
    borderWidth: 0,
    borderColor: 'transparent',
    marginRight: 50,
    borderRadius: 5,
    width: 343,
    backgroundColor: '#F3F3F3',
    color: 'black',
  },
  backButton: {
    padding: 8,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  updateButton: {
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 30,
    height: 50,
    width: 343,
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 68,
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    alignItems: 'center',
  },
  menuText: {
    marginTop: 5,
    fontSize: 10,
    color: '#6D3805',
  },
  deliveryLocationContainer: {
    width: 343,
    height: 103,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#FFF4E9',
  },
  deliveryLocationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryLocationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D3805',
    paddingHorizontal: 10,
    lineHeight: 21,
    fontFamily: 'Klarna Text',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 80,
    height: '180%'
  },
  changeText: {
    color: '#FF5E00',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontFamily: 'Klarna Text',
  },
  addressContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  icon1: {
   marginTop: 5,
   marginRight: 5,
  },
  addressTextContainer: {
    
    lineHeight: 19,
    fontFamily: 'Klarna Text',
  },
  addressText: {
    color: '#6D3805',
    fontSize: 14,
    width: '70%'
  },
  expectedDateTimeContainer: {
    width: 343,
    height: 230,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#FFF4E9',
  },
  expectedDateTimeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D3805',
    paddingVertical: 15,
    paddingHorizontal: 10,
    lineHeight: 21,
    fontFamily: 'Klarna Text',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  calendarIcon: {
    marginLeft: 10,
    position: 'absolute',
    zIndex: 1,
  },
  chevronIcon: {
    marginLeft: 280,
    position: 'absolute',
    zIndex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerInput: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFF',
    color: '#6D3805',
    fontSize: 16,
    borderRadius: 10,
    paddingLeft: 40,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 10,
  },
  timeSlot: {
    width: 94,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 13,
    color: '#6D3805',
  },
  InStorePickUp: {
    width: 343,
    height: 82,
    marginBottom: 30,
    marginTop: 20,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  viewTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6D3805',
    fontFamily: 'Klarna Text',
  },
  titleAlignLeft: {
    marginLeft: 10,
  },
  freeText: {
    fontSize: 18,
    color: '#6D3805',
    fontWeight: 'bold',
  },
  subTitleContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    
  },
  iconInStore: {
    marginRight: 15          ,
  },
  subTitleTextContainer: {
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#6D3805',
  },
  seeItemsContainer: {
    width: 343,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#FFF4E9',
    justifyContent: 'center',
  },
  seeItemsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D3805',
    paddingVertical: 15,
    paddingHorizontal: 10,
    lineHeight: 21,
    fontFamily: 'Klarna Text',
  },
  iconSeeItems:{
    marginLeft: 180,
  },
  contentSeeItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
},
  paymentMethodContainer: {
    width: 343,
    height: 203,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#FFF4E9',
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D3805',
    paddingVertical: 15,
    paddingHorizontal: 10,
    lineHeight: 21,
    fontFamily: 'Klarna Text',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(109, 56, 5, 0.11)',
    marginHorizontal: 10,
    marginBottom: 10,
},
  menuItemIcon: {

},
  menuItemMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  iconcheck: {
    marginLeft: 160,
  },
  MethodText: {
    fontSize: 16,
    color: '#804F1E',
    marginLeft: 10,
  },
  orderSummaryContainer: {
    width: 343,
    height: 209,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#FFF4E9',
  },
  orderSummaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6D3805',
    paddingVertical: 15,
    paddingHorizontal: 10,
    lineHeight: 21,
    fontFamily: 'Klarna Text',
    marginBottom: -15,
  },
  menuItemOder: {
    marginTop: 15,
  },
  separatorOder:{
    height: 1,
    backgroundColor: 'rgba(109, 56, 5, 0.11)',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  menuItemOderTotal: {

  },
  MethodTextTotal: {
    fontSize: 16,
    color: '#804F1E',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default Payment;
