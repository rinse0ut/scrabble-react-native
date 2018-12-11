/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import * as R from 'ramda';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import Layout from "../components/Layout";
import {colors, padding, fonts} from "../styles/base";
import {getWords} from "../api/word"
import {getLetters} from "../api/letter"
import Loader from '../components/Loader'
import Letter from '../components/Letter'


type Props = {};
export default class RecallScreen extends Component<Props> {

  state = {
    isLoading: true,
    startingLetter: 'A',
    letters: [],
    words: [],
    correctLetters: [],
    wrongLetters: []
  }

  componentDidMount() {
    getLetters().then(letters => {
      this.setState({letters})
      return getWords()
    })
    .then(words => this.setState({words}))
    .catch(console.error)
    .finally(this.setState({isLoading: false}))
  }

  getWordsForRecall() {
    const {words, startingLetter} = this.state
    const items = words.filter(item => R.head(item.word) === startingLetter)
    return R.pluck('word', items)
  }

  isCorrect(word) {
    const recallWords = this.getWordsForRecall()
    return R.contains(word, recallWords)
  }

  handleSelectedLetter = (item) => {
    console.log(`${item.letter} was pressed.`)
    const {startingLetter, correctLetters, wrongLetters} = this.state
    const selectedWord = `${startingLetter}${item.letter}`
    if (this.isCorrect(selectedWord)) {
      this.setState({correctLetters: R.append(item.letter, correctLetters)})
    } else {
      this.setState({wrongLetters: R.append(item.letter, wrongLetters)})
    }
  }

  render() {
    console.log('RecallScreen:props', this.props)
    console.log('RecallScreen:state', this.state)
    const {isLoading, letters, correctLetters, wrongLetters} = this.state

    if (isLoading) return (
      <Loader/>
    )

    const Check = <Image
      style={styles.check}
      source={require('../img/Check.png')}
    />    
  
    return (
      <Layout>
        <View style={styles.container}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Letter letter="A" score="1" styles={letterStyles}/>
            <Letter letter="?" score="" styles={letterStyles}/>
          </View>
        </View>
        <View style={styles.wrapper}>
          {letters.map(item =>  
              <View key={item.letter}>
                <Letter 
                  letter={item.letter} 
                  score={item.score}
                  status={R.contains(item.letter, correctLetters) ? 'CORRECT': R.contains(item.letter, wrongLetters) && 'WRONG'}
                  statusIcon={R.contains(item.letter, correctLetters) ? Check : null}
                  styles={letterStyles}
                  handlePress={() => this.handleSelectedLetter(item)}
                />
              </View>
          )}
        </View>    
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },  
  title: {
    fontSize: fonts.lg,
    color: colors.primary,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    fontSize: fonts.xl,
    color: colors.secondary,
    textAlign: 'center',
  },
  check: {
    width: 11,
    height: 13,
  },  
});

const letterStyles = StyleSheet.create({
  tile: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    margin: padding.sm,
    paddingLeft: 0,
    borderRadius:5,
    flexDirection: 'row',
  },
  letter: {
    margin: padding.sm,
    fontSize: fonts.lg,
  },
  score: {
    fontSize: 10, 
    lineHeight: 70  
  }
})