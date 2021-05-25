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
  listOfTesters: () => {
    return data.filter(test => !!test.taster_name)
      .reduce((prevVal, curVal) => {
        if (!prevVal.includes(curVal.taster_name)) {
          return [...prevVal, curVal.taster_name];
        }
        else {
          return prevVal;
        }
      }, []);
  },
  mostExpensiveVariety: () => {
    const varieties = data.filter(test => !!test.variety)
      .reduce((prevVal, curVal) => {
        if (prevVal[curVal.variety]) {
          prevVal[curVal.variety].count++;
          prevVal[curVal.variety].sum += curVal.price;
        }
        else {
          prevVal[curVal.variety] = {
            count: 1,
            sum: curVal.price
          };
        }
        return prevVal;
      }, {});
    for (const variety in varieties) {
      varieties[variety].average = varieties[variety].sum / varieties[variety].count;
    }
    const sortedVarieties = Object.keys(varieties).sort((a, b) => varieties[b].average - varieties[a].average);
    return {
      variety: sortedVarieties[0],
      average_price: varieties[sortedVarieties[0]].average
    }
  }
}

module.exports = analysis;