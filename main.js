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
    chooseExpenses: function() {
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
    },
    optionalExpenses: function chooseOptExpenses() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i+1] = a;
            }
    },
    income: [],
    savings: false,
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay < 2000) {
        console.log("Высокий уровень достатка");
        } else {
        console.log("Произошла ошибка");
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    chooseIncome: function() {
        let incomeName = prompt('Что приносит вам дополнительный доход? (Перечислите через запятую)', '');
            while( incomeName == 'string' || incomeName == "" || incomeName == null ) {
                incomeName = prompt('Что приносит вам дополнительный доход? (Перечислите через запятую)', '');
            }
        appData.income = incomeName.split(', ' );
        
        // let incomeName1 = prompt('Может быть что-то еще?', '');
        //     while(incomeName1 == 'string' || isNaN(incomeName1) || incomeName1 == "" || incomeName1 == null ) {
        //     incomeName1 = prompt('Может быть что-то еще?', '');
        //     }
        // appData.income = incomeName1.split(',' );    

        appData.income.push(prompt('Может быть что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach(function(item, i, mass) { 
            console.log("Способы доп. заработка " + item );
        }); 
    }

};
function info() {
    for (let key in appData) {
        console.log("Свойство" + key);  
      }
}



// appData.income.forEach(function(item, i, mass) { 
//     console.log("Способы доп. заработка " + i );
// });

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//      b = prompt("Во сколько обойдется?", "");
    
//     if ((typeof(a))=== "string" && ((typeof(a)) !=null) && (typeof(b)) !=null && a != "" && b != "" && a.length < 50 ) {

//         appData.expenses[a] = b;
//     }   else { 
//         alert('Ошибка записи, повторите');
//         i = i - 1;
//     }

// }


// function detectLevel() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed(2);
//     alert("Ежедневный бюджет " + appData.moneyPerDay);



//     if(appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
//     } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний уровень достатка");
//     } else if(appData.moneyPerDay < 2000) {
//     console.log("Высокий уровень достатка");
//     } else {
//     console.log("Произошла ошибка");
//     }
// }

// detectLevel();

// function chooseOptExpenses() {
//     for (let i = 0; i < 3; i++) {
//         let a = prompt("Статья необязательных расходов?", "");
//         appData.optionalExpenses[i+1] = a;
//         }
// }

// chooseOptExpenses();
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
// console.log(appData.budget);
// //console.log(appData.expenses[0], appData.expenses[1]); //Счет в массиве начинается с нуля!
// console.log('Бюджет на день составляет ' + money / 30);
// console.log(appData.expenses);
// console.log(appData);