const {stringLength} = require('./main');

describe('String Length', () => {
  it('should return the correct length of the string', () => {
    expect(stringLength('kwesi')).toBe(5);
  })
})