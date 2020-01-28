const Express = require("express");
const App = Express();
const port = 8080;
const Person = require("./Person.js");

let p = new Person("Danielle", "magenta");

App.get("/", (Req, Res) => {
    Res.send(p.color);
});

App.get("/color", (Req, Res) => {
    Res.send(p.color);
});

App.get("/name", (Req, Res) => {
    Res.send(p.name);
});

App.listen(port, () => {
    console.log("Server running!");
});