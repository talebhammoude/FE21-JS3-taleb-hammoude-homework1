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
                    <input type="submit" value="Withdraw" />
                </form>
            </div>
          );

    }
  }
  
  export default Withdraw;