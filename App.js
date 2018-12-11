/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import WordsScreen from './src/screens/WordsScreen';
import RecallScreen from './src/screens/RecallScreen';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  About: {screen: AboutScreen},
  Words: {screen: WordsScreen},
  Recall: {screen: RecallScreen},
},
{
  initialRouteName: "Recall"
});

export default createAppContainer(AppNavigator)

