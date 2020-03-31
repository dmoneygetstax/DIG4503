import styles from '../StyleComponent/StyleComponent.module.css'

class NameSearch extends React.Component {

    readName(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'id="name"'
        let element = document.querySelector("#name");

        fetch("/api/pokemon/name/" + element.value)
        .then((res) => {
            // Parse the string into a JavaScript object and return it
            return res.json();
        })
        .then((processed) => {
            
            // Find the element with 'id="reportingArea"'
            let reporting = document.querySelector("#reportingArea");

            // Does the 'processed' object have a property called 'error'?
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }

        });

        element.value = "";
    }

    render() {
        return(
            <div className={styles.search}>
                 <h2 className={styles.linkText}>Enter a Name</h2>
                 <form onSubmit={this.readName}>
                    <input id="name" type="text" />
                    <button className={styles.button}>I choose you!</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;