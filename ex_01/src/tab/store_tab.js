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

import TopAllScreen from '../top_tab/all_top';
import TopStarScreen from '../top_tab/star_top';

const Tab = createMaterialTopTabNavigator();


class TopStoreScreen extends Component {

    render() {
      return (
  
        <NavigationContainer independent={true}>
          <Tab.Navigator>
            <Tab.Screen name="TopAll" component={TopAllScreen}/>
            <Tab.Screen name="TopStar" component={TopStarScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
  )
    }
  }
  
  
  export default TopStoreScreen;
  

