// Задание 10.1

let input = prompt("Введите любое число");
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
}