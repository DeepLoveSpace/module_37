// Задание 10.2

let input = prompt("Введите промокод");
let upperInput = input.toUpperCase();

if (upperInput === "СКИДКА") {
    alert("Промокод применен!");
} else {
    alert(`Промокод ${input} не работает!`);
}