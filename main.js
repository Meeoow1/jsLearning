let money, time;

function getMonthBudget() {
        money = +prompt("Ваш бюджет на месяц");
        date = prompt("Введите дату в формате YYYY-MM-DD");

        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц");
                }
}
getMonthBudget();

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
     b = prompt("Во сколько обойдется?", "");
    
    if ((typeof(a))=== "string" && ((typeof(a)) !=null) && (typeof(b)) !=null && a != "" && b != "" && a.length < 50 ) {

        appData.expenses[a] = b;
    }   else { 
        alert('Ошибка записи, повторите');
        i = i - 1;
    }

}


function detectLevel() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет " + appData.moneyPerDay);



    if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
    } else if(appData.moneyPerDay < 2000) {
    console.log("Высокий уровень достатка");
    } else {
    console.log("Произошла ошибка");
    }
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i+1] = a;
        }
            

}

chooseOptExpenses();
// console.log(appData.optionalExpenses[0]);
// console.log(appData.optionalExpenses[1]);







// let money = +prompt("Ваш бюджет на месяц");
// //let money = 1000;
// let date = prompt("Введите дату в формате YYYY-MM-DD");
// //let date = 2012-12-12;



// appData.moneyPerDay = (appData.budget / 30).toFixed(2);
// alert("Ежедневный бюджет " + appData.moneyPerDay);



// if(appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
// } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний уровень достатка");
// } else if(appData.moneyPerDay < 2000) {
//     console.log("Высокий уровень достатка");
// } else {
//     console.log("Произошла ошибка");
// }

// alert(appData.expenses.expensesName1);
//alert('Бюджет на день составляет ' + money / 30);
console.log(appData.budget);
//console.log(appData.expenses[0], appData.expenses[1]); //Счет в массиве начинается с нуля!
console.log('Бюджет на день составляет ' + money / 30);
console.log(appData.expenses);
console.log(appData);