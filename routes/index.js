const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

// Home
router.get('/', handlers.home);

// Get all wine tests
router.get('/wineTests', handlers.allWineTests);

// Get the number of wine tests
router.get('/wineTests/numOfWineTests', handlers.numOfWineTests);

// Get the max point that was given in the competition
router.get('/wineTests/maxPoints', handlers.maxPoints);

// Get the cheapest wine
router.get('/wineTests/cheapestWine', handlers.cheapestWine);

// Get the most popular country
router.get('/wineTests/mostPopularCountry', handlers.mostPopularCountry);

// Get all the provinces that start with “B”
router.get('/wineTests/provincesStartsWithB', handlers.provincesStartsWithB);

// Get all the tests made for wines from California
router.get('/wineTests/testsInCalifornia', handlers.testsInCalifornia);

// Get an object of the number of wines per country
router.get('/wineTests/numOfWinesPerCountry', handlers.numOfWinesPerCountry);

// Get the average wine price
router.get('/wineTests/averageWinePrice', handlers.averageWinePrice);

// Get a list of all the testers
// By adding the query "?testersCount=true", return an object {testers: Array<string>, testers_count: number}
router.get('/wineTests/listOfTesters', handlers.listOfTesters);

// Get the most expensive variety (by average)
// Returns an object {variety: string, average: number}
router.get('/wineTests/mostExpensiveVariety', handlers.mostExpensiveVariety);

module.exports = router