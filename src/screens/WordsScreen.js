/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TabBarIOS, SectionList, ActivityIndicator} from 'react-native';
import {colors, padding, fonts} from "../styles/base";
import Layout from "../components/Layout";
import TabLetters from "../components/words/TabLetters";
import TabWords from "../components/words/TabWords";

type Props = {};
export default class WordsScreen extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabWordIndex'
    };
  }

  componentDidUpdate(prevProps) {
    console.log('WordsScreen:componentDidUpdate', prevProps, this.props)
    const {navigation} = this.props
    const {navigation:prevNavigation} = prevProps
    const letter = navigation.getParam('letter')
    const prevLetter = prevNavigation.getParam('letter')
    if (letter !== prevLetter) {
      const selectedTab = navigation.getParam('selectedTab')
      this.setTab(selectedTab)
    } else {
      return false
    }
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
    console.log('WordScreen:props', this.props)
    console.log('WordScreen:screen', this.state)
    const {navigation} = this.props;
    console.log('WordScreen:navgation', navigation.getParam('letter'), navigation.getParam('selectedTab'))
    return (
      <Layout>
        <TabBarIOS>
          <TabBarIOS.Item
            title="Index"
            systemIcon="bookmarks"
            selected={this.state.selectedTab === 'tabWordIndex'}
            onPress={() => this.setTab('tabWordIndex')}
          >
            <TabLetters 
              navigation={navigation} 
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="Words"
            systemIcon="most-viewed"
            selected={this.state.selectedTab === 'tabWordList'}
            onPress={() => this.setTab('tabWordList')}
          >
            <TabWords
              navigation={navigation}            
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="favorites"
            onPress={() => this.setTab('tabMore')}
            selected={this.state.selectedTab === 'tabMore'}
          >
            <TabFavorites/>
          </TabBarIOS.Item>

        </TabBarIOS>
      </Layout>
    );
  }
}

/**
 * Favourites Tab
 */
class TabFavorites extends React.Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Favorites</Text>
        <Text style={styles.description}>Coming Soon!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 40,
    color: colors.primary
  },
  description: {
    fontSize: fonts.md,
    color: colors.secondary,
    padding: padding.sm
  }  
});

