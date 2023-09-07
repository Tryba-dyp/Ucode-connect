
const houseMixin = {
  wordReplace(oldWord, newWord) {
    this.description = this.description.replace(oldWord, newWord);
  },

  wordInsertAfter(targetWord, newWord) {
    this.description = this.description.replace(targetWord, `${targetWord} ${newWord}`);
  },

  wordDelete(word) {
    this.description = this.description.replace(word, '');
  },

  wordEncrypt() {
    this.description = this.description.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
  },

  wordDecrypt() {
    this.wordEncrypt();
  }
}
