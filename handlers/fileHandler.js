var fs = require('fs');

const fileHandler = {
  readJsonFromFile: () => {
    const data = require("../wines.json")
    return data
  },
  writeObjectToJson: (obj, filename) => {
    const json = JSON.stringify(obj, null, 2);
    fs.writeFile(filename, json, (err) => {
      if (err) return console.error(err);
    });
  }
}

module.exports = fileHandler;