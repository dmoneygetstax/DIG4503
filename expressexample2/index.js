const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("public"));

App.use("/public", Express.static("public"));

App.get("/", function(req, res){
    res.send("Hello World!");
});

App.listen(port, () => {
    console.log("Server running!");
});