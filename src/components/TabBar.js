/* @flow */
import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {colors, dimensions} from '../styles/base'

type Props = {}
class TabBar extends Component<Props> {
  render() {
    const {title} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.footer}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: colors.quaternary
  },
  footer: {
    width: dimensions.fullWidth,
    color: colors.primary,
    textAlign: 'center',
  }
})

export default TabBar