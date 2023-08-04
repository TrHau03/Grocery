import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreensLogin, configStack } from '../../Root/RootStack';

const RootStack = createNativeStackNavigator();
const LoginNavigation = (): React.JSX.Element => {
  return <RootStack.Navigator initialRouteName='Shop' screenOptions={({ route }) => configStack(route)}>
    {
      RootStackScreensLogin().map((item: any) => <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
    }
  </RootStack.Navigator>;
}

export default LoginNavigation