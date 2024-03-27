let inputDigit = document.querySelector('.input-digit');
let calOprBtns = document.querySelectorAll('.cal-opr-btn');
let CalZeroBtn = document.querySelector('.cal-zero-btn');
const calDigits = document.querySelectorAll('.cal-btn');
let allClear = document.querySelector('#ac');
let deleteDig = document.querySelector('#del');
let equal = document.querySelector('#equal');



const enterDigit = () => {
    for(const calDigit of calDigits) {
        calDigit.addEventListener('click', () => {
             inputDigit.value += calDigit.innerText;
           

        })

    }
}
enterDigit();

const enterOperator = () => {
    for(const oprBtn of calOprBtns) {
        oprBtn.addEventListener('click', () => {
            inputDigit.value += oprBtn.innerText;
        })
    }
}

enterOperator();

const zeroDigit = () => {
    CalZeroBtn.addEventListener('click', () => {
        inputDigit.value += CalZeroBtn.innerText;
    })
}

zeroDigit();

const AC = () => {
    allClear.addEventListener('click', () => {
        inputDigit.value = "";
    })
}
AC();

const calculate = () => {
    equal.addEventListener('click', () => {
        
        try{
            inputDigit.value = eval(inputDigit.value); // eval functino calculate all the math operations
        }
        catch(error) {
            inputDigit.value = 'Error';
        }
        
    })
    
}
calculate();


