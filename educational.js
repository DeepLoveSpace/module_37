// Модуль 36
// Задание 10.1

/* let input = prompt("Введите любое число");
let number =+input;

if (isNaN(number)) {
    alert("Ошибка. Вы ввели не число")
} else {
    let square = number * number;
    let cube = number * number * number;

    alert(
        `Введенное число: ${number}\n` +
        `Квадрат числа: ${square}\n` +
        `Куб числа: ${cube}`
    );
} */


// Задание 10.2

/* let input = prompt("Введите промокод");
let upperInput = input.toUpperCase();

if (upperInput === "СКИДКА") {
    alert("Промокод применен!");
} else {
    alert(`Промокод ${input} не работает!`);
} */


// Задание 10.3

/* let userName = prompt("Введите ваше имя:");
let inputBirth = prompt("Введите ваш год рождения");

let yearBirth = +inputBirth;

if (isNaN(yearBirth)) {
    alert("Год должен быть числом!")
} else {
    let userAge = 2026 - yearBirth;
    alert(`${userName}:${userAge}`)   
} */


// Задание 10.4

/* let userName = prompt("Введите ваше имя:");
let inputBirth = prompt("Введите ваш год рождения");

let yearBirth =+inputBirth;

if (userName.trim() === "" || isNaN(yearBirth)) {
    alert("Год не число или пустое имя.");
} else {
    let userAge = 2026 - yearBirth;

    let lastDigit = userAge % 10;
    let lastTwoDigits = userAge % 100;

    let word;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        word = "лет";
    } else if (lastDigit === 1) {
        word = "год";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        word = "года";
    } else {
        word = "лет";
    }
    alert(`${userName}:${userAge} ${word}`)
} */


// Задание 10.5

/* let inputAge = prompt("Введите ваш возраст:");
if (inputAge === null || inputAge.trim() === "") {
    alert("Вы не чего не ввели!");
} else {
    let age =+inputAge;
    if(isNaN(age) || age <= 0) {
        alert("Вы ввели не число или отрицательное число!");
    } else {
        let maxCredit;

        if (age < 18) {
            maxCredit = 0;
        } else if (age >= 18 && age <= 21) {
            maxCredit = 50000;
        } else if (age >= 22 && age <= 35) {
            maxCredit = 400000;
        } else if (age >= 36 && age <= 65) {
            maxCredit = 1000000;
        } else {
            maxCredit = 0;
        }

        if (maxCredit === 0) {
            if (age < 18) {
                alert("Кредит выдают после исполнения 18 лет");
            } else {
                alert("После 65 лет крит не одобряют");
            }
        } else {
            let inputAmount = prompt(`Мы можем вам выдать максимум ${maxCredit}.\nВведите сумму кратную 1000`);

            if (inputAmount === null || inputAmount.trim() === "") {
                alert("Вы не ввели сумму");
            } else {
                let requestedAmount = +inputAmount;

                if (isNaN(requestedAmount) || !Number.isInteger(requestedAmount)) {
                    alert("Видимо вам кредит не нужен. Всего доброго!")
                } else if (requestedAmount <= 0) {
                    alert("Видимо вам кредит не нужен. Всего доброго!");
                } else if (requestedAmount > maxCredit) {
                    alert(`Запрошенная сумма (${requestedAmount}.) превышает максимально допустимую ${maxCredit}. Видимо вам кредит не нужен. Всего доброго!`);
                } else if (requestedAmount % 1000 !== 0) {
                    alert(`Вы ввели значение не кратное 1000. Мы можем выдать: ${Math.floor(requestedAmount/1000)*1000}. или ${Math.ceil(requestedAmount/1000)*1000}.`);
                    alert("Видимо вам кредит не нужен. Всего доброго!")
                } else {
                    alert(`Поздравляем! Кредит на сумму ${requestedAmount}. одобрен!`);
                }
            }
        }
    }
} */


// Модуль 37
// Задание 6.1

/* const words = ["Довод", "Сантимент"];
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    const wordWithoutSpaces = word.replace(/\s/g, '');
    const wordLower = wordWithoutSpaces.toLowerCase();
    
    const reversed = wordLower.split('').reverse().join('');
    
    if (wordLower === reversed) {
        console.log(`Слово ${word} является палиндромом`);
    } else {
        console.log(`Слово ${word} не является палиндромом`);
    }
} */


// Задание 6.2

/* const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueSet = new Set(arr);
const uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr); */


// Задание 6.3

/* const userInput = prompt('Введите любое число:');
const number = Number(userInput);
const resultArray = [];

for (let i = 0; i <= number; i++) {
    resultArray.push(i);
}

console.log(resultArray); */


// Задание 6.4

/* const symbols = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];

for (let row = 0; row < 3; row++) {
    let line = '';
    
    for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        line += symbols[index];
        
        if (col < 2) {
            line += ' ';
        }
    }
    
    console.log(line);
} */


// Задание 6.5    

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (let key in obj) {
    const value = obj[key];
    
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            arrValues.push(value[i]);
        }
    } else {
        arrValues.push(value);
    }
}

console.log(arrValues);


















/*     const fruit = ["яблоко", "малина", "груша"];
    if (fruit.indexOf("вишня") >= 0) {
        console.log(fruit.indexOf('вишня'));
    } else {
        console.log("Такого элемента нет");
    } */

/*     const multiArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(multiArray[1][2])
    

        const user = {
        name: 'Luna',
        age: 40,
        hairColor: 'black',
    }

    for (let key in user) {
        // ключи
        console.log(key); // name, age, hairColor

        // значение ключей
        console.log(user[key]); // Luna, 40, black
    } */


/* const obj = {
        first: "First",
        second: "Second"
    }

    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let result = '';

    for (let i = 0; i < keys.length; i += 1) {
        if (i < keys.length - 1) {
            result += `${keys[i]} - ${values[i]}, `;
        } else {
            result += `${keys[i]} - ${values[i]}`;
        }
    }

    console.log(result) */

