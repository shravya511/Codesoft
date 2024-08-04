let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
    currentInput += value;
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
    currentInput = display.textContent;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
        appendToDisplay(operator);
    }
}
