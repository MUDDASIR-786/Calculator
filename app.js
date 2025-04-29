const buttons = document.querySelectorAll('.b');
const display = document.querySelector('.p1');

let expression = '';

// Automatically focus the input field on load
window.addEventListener('DOMContentLoaded', () => {
    display.focus();
});

// Optional: Auto-select entire input text when it's clicked
display.addEventListener('click', () => {
    display.select();
});

function updateDisplay(value) {
    display.value = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.querySelector('div').innerText;

        if (value === 'AC') {
            expression = '';
            updateDisplay('');
        } else if (value === '=') {
            try {
                const result = eval(expression);
                updateDisplay(result);
                expression = result.toString(); // allow chaining like 2 + 2 = 4, + 5 = 9
            } catch (e) {
                updateDisplay('Error');
                expression = '';
            }
        } else if (value === 'Bac') {
            // optional: backspace / remove last character
            expression = expression.slice(0, -1);
            updateDisplay(expression);
        } else {
            expression += value;
            updateDisplay(expression);
        }
    });
});
