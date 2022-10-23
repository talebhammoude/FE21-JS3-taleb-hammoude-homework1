import React from 'react';
import '../Spendlist/styles.css'


class Spendlist extends React.Component {



    
    render() {

      const expensesArr = this.props.theList;
     
      const listItems = expensesArr.map((exp) => {
        return(
          <tr>
            <td>{exp.name}</td>
            <td>{exp.amount}</td>
        </tr>
        )
        
      })




      return (
        <div>
            <table>
                <tr>
                    <th className='th'>Name</th>
                    <th className='th'>Amount</th>
                </tr>
                {listItems}
            </table>
        </div>
      )
    }
  }
  
  export default Spendlist;
