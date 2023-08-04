import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar, NavigationState, Route, SceneRendererProps, TabBarIndicatorProps, TabBarItemProps } from 'react-native-tab-view';
import { Scene, Event } from 'react-native-tab-view/lib/typescript/src/types';
import { PressableAndroidRippleConfig } from 'react-native/Libraries/Components/Pressable/Pressable';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle, TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import History from '../TabView/History';
import OnGoing from '../TabView/OnGoing';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RootStackScreenENum } from '../../Root/RootStack';
import { useNavigation } from '@react-navigation/native';

type DemoNavigaDrop = StackNavigationProp<RootStackParamList, RootStackScreenENum.Order>
const Order = () => {
const usenavigation = useNavigation<DemoNavigaDrop>();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'OnGoing', title: 'OnGoing' },
    { key: 'History', title: 'History' },
  ]);
  const renderTabBar = (props: React.JSX.IntrinsicAttributes & SceneRendererProps & { navigationState: NavigationState<Route>; scrollEnabled?: boolean | undefined; bounces?: boolean | undefined; activeColor?: string | undefined; inactiveColor?: string | undefined; pressColor?: string | undefined; pressOpacity?: number | undefined; getLabelText?: ((scene: Scene<Route>) => string | undefined) | undefined; getAccessible?: ((scene: Scene<Route>) => boolean | undefined) | undefined; getAccessibilityLabel?: ((scene: Scene<Route>) => string | undefined) | undefined; getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined; renderLabel?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderIcon?: ((scene: Scene<Route> & { focused: boolean; color: string; }) => React.ReactNode) | undefined; renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined; renderIndicator?: ((props: TabBarIndicatorProps<Route>) => React.ReactNode) | undefined; renderTabBarItem?: ((props: TabBarItemProps<Route> & { key: string; }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) | undefined; onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined; onTabLongPress?: ((scene: Scene<Route>) => void) | undefined; tabStyle?: StyleProp<ViewStyle>; indicatorStyle?: StyleProp<ViewStyle>; indicatorContainerStyle?: StyleProp<ViewStyle>; labelStyle?: StyleProp<TextStyle>; contentContainerStyle?: StyleProp<ViewStyle>; style?: StyleProp<ViewStyle>; gap?: number | undefined; testID?: string | undefined; android_ripple?: PressableAndroidRippleConfig | undefined; }) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#FF5E00', }}
      style={{ backgroundColor: '#fffff' }}
      renderLabel={({ route, focused, color }) => (
        focused ? <Text style={{ color: '#FF5E00', margin: 8, fontSize: 20 }}>
          {route.title}
        </Text> : <Text style={{ color: '#6D3805', margin: 8, fontSize: 20 }}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <View style={mystyles.Container}>
      <Pressable style={mystyles.iconBack} onPress={() => usenavigation.navigate(RootStackScreenENum.Account_Detail)}>
        <Image  source={require('../../../assets/images/iconBack.png')} />
      </Pressable>
      <Text style={mystyles.textOther}>Others</Text>
      <View style={mystyles.TabView}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={SceneMap({
            OnGoing: OnGoing,
            History: History,
          })}
        />
      </View>
    </View>
  )
}

export default Order

const mystyles = StyleSheet.create({
  TabView: {
    width: '90%',
    height: '100%',
    position: 'relative',
    top: -30,

  },
  textOther: {
    color: '#FF5E00',
    fontSize: 24,
    letterSpacing: 0.17,
    lineHeight: 100,
    fontWeight: '800'
  },
  iconBack: {
    position: 'absolute',
    top: '5%',
    left: '10%',
  },
  Container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: '10%',
  }
})