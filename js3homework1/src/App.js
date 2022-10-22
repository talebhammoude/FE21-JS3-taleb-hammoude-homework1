import './App.css';
import Deposit from './Components/Deposit';
import Info from './Components/Info';
import Spendlist from './Components/Spendlist';
import Withdraw from './Components/Withdraw';

function App() {


  const handleDepositFunc = (e) => {
    e.preventDefault();
    console.log("Talangen");
    setTimeout(()=>{
      window.location.reload();
    }, 500);
}


  return (
    <div className="App">
      <header className="App-header">

        <Deposit handleDeposit = {handleDepositFunc}/>
        <Withdraw/>
        <Info/>
        <Spendlist/>

      </header>
    </div>
  );
}

export default App;
