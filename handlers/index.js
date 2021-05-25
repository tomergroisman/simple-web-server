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
  listOfTesters: (req, res) => {
    const testersList = analysis.listOfTesters();
    if (req.query.testersCount == "true") {
      res.json({
        testers: testersList,
        testers_count: testersList.length,
      })
      return;
    }
    res.json(testersList);
  },
  mostExpensiveVariety: (req, res) => {
    res.json(analysis.mostExpensiveVariety());
  },
  listen: (port) => {
    console.log(`Server is up on port ${port}`);
  }
}

module.exports = handlers;