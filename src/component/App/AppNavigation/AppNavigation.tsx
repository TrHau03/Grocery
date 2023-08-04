import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreensAccount, RootStackScreensCart, RootStackScreensExplore, RootStackScreensFavorite, RootStackScreensLogin, RootStackScreensShop, configStack } from '../../Root/RootStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabScreens, configTab } from '../../Root/RootTabParams';
const Tab = createBottomTabNavigator();
export const RootTab = (): React.JSX.Element => {
  return <Tab.Navigator initialRouteName='Shop' screenOptions={({ route }) => configTab(route)}>
    {
      RootTabScreens().map((item, index) => <Tab.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
    }
  </Tab.Navigator>;
}
const RootStack = createNativeStackNavigator();

export const StackShop = (): React.JSX.Element => {
  return <RootStack.Navigator initialRouteName='Shop' screenOptions={({ route }) => configStack(route)}>
    {
      RootStackScreensShop().map((item: any) => <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
    }
  </RootStack.Navigator>;
}
export const StackExplore = (): React.JSX.Element => {
  return <RootStack.Navigator initialRouteName='Explore' screenOptions={({ route }) => configStack(route)}>
    {
      RootStackScreensExplore().map((item: any) => <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
    }
  </RootStack.Navigator>;
}
export const StackCart = (): React.JSX.Element => {
  return <RootStack.Navigator initialRouteName='Cart' screenOptions={({ route }) => configStack(route)}>
    {
      RootStackScreensCart().map((item: any) => <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
    }
  </RootStack.Navigator>;
}
export const StackFavorite = (): React.JSX.Element => {
  return <RootStack.Navigator initialRouteName='Favorite' screenOptions={({ route }) => configStack(route)}>
    {
      RootStackScreensFavorite().map((item: any) => <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
    }
  </RootStack.Navigator>;
}
export const StackAccount = (user: any): React.JSX.Element => {
  return <RootStack.Navigator initialRouteName='Account_Detail' screenOptions={({ route }) => configStack(route)}>
    {
      RootStackScreensAccount().map((item: any) => <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
    }
  </RootStack.Navigator>;
}
