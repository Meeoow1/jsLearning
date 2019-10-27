// let a = {} + 1 + 2;
// console.log(a);
// console.log(typeof(a));


// a = a1 = [1, 2, 3];
// b = [1, 2, 3];
// console.log(typeof(a));
// console.log(typeof(b));
// /*Будет равно только если сравниваемые аргументы будут относится к 1 объекту, как в примере ниже!*/

//console.log(a == a1);
//console.log(a == b);



// console.log(null || 2 && 3 || 4);
/*Приоритет оператора && выше, чем ||, поэтому он выполнится первым.*/


// console.log( +"Infinity" );
// /*Infinity*/

//console.log( "ёжик" > "яблоко");

// console.log(2 && 1 && null && 0 && undefined)
/*В случае || левый операнд приводится к bool и если значение true возвращается сам операнд. В противном случае возвращается правый операнд.*/

console.log( 0 || 0 || 0 || undefined || true || false); //true
console.log( 0 || 0 || 3 || undefined || true || false); // 3
console.log( 1 || 0 || 0 || undefined || true || false); // 1
console.log( 1 || 2 || 0 || undefined || true || false); // 1
// || 2 || undefined || true || false);
// При одиночном || если оба значения false, выводится правое значение, иначе левое. 0, пустая строка "", null, undefined, NaN -> всё это FALSE!!!
// Выводится первое значение true!
