/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {colors, fonts} from "../styles/base";
import Layout from '../components/Layout';

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    console.log('HomeScreen:props', this.props)
    const {navigate} = this.props.navigation;
    return (
      <Layout>
        <Text style={styles.welcome}>Welcome!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="About"
            color={colors.primary}
            onPress={() => navigate('About')}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Words"
            color={colors.primary}
            onPress={() => navigate('Words')}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Recall"
            color={colors.primary}
            onPress={() => navigate('RecallIndex')}
          ></Button>
        </View>
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
  welcome: {
    fontSize: fonts.lg,
    color: colors.primary,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius:10,
    borderWidth: 1,    margin: 20,
    backgroundColor: colors.quaternary
  }
});
