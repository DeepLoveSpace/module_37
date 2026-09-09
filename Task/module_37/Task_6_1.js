// Задание 6.1

const words = ["Довод", "Сантимент"];
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    const wordWithoutSpaces = word.replace(/\s/g, '');
    const wordLower = wordWithoutSpaces.toLowerCase();
    
    const reversed = wordLower.split('').reverse().join('');
    
    if (wordLower === reversed) {
        console.log(`Слово ${word} является палиндромом`);
    } else {
        console.log(`Слово ${word} не является палиндромом`);
    }
}