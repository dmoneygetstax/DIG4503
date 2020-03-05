import React from 'react';
import NameSearch from './components/NameSearch';
import TableOne from './components/TableOne';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      "table": []
    };

  }

  exampleFunction = (results) => {

    this.setState({
      "table": results
    });

  }

  render() {
    return (
      <div>
        <h2>Search:</h2>
      <NameSearch callback={this.exampleFunction}/>
      <TableOne table={this.state.table} />
      </div>
    )
  }

}

export default App;
