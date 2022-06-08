class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear (){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }
    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
            computation = prev + current
            break
            case '-':
            computation = prev - current
            break
            case '*':
             computation = prev * current
             break
             case '/':
             computation = prev / current
            break
            default:
                return 

        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        if (this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.previousOperand} ${this.operation}`
        }
    }
}





const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const display = document.querySelector('.screen');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operand]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');




const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear ()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete ()
    calculator.updateDisplay()
})

//time updater
const updateTime = () => {
     const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    if(currentHour > 12) {
        currentHour -= 12;
    }
 
    hour.textContent = currentHour.toString();
    minute.textContent = currentMinute.toString().padStart(2, '0');

}
setInterval(updateTime, 1000);
updateTime();

console.log("matthew");