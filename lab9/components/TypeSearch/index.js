class TypeSearch extends React.Component {

    readType(event) {

        // Stop (prevent) the 'default' form action
        event.preventDefault();

        // Find the element with 'type="type"'
        let element = document.querySelector("#type");

        fetch("/api/pokemon/type/" + element.value)
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
            <div>
                 <h2>Type</h2>
                 <form onSubmit={this.readType}>
                    <input id="type" type="text" />
                    <button>I choose you!</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;