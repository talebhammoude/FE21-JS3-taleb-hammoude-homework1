import React from 'react';



class Withdraw extends React.Component {


    render() {

        return (
            <div>
                <form>
                    <label>
                        Expense name:
                        <input type="text" name="expense" />
                    </label>
                    <label>
                        Amount to withdraw:
                        <input type="number" name="withdraw" />
                    </label>  
                    <button>Withdraw</button> 
                </form>
            </div>
          );

    }
  }
  
  export default Withdraw;