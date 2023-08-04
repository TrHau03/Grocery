import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.ScreenEditProfiles>

const MyCards = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const navigateToEditProfile = () => {
    // navigation.navigate('EditProfiles');
  };

  const navigateToChangePassword = () => {
    // Xử lý chuyển hướng đến màn hình Change Password
  };

  const navigateToMyCards = () => {
    // Xử lý chuyển hướng đến màn hình My Cards
  };

  const handleNotificationsToggle = (value: boolean) => {
    setNotificationsEnabled(value);
    // Xử lý sự kiện bật/tắt thông báo
  };

  const handleLogout = () => {
    // Xử lý sự kiện đăng xuất
  };

  const handleGoBack = () => {
    // Xử lý sự kiện quay lại trang trước đó
  };
  const usenavigation = useNavigation<DemoNavigaDrop>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => usenavigation.navigate(RootStackScreenENum.Profile)}>
        <Icon name="chevron-left" size={15} color="#FF5E00" />
      </TouchableOpacity>
      <Text style={styles.title}>My Cards</Text>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem} onPress={navigateToEditProfile}>
          <View style={styles.menuItemContent}>
            <Image source={require('../../../assets/images/icon_card.png')} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>My Card</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#804F1E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={navigateToChangePassword}>
          <View style={styles.menuItemContent}>
            <Image source={require('../../../assets/images/icon_card.png')} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>My Card</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#804F1E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={navigateToMyCards}>
          <View style={styles.menuItemContent}>
            <Image source={require('../../../assets/images/icon_applepay.png')} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Apple Pay</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#804F1E" />
        </TouchableOpacity>
      </View>

     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF5E00',
    marginTop: 20,
    marginBottom: 40,
  },
  menuSection: {},
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5E00',
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#804F1E', // Màu của các mục trong App Settings
    marginTop: 30,
    height: 56,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuItemText: {
    fontSize: 18,
    color: '#804F1E',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  updateButton: {
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 30,
    height: 50,
    width: 343,
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
    
  },
  menuButton: {
    alignItems: 'center',
    
  },
  menuText: {
    fontSize: 10,
    color: '#6D3805',
  },
  menuItemIcon: {
    marginRight: 20,
    width: 57,
    height: 38,
    // Add other styles as needed
  },
});

export default MyCards;
