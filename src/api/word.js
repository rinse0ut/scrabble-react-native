import words from './data/words.json'

export const getWords = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(words);
    }, 0);
  });
}