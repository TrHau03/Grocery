import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { useSelector } from 'react-redux';
import { User } from '../../Redux/selector';
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.ScreenEditProfiles>

const ScreenEditProfiles = () => {
  const user = useSelector(User);
  const [name, setName] = React.useState<string>(user.name);
  const [phoneNumber, setPhoneNumber] = React.useState<string>(user.phone);
  const [email, setEmail] = React.useState<string>(user.email);
  const handleGoBack = () => {
    // Xử lý sự kiện quay lại trang trước đó
  };

  const handleUpdateProfile = () => {
    // Xử lý sự kiện cập nhật hồ sơ
  };
  const usenavigation = useNavigation<DemoNavigaDrop>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => usenavigation.navigate(RootStackScreenENum.Profile)}>
        <Icon name="chevron-left" size={15} color="#FF5E00" />
      </TouchableOpacity>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="brown" // Màu nâu cho placeholder
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Phone Number"
          placeholderTextColor="brown" // Màu nâu cho placeholder
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          placeholderTextColor="brown" // Màu nâu cho placeholder
        />
      </View>


      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF5E00',
    marginBottom: 80,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 30,
    marginRight: 40,
    width: windowWidth * 0.8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    width: 343,
    backgroundColor: '#E5E5E5',
    color: 'brown',
    paddingLeft: 20,

  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 8,
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  updateButton: {
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 30,
    height: 50,
    width: '80%',
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
    paddingBottom: 20,

  },
  menuButton: {
    alignItems: 'center',
    marginLeft: 20,

  },
  menuText: {
    marginTop: 5,
    fontSize: 10,
    color: '#6D3805',
  },
});

export default ScreenEditProfiles;
