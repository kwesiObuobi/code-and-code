const {stringLength, reverseString} = require('./main');

describe('String Length', () => {
  it('should return the correct length of the string', () => {
    const length = stringLength('kwesi') ;

    expect(length).toBe(5);
  });

  it('should return an error if the string has less than 1 character', () => {
    const length = stringLength('');

    expect(length).toBe('invalid input');
  });

  it('should return an error if the string has more than 10 character', () => {
    const length = stringLength('Programming is fun');

    expect(length).toBe('invalid input');
  });
});

describe('Reversing a string', () => {
  it('should return a reversed string', () => {
    const reversedString = reverseString('saMMy');

    expect(reversedString).toBe('ymmas');
  })
})