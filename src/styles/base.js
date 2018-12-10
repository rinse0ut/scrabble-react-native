import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const colors = {
  primary: "#61dafb", // React blue
  secondary: "#ffffff", // White
  tertiary: "#282c34", // Dark grey
  quaternary: "#20232a", // Darker grey
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: "Arial",
  seconday: "Verdana",
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}
