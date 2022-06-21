const firstNumber = Number(window.prompt('Enter First Number: '))
const secondNumber = Number(window.prompt('Enter Second Number: '))
const operator = window.prompt('Enter Operator from this list (+ , - , * , / ): ')

if (operator == "+"){
    sum = firstNumber + secondNumber
    alert('Sum is ' + sum)

}
else if (operator == "-"){
    difference = firstNumber - secondNumber
    alert('Difference is ' + difference)
}
else if (operator == "*"){
    product =  firstNumber * secondNumber
    alert('Product is ' + product)
}
else if (operator == "/"){
    quotient = firstNumber / secondNumber
    alert('Quotient is ' + quotient)
}
else{
    alert('Do the right thing, Try again')
}

