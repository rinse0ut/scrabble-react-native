import React from "react";
import {SectionList, StyleSheet, Text, View} from "react-native";
import {colors, padding, fonts} from "../../styles/base"
import {getWords} from "../.././api/word"
import Loader from '../Loader'

/**
 * Words Tab
 */
export default class TabWords extends React.Component {

  state = {
    isLoading: true,
    words: []
  }

  componentDidMount() {
    getWords() .then(words => this.setState({words}))
      .catch(console.error)
      .finally(this.setState({isLoading: false}))
  }

  componentDidUpdate() {
    const {words} = this.state
    if (words.length) {
      // setTimeout(() => this.scrollToSection(), 500)
    }
  }

  getSections(words) {
    const sections = []                                

    const sectionMap = words.reduce((sections, item) => {
      const {word} = item 
      const letterIndex = word[0]
      if (sections.has(letterIndex)) {
        let data = sections.get(letterIndex)
        data.push(item)   
        sections.set(letterIndex, data)
      } else {
        sections.set(letterIndex, [item])
      }
      return sections
    }, new Map())
   
                                   
    for (var [key, value] of sectionMap.entries()) {
      sections.push({
        title: key,
        data: value
      })
    }

    return sections
  }

  scrollToSection = () => {
    this.sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: 6,
      itemIndex: 0,
      viewPosition: 0
    });
  };  

  render() {
    console.log('TabWords:state', this.state)
    console.log('TabWords:sections', this.getSections(this.state.words))
    const {isLoading, words} = this.state
    
    if (isLoading) return (
      <Loader/>
    )    

    const sections = this.getSections(words)

    return (
      <View style={styles.container}>
        <SectionList
          sections={sections}
          ref={ref => (this.sectionListRef = ref)}
          renderItem={({item}) => <Text style={styles.item}>{item.word} - {item.def}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: padding.md
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: padding.sm,
    paddingRight: padding.sm,
    paddingBottom: 2,
    fontSize: fonts.lg,
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