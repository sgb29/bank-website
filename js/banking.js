// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    //update deposit total:
    const depositTotal = document.getElementById('deposit-total');

    // adding new amount to previous amount 
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    //update account balance:
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const NewBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = NewBalanceTotal;

    // clear the deposit input field 
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');

    // adding new amount to previous amount 
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update account balance:
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousbalanceText);
    const NewBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = NewBalanceTotal;

    // clear the withdraw input field 
    withdrawInput.value = '';




});