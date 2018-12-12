/* @flow */
import React, {Component} from 'react'
import {StyleSheet, View, TabBarIOS} from 'react-native';
import {colors, padding, dimensions} from '../styles/base'
import TopBar from './TopBar'

type Props = {}
class Layout extends Component<Props> {
  render() {
    const {children} = this.props
    return (
      <View style={styles.container}>
        <TopBar title="Two Letter Words"/>
        <View style={styles.wrapper}>
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 70,
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
    backgroundColor: colors.tertiary,
  },
  wrapper: {
    flex: 1,
    // paddingVertical: padding.sm,
  }
})

export default Layout