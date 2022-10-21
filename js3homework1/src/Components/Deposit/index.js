import React from 'react';



class Deposit extends React.Component {


    render() {
      return (
        <div>
            <form>
                <label>
                    Amount to deposit:
                    <input type="number" name="deposit" />
                </label>
                <input type="submit" value="Deposit" />
            </form>
        </div>
      );
    }
  }
  
  export default Deposit;