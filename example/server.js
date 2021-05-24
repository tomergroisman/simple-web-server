// Our main library for web-server
var express = require("express");
var handler = require("./fileHandler")
var analysis = require("./analysis")

var app = express();
var DATA = null;


 // Web - HTTP Request-Response Mechanism
 app.get("/", function(request, response) {
    response.send("Welcome to my first WS!")
})

// JSON - JavaScript Object Notation
app.get("/getAges", function(request, response) {
    response.send(analysis.getAgeList(DATA["students"]))
})

app.get("/genderRatio", function(request, response) {
    response.send("" + analysis.getGenderRatio(DATA["students"]))
})

app.get("/addStudent/:age/:school/:gender", function(request, response) {
    // request.params
    console.log("BEFORE", DATA["students"].length)
    analysis.addStudent(DATA["students"], request.params.age, request.params.school, request.params.gender)
    console.log("AFTER", DATA["students"].length)
    response.send("Student Added.")

})
// Each server have to listen in specific PORT! 
app.listen(2233, function() {
    console.log("Server is UP!")
    // SYNC: let data = handler.readSyncJson()

    handler.readAsyncJson(function(err, data) {
        if (err) console.log(err)
        DATA = JSON.parse(data)
    })
    // console.log(data)
})

