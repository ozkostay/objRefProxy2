import orderByProps from '../orderByProps';

test('should orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const arrItog = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(arrItog);
});

test('Проверка throw в orderByProps', () => {
  const obj = {};
  const test = orderByProps(obj, ['name', 'level']);
  expect(test.length).toBe(0);
});
