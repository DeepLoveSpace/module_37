function findMinMax(numbers) {
    return {
        max: Math.max.apply(null, numbers),
        min: Math.min.apply(null, numbers)
    };
}

const numbers = [99, 23, 4, 545, 367, 76, 44, 2, 56, 89];
const result = findMinMax(numbers);

console.log("Максимальное число:", result.max);
console.log("Минимальное число:", result.min);