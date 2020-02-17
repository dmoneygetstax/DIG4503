const Express = require("express");
const App = Express();
const port = 80;
const pokemons = require('json-pokemon');
const chalk = require('chalk');

App.use("/", Express.static("public"));

App.get("/api/pokemons/id/:id", (req, res) => {
    
    let result = {"error": "Could not find!"};

    pokemons.forEach((value) => {
        if(value.id == req.params.id) {
            result = value;
        }
    });

    if(result.error) {
        //In red
        console.log(chalk.red(req.path))
    } else {
        //In green
        console.log(chalk.green(req.path))
    }

    res.send(result);
    
});

App.get("/api/pokemons/name/:name", (req, res) => {

    let result = {"error": "Could not find!"};

    pokemons.forEach((value) => {
        if(value.name == req.params.name) {
            result = value;
        }
    });

    if(result.error) {
        //In red
        console.log(chalk.red(req.path))
    } else {
        //In green
        console.log(chalk.green(req.path))
    }

    res.send(result);
    
});

App.listen(port, () => {
    console.log("Server running!");
});