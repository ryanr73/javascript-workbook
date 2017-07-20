'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//code for pig latin
const pigLatin = (word) => {
  const vowels = ['a','e','i','o','u'],
    result = word.split('');
  if (vowels.includes(word[0])) {
    return word += 'yay'
  } else {
    for (let i = 0; i < word.length; i++) {
       //use ! to execute code if not a vowel
      if (!vowels.includes(word[i])) {
          //use shift to remove first item of array
        result.push(result.shift());
      } else {
        result.push('ay');
         //use .join to make a string again
        return result.join('')
      }
    }
  }
}
// console.log(pigLatin("couch"));

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
