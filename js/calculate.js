
function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputFIledValueString = inputFiled.value;
    const inputValue = parseFloat(inputFIledValueString);
    return inputValue
}

function setElementNewAmount(elementId, value) {
    document.getElementById(elementId).innerText = value;
}


function getElementValue(id) {
    const element = document.getElementById(id).innerText;
    const elementValue = parseFloat(element);
    return elementValue
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const foodAmountValue = getInputValue('food-input-filed');
    const rentAmountValue = getInputValue('rent-input-filed');
    const clothesAmountValue = getInputValue('clothes-input-filed');

    if (isNaN(foodAmountValue) || isNaN(rentAmountValue) || isNaN(clothesAmountValue)) {
        return alert('Please provide your number')
    }

    let totalExpenses = foodAmountValue + rentAmountValue + clothesAmountValue;

    const incomeAmountValue = getInputValue('income-input-filed');
    let newBalance = incomeAmountValue - totalExpenses;

    if (incomeAmountValue < totalExpenses) {
        return alert('tomar eto taka nai')
    };

    setElementNewAmount('totalExpenses', totalExpenses)
    setElementNewAmount('total-balance', newBalance)
});


document.getElementById('save-button').addEventListener('click', function () {

    const incomeAmount = getInputValue('income-input-filed');
    const presentAmount = getInputValue('present-input-filed');

    if (isNaN(incomeAmount) || isNaN(presentAmount) || incomeAmount < presentAmount) {
        return alert('please provide your number')
    }
    let savingAmount = incomeAmount * presentAmount;
    let saveAmountValue = savingAmount / 100;

    setElementNewAmount('savingAmount', saveAmountValue);

    const balance = getElementValue('total-balance');

    let remainingAmount = balance - saveAmountValue;
    setElementNewAmount('remainingAmount', remainingAmount);
})