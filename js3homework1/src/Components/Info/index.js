import React from 'react';



class Info extends React.Component {

    
    render() {
      return (
        <div>
            <h5 className='budget'>Budget: {this.props.getBudget}</h5>
            <h5 className='withdrawn'>Withdrawn:  {this.props.getWithdrawn}</h5>
            <h5 className='balance'  value={this.props.getBalance}>Balance: {this.props.getBalance}</h5>
        </div>
      );
    }
  }
  
  export default Info;