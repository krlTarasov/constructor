import Character from '../Character';

test('Character', () => {
  expect(new Character('vova', 'Daemon')).toEqual({
    name: 'vova',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
  expect(() => new Character('vova', 'daemon')).toThrow(Error('Incorrect class'));
  expect(() => new Character('vovavovavova', 'Daemon')).toThrow(Error('Incorrect name'));
});
