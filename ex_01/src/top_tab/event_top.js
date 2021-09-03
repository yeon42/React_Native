/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class TopEventScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textHeader}>
                    진행중인 이벤트
                </Text>
                <Text style={styles.textNum}>
                    01
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textHeader: {
        paddingTop: 20,
        paddingLeft: 12,
    },
    textNum: {
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 12,
    }
    
})

export default TopEventScreen;
