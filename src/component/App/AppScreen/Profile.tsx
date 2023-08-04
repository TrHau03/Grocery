import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import SelectDropdown from 'react-native-select-dropdown';
import { useSelector } from 'react-redux';
import { User } from '../../Redux/selector';

type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Profile>

const Profile = (props: any) => {

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const user = useSelector(User);
  console.log("User",user);
  
  const navigateToEditProfile = () => {

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
      <TouchableOpacity style={styles.backButton} onPress={() => usenavigation.navigate(RootStackScreenENum.Account_Detail)}>
        <Icon name="chevron-left" size={15} color="#FF5E00" />
      </TouchableOpacity>
      <Text style={styles.title}>{user.name}</Text>
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem} onPress={() => usenavigation.navigate(RootStackScreenENum.ScreenEditProfiles)}>
          <View style={styles.menuItemContent}>
            <Icon name="user" size={24} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#804F1E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => usenavigation.navigate(RootStackScreenENum.ScreenChangePass)}>
          <View style={styles.menuItemContent}>
            <Icon name="lock" size={24} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#804F1E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => usenavigation.navigate(RootStackScreenENum.MyCards)}>
          <View style={styles.menuItemContent}>
            <Icon name="credit-card" size={24} style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>My Cards</Text>
          </View>
          <Icon name="chevron-right" size={15} color="#804F1E" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>App Settings</Text>
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Icon name="bell" size={24} style={styles.menuItemIcon} />
            <Text style={styles.menuItemNotifi}>Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationsToggle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Icon name="language" size={24} style={styles.menuItemIcon} />
            <Text style={styles.menuItemNotifi}>Language</Text>
          </View>
          <SelectDropdown data={language}
            defaultValue={'English'}
            buttonStyle = {styles.textLanguage}
            buttonTextStyle = {{color: '#804F1E', marginRight: 50}}
            dropdownStyle={{backgroundColor: '#F3F3F3', borderRadius: 5, position: 'relative', left: '45%'}}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }} />
          <Icon name="chevron-right" size={15} color="#804F1E" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Icon name="sign-out" size={24} style={styles.menuItemIcon} color="#804F1E" />
            <Text style={styles.menuItemNotifi}>Logout</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLanguage: {
    position: 'relative',
    left: 70,
    color: '#804F1E'
  },
  container: {
    flex: 1,
    padding: 16,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
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
  menuText: {
    marginTop: 5,
    fontSize: 10,
    color: '#6D3805',
  },
  menuButton: {
    alignItems: 'center',
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
  },
  menuItemIcon: {
    marginRight: 10,
    color: '#804F1E', // Màu của icon
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuItemText: {
    fontSize: 18,
    color: '#804F1E',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  menuItemNotifi: {
    fontSize: 18,
    color: '#804F1E',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
const language = ['Assamese', 'Punjabi', 'English', 'VietNamese', 'Lao', 'Afrikaans', 'Ndebele', 'Icelandic']
export default Profile;
