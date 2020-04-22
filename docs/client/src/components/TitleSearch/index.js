import React from 'react';

import styles from '../../styles.module.css'

class TitleSearch extends React.Component {

    titleSearchFormSubmit = () => {

        // Get the input's value
        let title = document.querySelector('#titleSearch').value;

        // Test if title is an empty string
        // If so, change it to a value
        if(title.length === 0) {
            title = "0";
        }

        // Look for movies based on the title
        fetch("http://localhost:80/movies/title/" + title)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2 className={styles.searchText}>Search for Movies by Title:</h2>
                <input className={styles.inputBox}
                    type="text" 
                    id="titleSearch" 
                    placeholder ="Pulp Fiction"
                    onKeyUp={this.titleSearchFormSubmit} 
                />
            </div>
        );
    }

}

export default TitleSearch;

