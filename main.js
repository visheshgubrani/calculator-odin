function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let num1 = 0;
let num2 = 0;
let operator = '';


function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return minus(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return 'Invalid Operator'
    }
}
 

let displayValue = '';

function display(digits) {
    displayValue += parseInt(digits);
    
    document.querySelector('.display').textContent = displayValue;
}

document.querySelector('.one').addEventListener('click', function(){
    display("1")
})
document.querySelector('.two').addEventListener('click', function(){
    display("2")
})
document.querySelector('.three').addEventListener('click', function(){
    display("3")
})

document.querySelector('.four').addEventListener('click', function(){
    display("4")
})

document.querySelector('.five').addEventListener('click', function(){
    display("5")
})

document.querySelector('.six').addEventListener('click', function(){
    display("6")
})
document.querySelector('.seven').addEventListener('click', function(){
    display("7")
})
document.querySelector('.eight').addEventListener('click', function(){
    display("8")
})
document.querySelector('.nine').addEventListener('click', function(){
    display("9")
})
document.querySelector('.zero').addEventListener('click', function(){
    display("0")
})


document.querySelector('.plus').addEventListener('click', function() {
    num1 = parseInt(displayValue)
    operator = '+';
    displayValue = "";

})

document.querySelector('.minus').addEventListener('click', function() {
    num1 = parseInt(displayValue)
    operator = '-';
    displayValue = "";

})

document.querySelector('.multiply').addEventListener('click', function() {
    num1 = parseInt(displayValue)
    operator = '*';
    displayValue = "";

})

document.querySelector('.divide').addEventListener('click', function() {
    num1 = parseInt(displayValue)
    operator = '/';
    displayValue = "";

})

document.querySelector('.equal').addEventListener('click', function() {
    num2 = parseInt(displayValue)
    const result = operate(operator, num1, num2);
    displayValue = result;
    document.querySelector('.display').textContent = parseInt(displayValue);


})


document.querySelector('.ac').addEventListener('click', function(){ 
    num1 = 0;
    num2 = 0;
    displayValue = parseInt("0")
    document.querySelector('.display').textContent = displayValue;

    
})