// function for getting input value in number 
function getInputValue(inputId) {
    const enteredInput = document.getElementById(inputId);
    const inputedText = enteredInput.value;
    const inputValue = parseFloat(inputedText);
    // cleaning input field 
    enteredInput.value = '';
    return inputValue;
};

function updateTotal(field, amount) {
    const previousAmount = document.getElementById(field);
    const previousTotalText = previousAmount.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + amount;
    previousAmount.innerText = newTotal;

}
function netBalance(fieldId, amount, add) {
    const existedBalance = document.getElementById(fieldId);
    const existedBalanceText = existedBalance.innerText;
    const balance = parseFloat(existedBalanceText);
    if (add == true) {
        const newNetBalance = balance + amount;
        existedBalance.innerText = newNetBalance;
    }
    else {
        if (balance > amount) {
            const newNetBalance = balance - amount;
            existedBalance.innerText = newNetBalance;
        }
        else {
            document.getElementById('warning').style.display = 'block';
        }
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const inputAmount = getInputValue('deposit-input');
    updateTotal('total-deposit', inputAmount);
    netBalance('total-balance', inputAmount, true);
});

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const WithdrawAmount = getInputValue('withdraw-input');
    updateTotal('total-withdraw', WithdrawAmount);
    netBalance('total-balance', WithdrawAmount, false);

});