import React from 'react';



class Deposit extends React.Component {




    render() {
      return (
        <div>
            <form>
                <label>
                    Amount to deposit:
                    <input className='depo' type="number" />
                </label>
                <button onClick={this.props.handleDeposit}>Deposit</button> 
            </form>
        </div>
      );
    }
  }
  
  export default Deposit;