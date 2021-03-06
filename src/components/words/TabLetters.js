import React from "react";
import {getLetters} from "../../api/letter";
import {StyleSheet, View, Text} from "react-native";
import {colors, fonts, padding} from "../../styles/base";
import Loader from '../Loader'
import Letter from '../Letter'

/**
 * Letter List Tab
 */
export default class TabLetters extends React.Component {

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
    navigate('Words', {letter: item.letter, selectedTab: 'tabWordList'})
    console.log('TabLetters:handleLetterPRess', item.letter)
  }

  render() {
    const {isLoading, letters} = this.state
    console.log('TabLetters:props', this.props)

    if (isLoading) return (
      <Loader/>
    )
  
    return (
      <View>
        <View style={styles.container}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.title}>Word Index</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
        {letters.map(item =>  
            <Letter 
              key={item.letter} 
              letter={item.letter} 
              score={item.score}
              styles={letterStyles}
              handlePress={() => this.handleLetterPress(item)}
            />
        )}
        </View>    
      </View>
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