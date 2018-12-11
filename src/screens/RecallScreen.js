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
import {getWords} from "../api/word"

type Props = {};
export default class RecallScreen extends Component<Props> {

  componentDidMount() {
    getWords().then(words => this.setState({words}))
      .catch(console.error)
      .finally(this.setState({isLoading: false}))
  }

  getWordsStartingWith(letter) {
    const {words} = this.state

  }

  render() {
    console.log('RecallScreen:props', this.props)
    console.log('RecallScreen:state', this.state)
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