document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementText('withdraw-total', newWithdrawTotal);
   const previousBalanceTotal = getTextElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
   setElementText('balance-total', newBalanceTotal);
  
})