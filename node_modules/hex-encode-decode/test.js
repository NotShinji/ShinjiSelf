const { encode, decode } = require('./')

test('if it encodes string to hex', () => {
  expect(encode('hello')).toBe('68656c6c6f')
})

test('if it decodes hex', () => {
  expect(decode('68656c6c6f')).toBe('hello')
})
