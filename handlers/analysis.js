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
    return data.filter(test => !!test.points)
      .reduce((prevVal, curVal) => {
        return Math.max(prevVal, Number(curVal.points));
      }, 0);
  },
  cheapestWine: () => {
    const cheapest = data.filter(test => !!test.price)
      .reduce((prevVal, curVal) => {
        return (curVal.price < prevVal.price) ? curVal : prevVal;
      }, { price: Infinity });
    return cheapest.price !== Infinity ? cheapest : null;
  },
  mostPopularCountry: () => {
    const countries = analysis.numOfWinesPerCountry();
    return Object.keys(countries).reduce((prevVal, curVal) => {
      return countries[curVal] > (countries[prevVal] || 0) ? curVal : prevVal
    }, '');
  },
  provincesStartsWithB: () => {
    return data.filter(test => !!test.province)
      .reduce((prevVal, curVal) => {
        const startsWithB = curVal.province.toLocaleLowerCase().charAt(0) == 'b';
        const isNew = prevVal.indexOf(curVal.province) === -1;
        return (startsWithB && isNew) ? [...prevVal, curVal.province] : prevVal;
      }, []);
  },
  testsInCalifornia: () => {
    return data.filter(test => test.province && test.province.toLocaleLowerCase() === "california").length
  },
  numOfWinesPerCountry: () => {
    return data.reduce((countries, curTest) => {
      return curTest.country ?
        (countries[curTest.country] ? { ...countries, [curTest.country]: countries[curTest.country] + 1} : { ...countries, [curTest.country]: 1 }) :
        countries
    }, {});
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