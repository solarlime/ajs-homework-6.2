import Character from './app';

test('Should pass normally', () => {
  const newbie = new Character('Hero', 'Bowman');
  newbie.damage(100);
  expect(newbie.health).toEqual(40);
});

test('Without parameters', () => {
  const newbie = new Character('Hero', 'Bowman');
  newbie.damage();
  expect(newbie.health).toEqual(100);
});

test('More than health', () => {
  const newbie = new Character('Hero', 'Bowman');
  newbie.damage(200);
  expect(newbie.health).toEqual(0);
});
