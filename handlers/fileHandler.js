var fs = require("fs")

const fileHandler = {
  readJsonFromFile: () => {
    var data = fs.readFileSync("./students.json")
    return JSON.parse(data)
  },
  writeObjectToJson: (obj, filename) => {
    // TODO
  }
}