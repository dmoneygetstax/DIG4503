const Express = require("express");
const App = Express();
const port = 80;

const Person = require("./Person.js");
const faker = require('faker');

let people = [];

for(let i = 0; i < 99; i++)
{
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color));
}

App.get("/person/name/:name", (req, res) => {
    people.forEach((value) => {
        if(value.name == req.params.name) {
            res.send(value);
        }
    });

    res.send("Hmmmm");

});

App.get("/person/color/:color", (req, res) => {

    let result = {"error": "Could not find!"};

    people.forEach((value) => {
        if(value.color == req.params.color) {
            result = value;
        }
    });

    if(result.error) {
        //In red
        console.log(req.path)
    } else {
        //In green
        console.log(req.path)
    }

    res.send(result);
    
});

App.listen(port, () => {
    console.log("Server running!");
});