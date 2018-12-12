/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Layout from "../components/Layout";
import {colors, fonts, padding} from "../styles/base";

type Props = {};
export default class AboutScreen extends Component<Props> {
  render() {
    console.log('AboutScreen:props', this.props)
    return (
      <Layout>
        <Text style={styles.title}>About</Text>
        <Text style={styles.description}>This is a React Native App for learning two letter words.</Text>
        <Text style={styles.description}>Knowing these words can help you gain an extra 50 points playing
        board games such as Scrabble or Words With Friends.</Text>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: fonts.lg,
    color: colors.primary,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: fonts.md,
    color: colors.secondary,
    padding: padding.sm
  }
});