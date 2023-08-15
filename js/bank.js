// Deposit Amount
document.getElementById('btn-deposit').addEventListener('click', function () {
    const userDeposit = document.getElementById('user-deposit');
    const newUserDeposit = userDeposit.value;
    if(isNaN(parseFloat(newUserDeposit))){
        alert("Please provide a valid number");
        return;
    }
    const previousDepositAmount = document.getElementById('deposit-amount');
    const currentDepositTotal = parseFloat(newUserDeposit) + parseFloat(previousDepositAmount.innerText);
    previousDepositAmount.innerText = currentDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const finalBalance = parseFloat(newUserDeposit) + parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = finalBalance;

    userDeposit.value = '';

})

// Withdraw Amount

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const userWithdraw = document.getElementById('user-withdraw');
    const withdrawAmount = document.getElementById('withdraw-amount');
    const userWithdrawValue = userWithdraw.value;
    if(isNaN(parseFloat(userWithdrawValue))){
        alert("Please provide a valid number");
        return;
    }
    const withdrawAmountText = withdrawAmount.innerText;
    const finalWithdraw = parseFloat(userWithdrawValue) + parseFloat(withdrawAmountText);
    withdrawAmount.innerText = finalWithdraw;

    const balanceTotal = document.getElementById('balance-total');
    const finalBalance = parseFloat(balanceTotal.innerText) - parseFloat(userWithdrawValue);
    if(finalBalance < 0) {
        alert("You can't withdraw amount that existed to your balance")
        withdrawAmount.innerText = "00";
    }
    else{
        balanceTotal.innerText = finalBalance;
    }

    userWithdraw.value ='';
})