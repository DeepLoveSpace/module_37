// Задание 6.4

const symbols = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];

for (let row = 0; row < 3; row++) {
    let line = '';
    
    for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        line += symbols[index];
        
        if (col < 2) {
            line += ' ';
        }
    }
    
    console.log(line);
}