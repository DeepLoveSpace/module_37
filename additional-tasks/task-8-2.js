function removeVowels(str) {
    const vowels = "аеёиоуыэюяaeiouy";
    
    return str
        .split("")
        .filter(char => !vowels.includes(char.toLowerCase()))
        .join("");
}

console.log(removeVowels("Текст без гласных"));
