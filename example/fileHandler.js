var fs = require("fs")

function readSyncJson() {
    var data = fs.readFileSync("./students.json")
    // JS - json passed >> 
    return JSON.parse(data)
}

function readAsyncJson(callback) {
    return fs.readFile("./students.json", callback)
}

module.exports = {
    readSyncJson,
    readAsyncJson
}
// sync / async
/*
i = 3
f = read file async of length 3635763467585843623
console.log("Thankyou")
*/