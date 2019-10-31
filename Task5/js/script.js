/* let ЛЮБОЕ НАЗВАНИЕ ПЕРЕМЕННОЙ -------- связываем только с СУЩЕСТВУЮЩИМИ НАЗВАНИЯМИ ИЗ HTML!!! */
// // li1.classList.add('menu-item'); /*3: Привязваем стиль для отображения цсс красивостей*/
// menu2.appendChild(li1); /*2: Добавляем элемент на страницу, его не будет видно, потому что он без стиля*/
// // menu2.removeChild(li[1]); /*Удаляем кнопку со страницы */

let n = document.getElementsByTagName('li');
let el = document.createElement('li'); /*Создаем новый элемент для вставки */
let menu2 = document.querySelector('.menu'); /*1: связываем новую переменную в жабаскрипт с родительским классом в html*/

menu2.insertBefore(n[2], n[1]); /*Меняем местами кнопки */
menu2.appendChild(el);
el.classList.add('menu-item');
el.textContent = 'Пятый пункт';

let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';


// let div = document.getElementsByClassName('column'); /*загоняем в массив все CSS селекторы */
let div_old = document.getElementsByTagName('div'); /*Создаем новую переменную в которой выбираем родительский элемент */
div_old[1].setAttribute('id', 'allfield'); /*Получили массив в родительском элементе, присваиваем определенному элементу ID*/
let div = document.getElementById('allfield'); /*Наконец то определяем точно новый родительский элемент на уровень выше тега, который надо убрать */
let div1 = div.getElementsByTagName('div'); /*Делаем переменную в которую кладем все дочерние, детские элементы ниже уровня родительского (div с классами title, ads, prompt) */
div.removeChild(div1[1]); /*Удаляем из родительского div детский элемент div1[1] с рекламой */

// document.body.removeChild(arr[3]); /*Удаляем из массива нужное значение*/


let stringWithAnswer = document.getElementById('prompt');
// let ans = prompt('Выше отношение к технике Apple?');
stringWithAnswer.textContent = prompt('Ваше отношение к технике Apple?');
// let div1 = document.querySelector('.prompt');

console.log(menu2);
console.log(div_old);
console.log(div1);
// console.log(div1[3]);
// console.log(adv);
// console.log(column);





