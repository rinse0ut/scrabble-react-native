import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {colors, padding, fonts} from "../styles/base"

/**
 * Letter
 */
export default class Letter extends PureComponent {

  render() {
    const {letter, score, status, statusIcon, styles, handlePress} = this.props
    let backgroundColor;
    console.log('STATUS', status)
    if (status === 'CORRECT') {
      backgroundColor = 'green' 
    } else if (status === 'WRONG') {
      backgroundColor = 'red' 
    }
    return (
      <TouchableOpacity 
        key={letter} 
        style={(backgroundColor) ? [styles.tile, {backgroundColor}] : styles.tile}
        onPress={() => handlePress()}
      >
        <View style={{position: 'absolute', top: 4, right: 4}}>
          { statusIcon }
        </View>
        <Text style={styles.letter}>
          {letter}
        </Text>
        <Text style={styles.score}>
          {score}
        </Text>
      </TouchableOpacity>
    )
  }
} 
