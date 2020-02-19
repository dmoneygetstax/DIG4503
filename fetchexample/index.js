const Express = require("express");
const App = Express();
const port = 80;

const fs = require("fs");

// Read the string content
let fileContents = fs.readFileSync("database.json");
// Convert string (object notation) into JavaScript (object)
let database = JSON.parse(fileContents);

// Server static files in the 'client/build' directory from the "/" path
App.use("/", Express.static("client/build"));

App.get("/api/movies/score/:score", (req, res) => {

    let result = {"error": "Not found!"};

    database.forEach((value) => {
        if(req.params.score == value.score) {
            result = value;
        }
    });
    
    res.json(result);
});

App.get("/api/movies/name/:name", (req, res) => {

    let result = {"error": "Not found!"};

    database.forEach((value) => {
        if(req.params.name == value.name) {
            result = value;
        }
    });
    
    res.json(result);
});

App.post("/api/movies/:name/:score", (req, res) => {

    let result = {
        "name": req.params.name,
        "score": parseInt(req.params.score)
    };

    database.push(result);
    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));
    
    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
