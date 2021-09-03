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
import StackHomeScreen from './src/main/home';
import UserScreen from './src/main/user';
import LogoTitle from './src/main/logo';
import PictogramHome from './src/assets/pics/house.png'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import DrawerHomeScreen from './src/drawer/home_drawer';
import DrawerUserScreen from './src/drawer/user_drawer';

import SideDrawer from './src/drawer/my_drawer';
import Category from './src/drawer/category_drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabAboutScreen from './src/tab/about_tab';
import TabStoreScreen from './src/tab/store_tab';
import TabHomeScreen from './src/tab/home_tab';
import TabWishScreen from './src/tab/wish_tab';
import TabUserScreen from './src/tab/user_tab';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopHomeScreen from './src/top_tab/home_top';
import TopBestScreen from './src/top_tab/best_top';
import TopEventScreen from './src/top_tab/event_top';


import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

// import { SearchBar } from 'react-native-search-bar';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab1 = createBottomTabNavigator();
const Tab2 = createMaterialTopTabNavigator();

const Tab1Component = () => {
  return (
    <Tab1.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveBackgroundColor: 'skyblue',
            tabBarInactiveBackgroundColor: '#c6cbef',
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef'
            }
          }}
          screenOptions={({route})=>({
            tabBarLabel: route.name,
            tabBarIcon: ({focused})=>(
              TabBarIcon(focused, route.name)
            )
          })}
        >

          <Tab1.Screen name="About" component={TabAboutScreen} />
          <Tab1.Screen name="Store" component={TabStoreScreen} />
          <Tab1.Screen name="Home" component={TabHomeScreen} />
          <Tab1.Screen name="Wish" component={TabWishScreen} />
          <Tab1.Screen name="User" component={TabUserScreen} />

    </Tab1.Navigator>
  )
}

const Tab2Component = () => {

  return (
    <Tab2.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveBackgroundColor: 'skyblue',
            tabBarInactiveBackgroundColor: '#c6cbef',
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef'
            }
          }}
          screenOptions={({route})=>({
            tabBarLabel: route.name,
            tabBarIcon: ({focused})=>(
              TabBarIcon(focused, route.name)
            )
          })}
        >

          <Tab2.Screen name="TopHome" component={TopHomeScreen} />
          <Tab2.Screen name="TopBest" component={TopBestScreen} />
          <Tab2.Screen name="TopEvent" component={TopEventScreen} />

    </Tab2.Navigator>
  )
}

const TabBarIcon = (focused, name) => {
    let iconImagePath;
    let iconName, iconSize;

    if (name==='Home') {
      iconName = 'home-outline'
    } else if (name==='User') {
      iconName = 'people-outline'
    } else if (name==='Wish') {
      iconName = 'wallet'
    } else if (name==='About') {
      iconName = 'pint-outline'
    } else if (name==='Store') {
      iconName = 'ios-logo-apple-appstore'
    }

    iconSize = focused ? 30 : 20
    return (
      <Ionicons
        name={iconName}
        size={iconSize}
      />
    )
}

const DrawerComponent = () => {
    return (
      <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerType: "front",
              drawerPosition:'left',
              drawerBackgroundColor: 'transparent',
              drawerStyle: {
                // backgroundColor: '#FAECC5',
                width: 200,
              },
              drawerActiveTintColor: 'red',
              drawerActiveBackgroundColor: 'skyblue'
            }}
            drawerContent={props => <Category {...props} />}
          >
            <Drawer.Screen name="Route1" component={Tab1Component} />
            <Drawer.Screen name="Route2" component={Tab2Component} />

          </Drawer.Navigator>
    )
}

const HeaderRight = () => {
    const navigation = useNavigation();
    return (
      <View style={{flexDirection: 'row', paddingRight: 15}}>
        <TouchableOpacity
          onPress={()=>{
            navigation.dispatch(DrawerActions.openDrawer())
          }}
        >
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    )
}

class App extends Component {

    render() {

      return (
        <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen 
                name="Main" 
                component={DrawerComponent} 
                options={{
                  headerRight: ({}) => <HeaderRight />
                }}
              />
            <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
          </Stack.Navigator>


          
        </NavigationContainer>



      )
    }
}

// export const App = ()  => {
//   return (
    // <NavigationContainer>
    //   <Tab2.Navigator>
    //       <Tab2.Screen name="Bottom" component={Tab1Component} />
    //   </Tab2.Navigator>
    // </NavigationContainer>
//    );
// }

const styles = StyleSheet.create({

});


export default App;
