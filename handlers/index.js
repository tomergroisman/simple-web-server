const fileHandler = require("./fileHandler");

let db = fileHandler.readJsonFromFile();

const handlers = {
  home: (req, res) => {
    res.send('Welcome to wine api simple web server')
  },
  wines: (req, res) => {
    res.send(db.wines);
  },
  listen: (port) => {
    console.log(`Server is up on port ${port}`);
  }
}

module.exports = handlers;