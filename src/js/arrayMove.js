export default function arrayMove(arr, fromIndex, toIndex) {
  arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
  return arr;
}
