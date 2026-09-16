const users = [
    {name: "Денис", age: 34},
    {name: "Дарья", age: 31},
    {name: "Антон", age: 17},
    {name: "Олег", age: 18},
    {name: "Ирина", age: 15},
    {name: "Сергей", age: 27},
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);

const names = adults.map(user => user.name);
console.log(names);