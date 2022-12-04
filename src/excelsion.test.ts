import Excelsion from "./excelsion"

test('Instantiate Excelsion', () => {
  expect(new Excelsion());
});

test('Instantiate Excelsion again', () => {
  expect(new Excelsion());
});

// @todo why this passes?
test('Instantiate Excelsion again', () => {
  expect(new Excelsion()).toEqual(new Excelsion());
});

test('Instantiate Excelsion two times', () => {
  expect(new Excelsion()).not.toBe(new Excelsion());
});

test('Throw base excelsion', () => {
  const func = () => {
    throw new Excelsion();
  };

  // @todo use enums
  expect(func).toThrow('Base Excelsion error');
  expect(func).toThrowError(new Excelsion());
})