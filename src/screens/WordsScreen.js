/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import * as R from 'ramda';
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
    console.log('componentDidUpdate', prevProps, this.props)
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
    console.log('WordScreen:props', this.props)
    console.log('WordScreen:screen', this.state)
    const {navigation} = this.props;
    return (
      <Layout>
        <TabBarIOS>
          <TabBarIOS.Item
            systemIcon="bookmarks"
            selected={this.state.selectedTab === 'tabWordIndex'}
            onPress={() => this.setTab('tabWordIndex')}
          >
            <TabLetters 
              navigation={navigation} 
              foo='foo'
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="most-viewed"
            selected={this.state.selectedTab === 'tabWordList'}
            onPress={() => this.setTab('tabWordList')}
          >
            <TabWords/>
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
 * More Tab
 */
class TabFavorites extends React.Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Favorites</Text>
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
    color: 'white'
  }
});

