import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import INScreen from './Screens/IN';
import FBScreen from './Screens/FB';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer>
      
    </AppContainer>
  );
}

const TabNavigator = createBottomTabNavigator({
  Instagram: {screen:INScreen}, 
  Facebook: {screen:FBScreen}
})

const AppContainer = createAppContainer(TabNavigator)