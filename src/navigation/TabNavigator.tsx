import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/screens/Home';
import {scaleHeight, scaleWidth} from 'src/utils/DimensionEditor';
import Icon from 'src/components/Icon';
import {Pressable, StyleSheet, View} from 'react-native';
import Screens from './constants';
import ComingSoon from 'src/screens/ComingSoon';

export type MainStackParams = {
  Home: undefined;
  Diagnose: undefined;
  Scanner: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}: any) => (
  <Pressable style={styles.scanButtonContainer} onPress={onPress}>
    <View style={styles.scanButton}>{children}</View>
  </Pressable>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'rgba(40, 175, 110, 1)',
        tabBarInactiveTintColor: 'rgba(151, 151, 152, 1)',
      }}>
      <Tab.Screen
        name={Screens.Home}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="Home"
              height={scaleHeight(24)}
              width={scaleWidth(24)}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Diagnose}
        component={ComingSoon}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="Healthcare"
              height={scaleHeight(24)}
              width={scaleWidth(24)}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Scanner}
        component={ComingSoon}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Icon
              name="TabBarScanner"
              height={scaleHeight(24)}
              width={scaleWidth(24)}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={Screens.MyGarden}
        component={ComingSoon}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="Leaf"
              height={scaleHeight(24)}
              width={scaleWidth(24)}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ComingSoon}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="Profile"
              height={scaleHeight(24)}
              width={scaleWidth(24)}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonContainer: {
    top: scaleHeight(-30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    width: scaleWidth(64),
    height: scaleWidth(64),
    borderRadius: '100%',
    backgroundColor: 'rgba(40, 175, 110, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scaleHeight(4),
    borderColor: 'rgba(44, 204, 128, 1)',
    paddingTop: scaleHeight(10),
  },
});

export default TabNavigator;
