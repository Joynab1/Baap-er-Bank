document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    const previousBalanceTotal = getTextElementValueById('balance-total');

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You Do not have suficient balance');
       return;
    }
    else {
        setElementText('withdraw-total', newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    setElementText('balance-total', newBalanceTotal);
    }
    

})