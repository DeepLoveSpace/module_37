const numbers = [12, 3, 7, 4, 9, 15, 1, 8, 2, 6, 19, 3, 1, 12, 3, 8, 6];

function uniqueSorted(numbers) {
    const uniqueNumbers = [...new Set(numbers)];
    const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
    return sortedNumbers;
}

const result = uniqueSorted(numbers);

console.log(result);