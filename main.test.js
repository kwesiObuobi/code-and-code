const {stringLength} = require('./main');

describe('String Length', () => {
  it('should return the correct length of the string', () => {
    const length = stringLength('kwesi') ;

    expect(length).toBe(5);
  });

  it('should return an error if the string has less than 1 character', () => {
    const length = stringLength('');

    expect(length).toBe('invalid input');
  });

  
})