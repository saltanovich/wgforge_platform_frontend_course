/**
 * Реализовать функцию cloneDeep которая копирует объекты по значению с любой глубиной вложенности
 */
export default function cloneDeep(obj) {
  const cloneObj = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      cloneObj[key] = cloneDeep(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  });
  return cloneObj;
}
