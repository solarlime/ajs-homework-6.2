import Character from './app';

test('Should pass normally', () => {
  const newbie = new Character('Hero', 'Bowman');
  expect(newbie.damage(100).health).toEqual(40);
});

test('Without parameters', () => {
  const newbie = new Character('Hero', 'Bowman');
  expect(newbie.damage().health).toEqual(100);
});

test('More than health', () => {
  const newbie = new Character('Hero', 'Bowman');
  expect(newbie.damage(200).health).toEqual(0);
});
