describe('checkBrackets', () => {
    
  describe('Incorrect cases', () => {
      it('Whithout params ', () => {
          assert.equal(checkBrackets(), -1);
      });
      it('NULL param ', () => {
          assert.equal(checkBrackets(null), -1);
      });
      it('Empty string ', () => {
          assert.equal(checkBrackets(''), -1);
      });
      it('Not string param ', () => {
          assert.equal(checkBrackets(5474), -1);
      });
      it('Without brackets ', () => {
          assert.equal(checkBrackets('qwertyu234dwer23'), -1);
      });
  });

  describe('Correct cases', () => {
      it('() ', () => {
          assert.equal(checkBrackets('()'), 0);
      });
      it(')()( ', () => {
          assert.equal(checkBrackets(')()('), 2);
      });
      it('((-_-)+(*_*)+(^_^)) ', () => {
          assert.equal(checkBrackets('((-_-)+(*_*)+(^_^))'), 0);
      });
      it('(((@_@)+(((#_#)))+(._.))) ', () => {
          assert.equal(checkBrackets('(((@_@)+(((#_#)+(((._.)'), 6);
      });
      it(')())()))-(()(()(() ', () => {
          assert.equal(checkBrackets(')())()))-(()(()(()'), 7);
      });
      it('(()()()()()(((((())))))) ', () => {
        assert.equal(checkBrackets('(()()()()()(((((()))))))'), 0);
      });
      it('((A(a)B(b))) ', () => {
          assert.equal(checkBrackets('((A(a)B(b)))'), 0);
      });
      it('1.[Qwe(____eqw_)){dqw}] ', () => {
          assert.equal(checkBrackets('1.[Qwe(____eqw_)){dqw}]'), 1);
      });
      it('!@#$%^&*)(}{}) ', () => {
          assert.equal(checkBrackets('!@#$%^&*)(}{})'), 1);
      });
      it('|)--{======> ', () => {
          assert.equal(checkBrackets('|)--{======>'), 1);
      });
  });
});
