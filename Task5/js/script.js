/* let ЛЮБОЕ НАЗВАНИЕ ПЕРЕМЕННОЙ -------- связываем только с СУЩЕСТВУЮЩИМИ НАЗВАНИЯМИ ИЗ HTML!!! */
let n = document.getElementsByTagName('li');
let menu = document.getElementsByClassName('menu-item');
let menu1 = document.querySelectorAll('.menu-item');
let el = document.createElement('li'); /*Создаем новый элемент для вставки */
let menu2 = document.querySelector('.menu'); /*1: связываем новую переменную в жабаскрипт с родительским классом в html*/


// // li1.classList.add('menu-item'); /*3: Привязваем стиль для отображения цсс красивостей*/


// menu2.appendChild(li1); /*2: Добавляем элемент на страницу, его не будет видно, потому что он без стиля*/
// // menu2.removeChild(li[1]); /*Удаляем кнопку со страницы */


menu2.insertBefore(n[2], n[1]); /*Меняем местами кнопки */
menu2.appendChild(el);
el.classList.add('menu-item');

// // // document.body.menu.removeChild(menu[1]);
// // // menu.removeChild(menu);
// console.log(li);
// console.log(menu);
console.log(menu2);
// // console.log(li1);
// console.log(menu2);




// // // let li = document.createElement("li");
// // // menu.appendChild(li);
// // // console.log(li);

// menu2.insertBefore(li[3],li[2]);