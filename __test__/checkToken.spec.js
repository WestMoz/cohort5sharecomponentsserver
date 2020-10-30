const { tokenIsNull } = require('../authorize/functions');

describe('token is null function', () => {
  test('asdfasdfasdf should be false', () => {
    expect(tokenIsNull('asdfasdfasdf')).toEqual(false);
  });
  test('*nothing* should be false', () => {
    expect(tokenIsNull()).toEqual(true);
  });
  test('undefined should be false', () => {
    expect(tokenIsNull(undefined)).toEqual(true);
  });
  test('empty string should be false', () => {
    expect(tokenIsNull('')).toEqual(true);
  });
});
