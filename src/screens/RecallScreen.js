/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Layout from "../components/Layout";
import {colors} from "../styles/base";

type Props = {};
export default class RecallScreen extends Component<Props> {
  render() {
    console.log('AboutScreen:props', this.props)
    return (
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}>Recall Words Beginning with A</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type your word here!"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: fonts.lg,
    color: colors.primary,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    fontSize: fonts.xl,
    color: colors.secondary,
    textAlign: 'center',
  }
});