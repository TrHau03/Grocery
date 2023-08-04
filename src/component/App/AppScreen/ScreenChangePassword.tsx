import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.ScreenEditProfiles>

const ScreenChangePass = () => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleGoBack = () => {
    // Handle the go back event to the previous screen
  };

  const handleUpdateProfile = () => {
    // Handle the update profile event
  };
  const usenavigation = useNavigation<DemoNavigaDrop>();
  return (
    <ScrollView style={styles.container} >
      <TouchableOpacity style={styles.backButton} onPress={() => usenavigation.navigate(RootStackScreenENum.Profile)}>
        <Icon name="chevron-left" size={15} color="#FF5E00" />
      </TouchableOpacity>
      <Text style={styles.title}>Change Password</Text>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#6D3805" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={oldPassword}
          onChangeText={setOldPassword}
          placeholder="Old Password"
          placeholderTextColor="#6D3805"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#6D3805" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="New Password"
          placeholderTextColor="#6D3805"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#6D3805" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="#6D3805"
          secureTextEntry
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.changeButton} onPress={handleUpdateProfile}>
          <Text style={styles.changeButtonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backSingInButton} onPress={handleGoBack}>
          <Text style={styles.backSingInButtonText}>Back To Sign In</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    height: '100%'
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
    marginRight: 20,
    width: windowWidth * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    color: 'black',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
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
    marginTop: '45%'
  },
  changeButton: {
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 30,
    height: 50,
    width: '80%',
  },
  changeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  backSingInButton: {
    backgroundColor: '#FFFF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 30,
    marginLeft: 30,
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: '#FF5E00',
  },
  backSingInButtonText: {
    color: '#FF5E00',
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

export default ScreenChangePass;
