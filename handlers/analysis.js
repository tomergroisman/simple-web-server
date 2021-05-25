const fileHandler = require("./fileHandler");

let data = fileHandler.readJsonFromFile().wines;

const analysis = {
  getAllWineTests: () => {
    return data;
  },
  numOfWineTests: () => {
    return data.length;
  },
  maxPoints: () => {
    let max = 0;
    data.filter(test => !!test.points)
      .forEach(test => {
        max = Math.max(max, Number(test.points));
      });
    return max;
  },
  cheapestWine: () => {
    let cheapest = {
      price: Infinity
    }
    data.filter(test => !!test.price)
      .forEach(test => {
        if (test.price < cheapest.price) {
          cheapest = test;
        }
      });
    return cheapest.price !== Infinity ? cheapest : null;
  },
  mostPopularCountry: () => {
    const countries = analysis.numOfWinesPerCountry();
    max = Object.keys(countries)[0];
    for (const country in countries) {
      max = countries[country] > countries[max] ? country : max;
    }
    return max
  },
  provincesStartsWithB: () => {
    let provinces = [];
    data.filter(test => !!test.province)
      .forEach(test => {
        const startsWithB = test.province.toLocaleLowerCase().charAt(0) == 'b';
        const isNew = provinces.indexOf(test.province) === -1;
        if (startsWithB && isNew) {
          provinces.push(test.province)
        }
      });
    return provinces
  },
  testsInCalifornia: () => {
    return data.filter(test => test.province && test.province.toLocaleLowerCase() === "california").length
  },
  numOfWinesPerCountry: () => {
    let countries = {};
    data.forEach(test => {
      if (test.country) {
        countries[test.country] ? countries[test.country]++ : countries[test.country] = 1;
      }
    });
    return countries;
  },
  averageWinePrice: () => {
    const priceTagged = data.filter(test => !!test.price);
    const sum = priceTagged.reduce((prevVal, curVal) => prevVal + curVal.price, 0);
    return sum / priceTagged.length;
  },
}

module.exports = analysis;