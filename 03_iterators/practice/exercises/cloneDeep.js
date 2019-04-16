/**
 * Реализовать функцию cloneDeep которая копирует объекты по значению с любой глубиной вложенности
 */
export default function cloneDeep(obj) {
  const cloneObj = {};
  for (let i of Object.keys(obj)) {
    if (typeof obj[i] === 'object' && obj[i] !== null) {
      cloneObj[i] = cloneDeep(obj[i]);
    } else {
      cloneObj[i] = obj[i];
    }
  }
  return cloneObj;
}
