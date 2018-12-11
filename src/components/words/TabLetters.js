import React from "react";
import {getLetters} from "../../api/letter";
import {StyleSheet, View, Image} from "react-native";
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

  handleLetterPress = () => {
    const {navigate} = this.props.navigation;
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
      <View style={styles.container}>
        {letters.map(item =>  
            <Letter 
              letter={item.letter} 
              score={item.score}
              styles={letterStyles}
              handlePress={() => console.log(`${item.letter} was pressed.`)}
            />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
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

const letterStyles = StyleSheet.create({
  tile: {
    width: 60,
    height: 60,
    backgroundColor: colors.secondary,
    margin: padding.sm,
    paddingLeft: 5,
    borderRadius:5,
    flexDirection: 'row',
  },
  letter: {
    margin: padding.sm,
    fontSize: fonts.lg,
  },
  score: {
    fontSize: 11, 
    lineHeight: 80  
  }
})