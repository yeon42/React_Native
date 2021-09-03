/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, Button } from 'react-native';

import { CommonActions } from '@react-navigation/native';

class Category extends Component {

  navigateToScreen = (route) => () => {
    this.props.navigation.dispatch(
        CommonActions.navigate({
            name: route,
            params: {},
        })
    )
}

  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
              <View>
                  <View>
                      {/* <Image
                        style={{width: 40, height: 40}}
                      /> */}
                  </View>
                  <Text style={styles.sectionHeading}>Category</Text>
                  <View style={styles.navSectionStyle}>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={this.navigateToScreen('Home')}
                    >
                        Clothes
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        Bags
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        Accs
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        Life
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        Study
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        Wallets
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        Child
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        Things
                    </Text>
                    <Text 
                        style={styles.navItemStyle}
                        // onPress={()=>alert('Help Window')}
                    >
                        etc
                    </Text>
                  </View>

              </View>
          </ScrollView>
          <View style={{paddingLeft: 10, paddingBottom: 30}}>
              <Text>Copyright @ Yeon, 2021.</Text>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // imageContainer: {
    //     alignItems: 'center',
    //     padding: 50
    // },
    sectionHeading: {
      color: 'black',
      paddingTop: 50,
      paddingLeft: 30,
      backgroundColor: 'rgba(213,213,213,0.27)', // 핑크
      paddingVertical: 10,
      paddingHorizontal: 15,
      fontWeight: 'bold'
  },
    navSectionStyle: {
    //   backgroundColor: '#D9E5FF', // 파랑
      paddingTop: 30,
  },
    navItemStyle: {
      paddingLeft: 30,
      padding: 10,
      color: 'black'
  }

})

export default Category;

