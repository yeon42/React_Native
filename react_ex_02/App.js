/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component, Linking } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import PictogramHome from './src/assets/pics/house.png'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';

import SideDrawer from './src/my_drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//       <DrawerItem
//         label="Help"
//         onPress={()=>Linking.openURL('http://www.google.com')}
//         icon={()=><LogoTitle/>}
//       />
//         <DrawerItem
//         label="Info"
//         onPress={()=>alert('Info Window')}
//       />
//     </DrawerContentScrollView>
//   )
// }

const TabBarIcon = (focused, name) => {
  let iconImagePath;

  if (name==='Home') {
    iconImagePath = require('./src/assets/pics/house.png')
  } else if (name==='User') {
    iconImagePath = require('./src/assets/pics/user.png')
  } else if (name==='Message') {
    iconImagePath = require('./src/assets/pics/message.png')
  }

  return (
    <Image
      style={{
        width: focused? 24 : 20,
        height: focused? 24 : 20,
      }}
      source = {iconImagePath}
    />
  )
}

class App extends Component {

  render() {
    return (

      <NavigationContainer>
        <Tab.Navigator
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

          <Tab.Screen name="Home" component={TabHomeScreen}/>
          <Tab.Screen name="User" component={TabUserScreen}/>
          <Tab.Screen name="Message" component={TabUserScreen}/>
        </Tab.Navigator>
      </NavigationContainer>

        // <NavigationContainer>
        //   <Drawer.Navigator
        //     initialRouteName="Home"
        //     screenOptions={{
        //       drawerType: "front",
        //       drawerPosition: 'right',
        //       drawerStyle: {
        //         backgroundColor: '#c6cbef',
        //         width: 200,
        //       },
        //       drawerActiveTintColor: 'red',
        //       drawerActiveBackgroundColor: 'skyblue',
        //     }}
        //     drawerContent={props => <SideDrawer {...props} />}
        //   >
        //   <Drawer.Screen 
        //       name="Home" 
        //       component={DrawerHomeScreen}
        //       options={{
        //         drawerIcon: () => (
        //           <Image
        //             source={PictogramHome}
        //             style={{width: 40, height: 40}}
        //           />
        //         )
        //       }}
        //   />
        //     <Drawer.Screen name="User" component={DrawerUserScreen}/>
        //   </Drawer.Navigator>
        // </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
