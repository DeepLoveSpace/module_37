// Задание 10.3

let userName = prompt("Введите ваше имя:");
let inputBirth = prompt("Введите ваш год рождения");

let yearBirth = +inputBirth;

if (isNaN(yearBirth)) {
    alert("Год должен быть числом!")
} else {
    let userAge = 2026 - yearBirth;
    alert(`${userName}:${userAge}`)   
}