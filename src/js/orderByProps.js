import arrayMove from './arrayMove';

export default function orderByProps(incomingObj, arrPrimSort) {
  const arrFromObject = [];
  if (Object.keys(incomingObj).length > 0) {
    for (const index in incomingObj) {
      const objInArray = {};
      objInArray.key = index;
      objInArray.value = incomingObj[index];
      arrFromObject.push(objInArray);
    }
    arrFromObject.sort((prev, next) => (prev.key < next.key ? -1 : 1));
    arrPrimSort.reverse();
    arrPrimSort.forEach((element, index) => {
      const fromIndex = arrFromObject.findIndex((item) => (item.key === arrPrimSort[index]));
      arrayMove(arrFromObject, fromIndex, 0);
    });
  }
  return arrFromObject;
}
