// TODO: write your code here
import orderByProps from './orderByProps';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

// const obj = [];
// console.log('APP ', Object.keys(obj).length);

console.log('Итоговый массив:');
console.log(orderByProps(obj, ['name', 'level']));
