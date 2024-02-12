import Magician from '../Magician';
import Daemon from '../Daemon';

test.each([
  [Magician, true, true],
  [Daemon, false, false],
])('test get/set stoned method', (Class_, value, expected) => {
  const item = new Class_();
  item.stoned = value;
  expect(item.stoned).toEqual(expected);
});

test('test set stoned method error', () => {
  const char = new Magician();
  const expected = new Error('stoned must be a boolean value');
  expect(() => { char.stoned = 'value'; }).toThrow(expected);
});

test.each([
  [true, 100, 2, 85],
  [false, 100, 2, 90],
])('test get stoned method', (stoned, attack, dist, expected) => {
  const item = new Magician();
  item.stoned = stoned;
  item.attack = [attack, dist];
  expect(item.attack).toEqual(expected);
});
