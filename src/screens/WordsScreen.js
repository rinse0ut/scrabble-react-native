/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TabBarIOS, SectionList} from 'react-native';
import Layout from "../components/Layout";
import {colors, padding, fonts} from "../styles/base";

type Props = {};
export default class WordsScreen extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabWordIndex'
    };
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
    console.log('WordScreen:props', this.props)
    console.log('WordScreen:screen', this.state)
    return (
      <Layout>
        <TabBarIOS>
          <TabBarIOS.Item
            systemIcon="bookmarks"
            selected={this.state.selectedTab === 'tabWordIndex'}
            onPress={ () => this.setTab('tabWordIndex') }
          >
            <TabLetters/>
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
 * Letter List Tab
 */
class TabLetters extends React.Component {

  render() {
    return (
      <View style={letterStyles.container}>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
          <View style={letterStyles.tile}>
            <Text style={letterStyles.letter}>{letter}</Text>
            <Text style={{fontSize: 11, lineHeight: 80}}>1</Text>
          </View>
        ))}
      </View>
    );
  }
}

const letterStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tile: {
    width: 60,
    height: 60,
    backgroundColor: colors.secondary,
    margin: padding.sm,
    paddingLeft: 5,
    borderRadius:5,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  letter: {
    margin: padding.sm,
    fontSize: fonts.lg,
  },
  score: {

  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: padding.sm,
    paddingRight: padding.sm,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    backgroundColor: colors.quaternary
  },
  item: {
    padding: padding.sm,
    fontSize: 18,
    color: colors.primary,
    height: padding.xl,
  },
})

/**
 * Words Tab
 */
class TabWords extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ['Aaron']},
            {title: 'B', data: ['Ben', 'Billy']},
            {title: 'C', data: ['Charlie', 'Charlotte']},
            {title: 'D', data: ['Devin']},
            {title: 'E', data: ['Edward', 'Ernie', 'Elizabeth']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={WordStyles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={WordStyles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const WordStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: padding.md
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: padding.sm,
    paddingRight: padding.sm,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    backgroundColor: colors.quaternary
  },
  item: {
    padding: padding.sm,
    fontSize: 18,
    color: colors.primary,
    height: padding.xl,
  },
})


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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   title: {
//     fontSize: fonts.lg,
//     color: colors.primary,
//     textAlign: 'center',
//     margin: 10,
//   },
//   description: {
//     fontSize: fonts.sm,
//     color: colors.secondary,
//   }
// });