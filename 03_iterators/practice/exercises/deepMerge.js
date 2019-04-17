/**
 * Реализовать метод deepMerge для рекурсивного слияния собственных и унаследованных перечислимых
 * строковых свойств исходного объекта в целевой объект.
 * Свойства исходного объекта, которые разрешаются в undefined, пропускаются,
 * если свойство существует в целевом объекте.
 * Свойства Array и plain Object типа рекурсивно объединяются, свойства других типов из исходного объекта
 * переписывают свойства в объекте назначения либо добавляются если их нету в объекте назначения
 *
 * Пример:
 *
 * const destinationObject = {
 *   students: [{ name: 'Unit 1' }, { name: 'Unit 2'}],
 *   label: 'backend',
 *   count: 1
 * };
 *
 * const sourceObject = {
 *  students: [{ surname: 'Forge 1' }, { surname: 'Forge 2'}],
 *  label: 'frontend'
 * };
 *
 * deepMerge(destinationObject, sourceObject);
 * // => {
 * //       students: [{ name: 'Unit 1', surname: 'Forge 1' }, { name: 'Unit 2', surname: 'Forge 2' }],
 * //       label: 'frontend',
 * //       count: 1
 * //    }
 */
export default function deepMerge(destinationObject, sourceObject) {
  for (const i of Object.keys(sourceObject)) {
    if (sourceObject[i] === undefined && destinationObject[i] !== undefined) continue;

    if (Array.isArray(sourceObject[i]) && Array.isArray(destinationObject[i])) {
      sourceObject[i].forEach((item, y) => {
        if (typeof item === 'object' && typeof destinationObject[i][y] === 'object') {
          return deepMerge(destinationObject[i][y], item);
        }
        destinationObject[i][y] = item;
      });
    } else if (typeof sourceObject[i] === 'object' && typeof destinationObject[i] === 'object') {
      deepMerge(destinationObject[i], sourceObject[i]);
    } else {
      destinationObject[i] = sourceObject[i];
    }
  }

  return destinationObject;
}
