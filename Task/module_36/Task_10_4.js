// Задание 10.4

let userName = prompt("Введите ваше имя:");
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
}