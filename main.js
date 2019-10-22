//let money = prompt("Ваш бюджет на месяц");
let money = 1000;
//let date = prompt("Введите дату в формате YYYY-MM-DD");
let date = 2012-12-12

let expensesName = "Обед";
let howMuch = 10001;

let appData = {
    budget: money,
    timeData: date,
    expenses: [expensesName, howMuch],
    optionalExpenses: NaN,
    income: [],
    savings: false
}

//alert = ('Бюджет на день составляет ' + money / 30);
console.log(appData.budget);
console.log(appData.expenses[0], appData.expenses[1]); //Счет в массиве начинается с нуля!
console.log('Бюджет на день составляет ' + money / 30);
