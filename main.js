let money = prompt("Ваш бюджет на месяц");
//let money = 1000;
let date = prompt("Введите дату в формате YYYY-MM-DD");
//let date = 2012-12-12;

//let expensesName = "Обед";
//let howMuch = 10001;

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    income: [],
    savings: false
};

let expensesName1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let howMuch1 = prompt("Во сколько обойдется?", "");
let expensesName2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let howMuch2 = prompt("Во сколько обойдется?", "");

appData.expenses.expensesName1 = howMuch1;
appData.expenses.expensesName2 = howMuch2;

alert(appData.expenses.expensesName1);
//alert('Бюджет на день составляет ' + money / 30);
console.log(appData.budget);
//console.log(appData.expenses[0], appData.expenses[1]); //Счет в массиве начинается с нуля!
console.log('Бюджет на день составляет ' + money / 30);
console.log(appData.expenses);