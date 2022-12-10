import { Excelsion } from "./excelsion"

test('Instantiate Excelsion', () => {
  expect(() => {throw new Excelsion()}).toThrow();
});

test('Instantiate Excelsion again', () => {
  expect(new Excelsion());
});

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

  expect(func).toThrow();
  expect(func).toThrowError(new Excelsion());
})