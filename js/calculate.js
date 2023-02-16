
function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputFIledValueString = inputFiled.value;
    const inputValue = parseFloat(inputFIledValueString);
    return inputValue
}

function setElementNewAmount(elementId, value) {
    const element = document.getElementById(elementId);
    const newElementValue = element.innerText;
    element.innerText = value;
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
})