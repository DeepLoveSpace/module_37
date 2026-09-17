function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "Денис",
    age: 34
};

printInfo.call(person);