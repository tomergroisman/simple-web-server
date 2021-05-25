const fileHandler = {
  readJsonFromFile: () => {
    const data = require("../wines.json")
    return data
  },
  writeObjectToJson: (obj, filename) => {
    // TODO
  }
}

module.exports = fileHandler;