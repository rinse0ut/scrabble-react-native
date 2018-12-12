import React from "react";
import {getLetters} from "../api/letter";
import {StyleSheet, View, Text} from "react-native";
import {colors, fonts, padding} from "../styles/base";
import Layout from "../components/Layout";
import Loader from '../components/Loader'
import Letter from '../components/Letter'

/**
 * Recall Index Screen
 */
export default class RecallIndexScreen extends React.Component {

  state = {
    isLoading: true,
    letters: []
  }

  componentDidMount() {
    getLetters()
      .then(letters => this.setState({letters}))
      .catch(console.error)
      .finally(this.setState({isLoading: false}))
  }

  handleLetterPress = (item) => {
    const {navigate} = this.props.navigation;
    navigate('Recall', {startingLetter: item.letter})
    console.log('TabLetters:handleLetterPRess', navigate)
  }

  render() {
    const {isLoading, letters} = this.state
    console.log('TabLetters:props', this.props)
    const {navigate} = this.props.navigation;

    if (isLoading) return (
      <Loader/>
    )
  
    return (
      <Layout>
        <View style={styles.container}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.title}>Recall words starting with...</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
        {letters.map(item =>  
            <Letter 
              letter={item.letter} 
              score={item.score}
              styles={letterStyles}
              handlePress={() => this.handleLetterPress(item)}
            />
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
  }
});

const letterStyles = StyleSheet.create({
  tile: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    margin: padding.sm,
    paddingLeft: 0,
    borderRadius: 5,
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