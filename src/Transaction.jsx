import { useState } from 'react';

//component accepts balance state and setBalance state function to update the balance
function Transaction({balance, setBalance}) {

  //define local state elements
  const [depositInputValue, setDepositInputValue] = useState("");
  const [withdrawalInputValue,  setWithdrawalInputValue] = useState("");

  //functions to handle deposits and withdrawals
  const handleDepositChange = (event) => {setDepositInputValue(event.target.value);}
  const handleWithdrawalChange = (event) => {setWithdrawalInputValue(event.target.value);}

  //functions to update the balance
  const addDeposit = () => {setBalance(balance + Number(depositInputValue)); setDepositInputValue("");}
  const deductWithdraw = () => {
    //calculate new balance
    let newBalance = balance - Number(withdrawalInputValue);
    setBalance(newBalance);
    //alert user if withdrawal means they have a negative balance
    if (newBalance < 0) {
      alert("You have a negative balance!");
    }
    //clear the input field
    setWithdrawalInputValue("");
  }
  const addInterest = () => {setBalance(balance * 1.05)}
  const chargeFee = () => {setBalance(balance - 25)}

  return (
    <div>
      {/* section to deal with deposits */}
      <div>
        <label>Enter deposit amount: </label>
        <input value = {depositInputValue} id = "deposit"  onChange = {handleDepositChange} />
        <button id = "depositButton" onClick = {addDeposit}> deposit </button>
      </div>

      {/* section to deal with withdrawals */}
      <div>
        <label> Enter withdraw amount: </label>
        <input value = {withdrawalInputValue} id = "withdraw" onChange = {handleWithdrawalChange} />
        <button  id = "withdrawButton" onClick = {deductWithdraw}> withdraw </button>
      </div>

      {/* add interest section */}
      <div>
        <button id = "addInterest" onClick = {addInterest}> Add Interest </button>
      </div>

      {/* implement fees section */}
      <div>
        <button id = "chargeFee" onClick = {chargeFee}> Charge bank fees </button>
      </div>
    </div>
  )
}

export default Transaction
