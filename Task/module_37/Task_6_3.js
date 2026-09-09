// Задание 6.3

const userInput = prompt('Введите любое число:');
const number = Number(userInput);
const resultArray = [];

for (let i = 0; i <= number; i++) {
    resultArray.push(i);
}

console.log(resultArray);