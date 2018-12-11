import React from "react";
import {ActivityIndicator, View} from "react-native";
import {colors} from "../styles/base";

/**
 * Loader Spinner
 */
export default class Loader extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }
}