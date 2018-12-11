import letters from './data/letters.json'

export const getLetters = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(letters);
    }, 300);
  });
}