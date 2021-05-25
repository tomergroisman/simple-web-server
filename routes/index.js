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

// Get all the provinces that start with “B”
router.get('/wineTests/testsInCalifornia', handlers.testsInCalifornia);

// Get all the provinces that start with “B”
router.get('/wineTests/numOfWinesPerCountry', handlers.numOfWinesPerCountry);

// Get all the provinces that start with “B”
router.get('/wineTests/averageWinePrice', handlers.averageWinePrice);

module.exports = router