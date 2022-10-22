import React from 'react';
import '../Spendlist/styles.css'


class Spendlist extends React.Component {

    
    render() {
      return (
        <div>
            <table>
                <tr>
                    <th className='th'>Name</th>
                    <th className='th'>Amount</th>
                </tr>
                <tr>
                    <td>Milk</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
      )
    }
  }
  
  export default Spendlist;