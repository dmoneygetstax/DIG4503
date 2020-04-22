import React from 'react';
import TitleSearch from '../TitleSearch';
import styles from '../../styles.module.css';

class Title extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        "table": []
      };
  
    }
  
    // Update the internal state.table
    // (This is called from YearSearch.)
    setResultsTable = (processed) => {
      this.setState({"table": processed});
    }
  
    // Render the results table
    createResultsTable() {
  
      return (
        <table className={styles.table}>
          <tbody>
          {
            this.state.table.map((entry, index) => {
               return( 
                <tr key={index}>
                  <td>{entry.title}</td>
                  <td>{entry.year}</td>
                </tr>
               );
            })
          }
          </tbody>
        </table>
      );
  
    }
  
    render() {
      return (
        <div>
          <TitleSearch callback={this.setResultsTable} />
          {this.createResultsTable()}
        </div>
      );
    }
  
    
  }
  
  
  export default Title;