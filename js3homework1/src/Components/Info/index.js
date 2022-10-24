import React from 'react';



class Info extends React.Component {

    
    render() {
      return (
        <div>

          <div style={{marginTop:40}}>
            <label>Budget: </label>
            <span className='budget'>{this.props.getBudget}</span>
          </div>
            
          <div>
            <label>Withdrawn: </label>
            <span className='withdrawn'>{this.props.getWithdrawn}</span>
          </div>

          <div>
            <label>Balance: </label>
            <span className='balance'>{this.props.getBalance}</span>
          </div>
            
            
        </div>
      );
    }
  }
  
  export default Info;