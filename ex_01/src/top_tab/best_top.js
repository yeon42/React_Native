/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class TopBestScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.mainText}>
                    베스트 상품
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainText: {
        backgroundColor: 'yellow',
        paddingTop: 20,
        paddingLeft: 12,
        margin: 10

    }
})

export default TopBestScreen;
