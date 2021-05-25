const analysis = require("./analysis");

const handlers = {
  home: (req, res) => {
    console.log("GET: /wineTests");
    res.send('Welcome to wine api simple web server')
  },
  allWineTests: (req, res) => {
    console.log("GET: /wineTests/allWineTests");
    res.json(analysis.getAllWineTests());
  },
  numOfWineTests: (req, res) => {
    console.log("GET: /wineTests/numOfWineTests");
    res.json(analysis.numOfWineTests());
  },
  maxPoints: (req, res) => {
    console.log("GET: /wineTests/maxPoints");
    res.json(analysis.maxPoints());
  },
  cheapestWine: (req, res) => {
    console.log("GET: /wineTests/cheapestWine");
    res.json(analysis.cheapestWine());
  },
  mostPopularCountry: (req, res) => {
    console.log("GET: /wineTests/mostPopularCountry");
    res.json(analysis.mostPopularCountry());
  },
  provincesStartsWithB: (req, res) => {
    console.log("GET: /wineTests/provincesStartsWithB");
    res.json(analysis.provincesStartsWithB());
  },
  testsInCalifornia: (req, res) => {
    console.log("GET: /wineTests/testsInCalifornia");
    res.json(analysis.testsInCalifornia());
  },
  numOfWinesPerCountry: (req, res) => {
    console.log("GET: /wineTests/numOfWinesPerCountry");
    res.json(analysis.numOfWinesPerCountry());
  },
  averageWinePrice: (req, res) => {
    console.log("GET: /wineTests/averageWinePrice");
    res.json(analysis.averageWinePrice());
  },
  listOfTesters: (req, res) => {
    console.log("GET: /wineTests/listOfTesters");
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
    console.log("GET: /wineTests/mostExpensiveVariety");
    res.json(analysis.mostExpensiveVariety());
  },
  listen: (port) => {
    console.log(`Server is up on port ${port}`);
  }
}

module.exports = handlers;