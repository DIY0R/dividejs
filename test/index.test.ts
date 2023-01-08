import { start } from  "../src";

test('Should return helloWorld', () => {
  expect(start()).toBe('hi!')
})