function calculate(a, b, operator) {
    return operator(a, b);
}

function add(a, b) {
    return a + b
};
function sub(a, b) {
    return a - b
};
function mult(a, b) {
    return a * b
};
function div(a, b) {
    return a / b
};

const context = {
    a: 8,
    b: 7,
    operator: add
};

const result = calculate.apply(context, [2, 3, add]);

console.log(result);