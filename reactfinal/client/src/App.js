import React from 'react';
import YearSearch from './components/YearSearch';
import TitleSearch from './components/TitleSearch';
import styles from './styles.module.css';

class App extends React.Component {

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
        <YearSearch callback={this.setResultsTable} />
        <TitleSearch callback={this.setResultsTable} />
        <img className={styles.img} src="home_alone.png" alt="Home Alone" />
        {this.createResultsTable()}
      </div>
    );
  }

  
}


export default App;