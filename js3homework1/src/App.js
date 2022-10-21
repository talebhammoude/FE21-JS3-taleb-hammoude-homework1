import './App.css';
import Deposit from './Components/Deposit';
import Info from './Components/Info';
import Spendlist from './Components/Spendlist';
import Withdraw from './Components/Withdraw';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Deposit/>
        <Withdraw/>
        <Info/>
        <Spendlist/>
      </header>
    </div>
  );
}

export default App;
