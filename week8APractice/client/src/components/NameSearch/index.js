import React from 'react';

class NameSearch extends React.Component {

    movieSearch = () => {

        let inputElement = document.querySelector("#movieInput");
    
        let inputValue = inputElement.value;
    
        if(inputValue.length === 0) {
          inputValue = "@";
        }
    
        fetch("http://localhost:80/movies/title/" + inputValue)
        .then((response) => {return response.json(); })
        .then((processed) => {
          this.props.callback(processed);
        });
    
      }
    
      render() {
    
        return (
          <div>
            <input type="text" id="movieInput" onKeyUp={this.movieSearch} />
          </div>
        );
    
      }
    

}

export default NameSearch;