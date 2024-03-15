const displayBox = document.getElementById('display');

function displayNum(num){
    displayBox.value += num;
}

function opr(operator){
    displayBox.value += operator;
}

function percentage(){
    const number = displayBox.value / 100;
    displayBox.value = number;
}

function clearDisplay(){
    displayBox.value='';
}

function del(){
    const deleteLast = displayBox.value;
    displayBox.value = deleteLast.slice(0,-1);
}

function calculate(){
    const cal = displayBox.value;
    const calculation = eval(cal);
    displayBox.value = calculation;
}