import takeAttacks from '../takeAttacks';

test('should takeAttacks', () => {
  const obj = {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  };
  const arrItog = [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];
  expect(takeAttacks(obj)).toEqual(arrItog);
});

test('Проверка пустого description в takeAttacks', () => {
  const obj = {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
  };
  const arrItog = [8, 'Двойной выстрел', 'http://...', 'Описание недоступно'];
  expect(takeAttacks(obj)).toEqual(arrItog);
});
