/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import TopHomeScreen from '../top_tab/home_top';
import TopBestScreen from '../top_tab/best_top';
import TopEventScreen from '../top_tab/event_top';

const Tab = createMaterialTopTabNavigator();

class TabHomeScreen extends Component {
  render() {
    return (

      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="TopHome" component={TopHomeScreen}/>
          <Tab.Screen name="TopBest" component={TopBestScreen}/>
          <Tab.Screen name="TopEvent" component={TopEventScreen}/>

        </Tab.Navigator>
      </NavigationContainer>

      // <View style={{
      //     flex: 1,
      //     alignItems: 'center',
      //     justifyContent: 'center'
      // }}>
      //     <Text>Home Screen</Text>
      //     <Button
      //       title="Go To Home Stack Screen"
      //       onPress={()=>{
      //           this.props.navigation.navigate('Home_Stack')
      //       }}
      //     />

      // </View>
    )
  }
}

export default TabHomeScreen;



