import React from 'react';



class Info extends React.Component {

    
    render() {
      return (
        <div>
            <h5>Budget: {this.props.getBudget}</h5>
            <h5>Withdrawn:  {this.props.getwithdraw}</h5>
            <h5>Balance: {this.props.getBudget}</h5>
        </div>
      );
    }
  }
  
  export default Info;