import './App.css';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Deposit/>
        <Withdraw/>
      </header>
    </div>
  );
}

export default App;
