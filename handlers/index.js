const analysis = require("./analysis");

const handlers = {
  home: (req, res) => {
    res.send('Welcome to wine api simple web server')
  },
  allWineTests: (req, res) => {
    res.json(analysis.getAllWineTests());
  },
  numOfWineTests: (req, res) => {
    res.json(analysis.numOfWineTests());
  },
  maxPoints: (req, res) => {
    res.json(analysis.maxPoints());
  },
  cheapestWine: (req, res) => {
    res.json(analysis.cheapestWine());
  },
  mostPopularCountry: (req, res) => {
    res.json(analysis.mostPopularCountry());
  },
  provincesStartsWithB: (req, res) => {
    res.json(analysis.provincesStartsWithB());
  },
  testsInCalifornia: (req, res) => {
    res.json(analysis.testsInCalifornia());
  },
  numOfWinesPerCountry: (req, res) => {
    res.json(analysis.numOfWinesPerCountry());
  },
  averageWinePrice: (req, res) => {
    res.json(analysis.averageWinePrice());
  },
  listen: (port) => {
    console.log(`Server is up on port ${port}`);
  }
}

module.exports = handlers;