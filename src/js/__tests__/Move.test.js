import arrayMove from '../arrayMove';

test('should arrayMove', () => {
  expect(arrayMove([1, 2, 3], 2, 0)).toStrictEqual([3, 1, 2]);
});
