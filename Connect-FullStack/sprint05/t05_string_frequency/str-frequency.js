module.exports = class StrFrequency {
  #str;

  constructor(str) {
    this.#str = str;
  }

  letterFrequencies() {
    const lettersCounts = {};
    const letters = this.#str.match(/[A-Za-z]/g);

    if (letters) {
      for (const letter of letters) {
        const upperLetter = letter.toUpperCase();

        if (!lettersCounts[upperLetter]) {
          lettersCounts[upperLetter] = 1;
        } else {
          lettersCounts[upperLetter]++;
        }
      }
    }

    return lettersCounts;
  }

  wordFrequencies() {
    const wordsCounts = {};
    const words = this.#str.match(/\b[A-Za-z]+\b/g);

    if (words) {
      for (const word of words) {
        const upperWord = word.toUpperCase();

        if (!wordsCounts[upperWord]) {
          wordsCounts[upperWord] = 1;
        } else {
          wordsCounts[upperWord]++;
        }
      }
    }

    return wordsCounts;
  }

  reverseString() {
    return this.#str.split('').reverse().join('');
  }
}
