import './App.css';
import Deposit from './Components/Deposit';
import Info from './Components/Info';
import Spendlist from './Components/Spendlist';
import Withdraw from './Components/Withdraw';





function App() {


  if(localStorage.length === 0){
    localStorage.setItem("deposit", 0);
    localStorage.setItem("withdrawn", 0);
    localStorage.setItem("balance", 0);
  }



  const handleDepositFunc = (e) => {
    e.preventDefault();
    const depositInputValue = document.querySelector(".depo").value;

    localStorage.setItem("deposit", parseInt(localStorage.getItem("deposit"))+parseInt(depositInputValue));
    localStorage.setItem("balance", localStorage.getItem("deposit"));

    setTimeout(()=>{
      window.location.reload();
    }, 300);
}




  const handleWithdrawFunc = (e) => {
    e.preventDefault();
    const expenseNameInputValue = document.querySelector(".exp").value;
    const expenseAmountInputValue = document.querySelector(".exp-amount").value;
    

    localStorage.setItem("withdrawn", parseInt(localStorage.getItem("withdrawn"))+parseInt(expenseAmountInputValue));
    localStorage.setItem(expenseNameInputValue, expenseAmountInputValue);

    localStorage.setItem("balance", parseInt(localStorage.getItem("balance"))- expenseAmountInputValue );


    setTimeout(()=>{
      window.location.reload();
    }, 300);

  }




  return (
    <div className="App">
      <header className="App-header">

        <Deposit handleDeposit = {handleDepositFunc}/>
        <Withdraw handleWithdraw = {handleWithdrawFunc}/>
        <Info getBudget = {localStorage.getItem("deposit")}   getWithdrawn = {localStorage.getItem("withdrawn")}    getBalance = {localStorage.getItem("balance")}/>
        <Spendlist/>

      </header>
    </div>
  );
}

export default App;
