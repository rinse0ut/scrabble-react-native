/* @flow */
import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {colors, dimensions} from '../styles/base'

type Props = {}
class TopBar extends Component<Props> {
  render() {
    const {title} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.quaternary
  },
  header: {
    width: dimensions.fullWidth,
    color: colors.primary,
    textAlign: 'center',
  }
})

export default TopBar