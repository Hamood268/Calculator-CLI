const readline = require("readline");

function calculate(operation, num1, num2) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

console.log('Welcome to Calculator! Enter numbers and operator separated by spaces (e.g., 5 + 3)');
console.log('Type "exit" to quit\n');

rl.on('line', (input) => {
    if(input.toLowerCase() === 'exit') {
        rl.close();
        return;
    }

    const [num1, operator, num2] = input.split(' ');
    const result = calculate(Number(num1), operator, Number(num2));
    console.log(`Result: ${result}\n`);
});