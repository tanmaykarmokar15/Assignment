const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const selectOperation = document.getElementById("operation");
const displayResult = document.getElementById("result");

function calculate(){
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    const operation = selectOperation.value;

    if(isNaN(number1) || isNaN(number2)){
        displayResult.textContent = "please enter the numbers";
        return;
    }
    let result;
    switch (operation) {
        case 'add' :
            result = number1 + number2;
            break;
        case 'subtract' :
            result = number1 - number2;
            break;
        case 'multiply' :
            result = number1 * number2;
            break;
        case 'divide' :
            if(number2 === 0) {
                displayResult.textContent ="Cannot divide by zero";
                return;
            }
            result = number1 / number2;
            break;
            default : 
            displayResult.textContent = "Invalid operation selected";
    }
    displayResult.textContent =  `Result: ${result}`;
}