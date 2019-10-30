// let a = [] + 1 + 2;
// console.log(a);
// console.log(typeof(a));

// Делает тип строк из всех переменных и получается - пустое значение + 1 + 2 = 12
// ------------------------------------------------------------------------------------------------------

// a = a1 = [1, 2, 3];
// b = [1, 2, 3];
// console.log(typeof(a));
// console.log(typeof(b));
// /*Будет равно только если сравниваемые аргументы будут относится к 1 объекту, как в примере ниже!*/

//console.log(a == a1);
//console.log(a == b);
// ------------------------------------------------------------------------------------------------------


// console.log(null || 2 && 3 || 4);
/*Приоритет оператора && выше, чем ||, поэтому он выполнится первым.*/
// ------------------------------------------------------------------------------------------------------

// console.log( +"Infinity" );
// /*Infinity*/
// ------------------------------------------------------------------------------------------------------


//console.log( "ёжик" > "яблоко");
// True
// string > string

// ------------------------------------------------------------------------------------------------------
// console.log(2 && 1 && null && 0 && undefined)
/*В случае || левый операнд приводится к bool и если значение true возвращается сам операнд. В противном случае возвращается правый операнд.*/

console.log( 0 || 0 || 0 || undefined || true || false); //true
console.log( 0 || 0 || 3 || undefined || true || false); // 3
console.log( 1 || 0 || 0 || undefined || true || false); // 1
console.log( 1 || 2 || 0 || undefined || true || false); // 1
// || 2 || undefined || true || false);
// При одиночном || если оба значения false, выводится правое значение, иначе левое. 0, пустая строка "", null, undefined, NaN -> всё это FALSE!!!
// Выводится первое значение true!

// ------------------------------------------------------------------------------------------------------


// !!(a && b); и (a && b);
// Вернёт разное значение, потому что:

// Оператор || возвращает первый из операндов, значение которого может быть приведено к логическому true. Если же оба операнда приводятся к логическому false, то оператор || вернет последнее значение.

// Оператор && возвращает первый из операндов, значение которого приводится к логическому false. Если же оба операнда приводятся к true, то оператор && вернет последний операнд.

// Конструкция '!!' ЯВНО указывает, что возвращаемое значение - ЛОГИЧЕСКОЕ (true\false)

// Следовательно:
// !!( a && b )  - вернёт логическое значение (true/false)
// (a && b) - вернёт значение которое явно было указано присвоением переменных a и b (let a =...; let b = ..;)
// Следовательно сравнение принимает вид: true = что-то заданное переменными. Сравнение не верно. Булиновое значение не равно определенному значению переменных. 


// a = 1;
// b = 2;
d = !!(0 && 1 );
c = (1 && 2);
console.log(d = c);
console.log(d);
console.log(c);



// function first(lang, callback) {
//     setTimeout(function(){
//         console.log(lang);
//     }, 500);
//     callback();
// }

// first('Arara', function() {
//     console.log(2);
// });

// Callback функция позволяет вызывать в себе еще одну функцию.

// function first() {
//     console.log('2');
// }

// function second(b, callback) {
//     console.log(b);
//     callback();
// }

// second(3, first);


// function done(){
//     console.log('I passed 3d lesson!');
// }

// function learnJS(lang, callback){
//     console.log('I learn ' + lang);
//     callback();
// }

// // function done(){
// //     console.log('I passed 3d lesson!');
// // }

// learnJS('JS', done);

// function first() {
//     setTimeout( function(){
//         console.log(1);
//     }, 500 );
// }

// function second(){
//     console.log(2);
// }

// first();
// second();


function first(callback) {
    setTimeout( function(){
        console.log(1);
    }, 500 );
    callback();
}

function second(){
    console.log(2);
}

second(first);
second();

// let arr = [ 1, 2, 3, 4, 5,];

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift(1, "2", 300);

// for (let i = 0; i < arr.length; i++ ) {
//     console.log(arr[i]);
// }

let arr = [ 1, 2, 3, 4, 5,];
arr.forEach(function(item, i, massive) {
    console.log(i, item + " в массиве " + massive);
    // console.log(i + ': ' + item + "в массиве " + massive + ')');
});

console.log(arr);
