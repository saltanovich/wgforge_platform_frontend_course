/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

function smoosh(inputArr) {
  if (!Array.isArray(inputArr)) throw new Error('argument should be an array');
  const outputArr = [];
  function extractArr(childArr) {
    childArr.forEach((item) => {
      if (Array.isArray(item)) {
        extractArr(item);
      } else {
        outputArr.push(item);
      }
    });
  }
  extractArr(inputArr);
  return outputArr;
}

function squeeze(inputArr) {
  if (!Array.isArray(inputArr)) throw new Error('argument should be an array');
  const copiedArr = [...inputArr]; // дикость, но реализовать перезапись исходного массива на лету никак не удалось
  let y = 0;
  function extractArr(childArr) {
    let i = 0;
    while (childArr.length > i) {
      if (Array.isArray(childArr[i])) {
        extractArr(childArr[i]);
      } else {
        inputArr[y] = childArr[i];
        y += 1;
      }
      i += 1;
    }
  }
  extractArr(copiedArr);
  return inputArr;
}

export { smoosh, squeeze };
