import React from 'react';



class Withdraw extends React.Component {


    render() {

        return (
            <div>
                <form>
                    <label>
                        Expense name:
                        <input className='exp' type="text"  />
                    </label>
                    <label>
                        Amount to withdraw:
                        <input className='exp-amount' type="number"  />
                    </label>  
                    <button onClick={this.props.handleWithdraw}>Withdraw</button> 
                </form>
            </div>
          );

    }
  }
  
  export default Withdraw;