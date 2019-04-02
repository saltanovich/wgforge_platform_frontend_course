/**
 * Задание: написать функцию sleep, которая приостанавливает работу потока на
 * время переданное в аргументе. Время задаётся в секундах с точностью до 1 сек.
 * Если передан не валидный аргумент функция должна сразу завершить своё
 * выполнение и вернуть undefined.
 */

export default function sleep(time) {
  const delayTime = time * 1000;
  if (!Number.isInteger(time) || isNaN(delayTime) || time < 0) {
    return;
  }
  const now = new Date().getTime();
  while (now + delayTime > new Date().getTime()) {}
}
