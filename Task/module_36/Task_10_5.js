// Задание 10.5

let inputAge = prompt("Введите ваш возраст:");
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
}