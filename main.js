const binary = document.getElementById('binary');
const decimal = document.getElementById('decimal');
const submit = document.getElementById('confirm');


function decimalToBinary(param) {
    const deciToB = decimal.value;
    binary.value = Number(deciToB).toString(2).toUpperCase();

    if (deciToB === '') {
        alert('Please enter a decimal number :)')
    } else if (deciToB < 0) {
        alert('Enter positive number')
    }
}

submit.addEventListener('click', decimalToBinary)

