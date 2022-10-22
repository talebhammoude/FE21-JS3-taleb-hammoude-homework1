import './App.css';
import Deposit from './Components/Deposit';
import Info from './Components/Info';
import Spendlist from './Components/Spendlist';
import Withdraw from './Components/Withdraw';




function App() {


  const handleDepositFunc = (e) => {
    e.preventDefault();
    const depositInputValue = document.querySelector(".depo").value;

    localStorage.setItem("deposit", parseInt(localStorage.getItem("deposit"))+parseInt(depositInputValue));

    setTimeout(()=>{
      window.location.reload();
    }, 300);
}




  const handleWithdrawFunc = (e) => {
    e.preventDefault();
    const expenseNameInputValue = document.querySelector(".exp").value;
    const expenseAmountInputValue = document.querySelector(".exp-amount").value;

    localStorage.setItem("withdraw", parseInt(localStorage.getItem("withdraw"))+parseInt(expenseAmountInputValue));
    localStorage.setItem(expenseNameInputValue, expenseAmountInputValue);

    setTimeout(()=>{
      window.location.reload();
    }, 300);

  }




  return (
    <div className="App">
      <header className="App-header">

        <Deposit handleDeposit = {handleDepositFunc}/>
        <Withdraw handleWithdraw = {handleWithdrawFunc}/>
        <Info getBudget = {localStorage.getItem("deposit")}   getWithdraw = {localStorage.getItem("withdraw")}/>
        <Spendlist/>

      </header>
    </div>
  );
}

export default App;
