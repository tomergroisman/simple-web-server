# Simple Web Server

## Description

This project implements a simple api web server application, which servers a wine tests database queries and analysis.

## Start

To start the application on your local machine, run the following commands in your terminal (make sure you have Git installed):

```shell
git clone https://github.com/tomergroisman/simple-web-server.git
cd simple-web-server
npm start <port>
```

You can specify your oun preferred port to start the app, **the default port is 3000**
The app will start on `http://localhost:<port>`

## API Documentation

### All Wine Tests

---

  Returns a list of all the wine tests.

* **URL**

  /wineTests

* **Method:**

  `GET`

* **Response Type:**

  `Array<WineTest>`

### Number of Wine Tests

---

  Returns the number of wine tests.

* **URL**

  /wineTests/numOfWineTests

* **Method:**

  `GET`

* **Response Type:**

  `number`

### Max Points

---

  Returns the max amount of point that was given in the competition.

* **URL**

  /wineTests/maxPoints

* **Method:**

  `GET`

* **Response Type:**

  `number`

### Cheapest Wine

---

  Returns the cheapest wine object.

* **URL**

  /wineTests/cheapestWine

* **Method:**

  `GET`

* **Response Type:**

  `WineTest`

### Most Popular Country

---

  Returns the most popular country (country with most wine tests in the competition).

* **URL**

  /wineTests/mostPopularCountry

* **Method:**

  `GET`

* **Response Type:**

  `string`

### Provinces Starts With "B"

---

  Returns all the provinces that start with “B”.

* **URL**

  /wineTests/provincesStartsWithB

* **Method:**

  `GET`

* **Response Type:**

  `Array<string>`

### Wines from California

---

  Returns all the tests made for wines from California.

* **URL**

  /wineTests/testsInCalifornia

* **Method:**

  `GET`

* **Response Type:**

  `number`

### Wines Per Country

---

  Returns an object of the number of wines per country.

* **URL**

  /wineTests/numOfWinesPerCountry

* **Method:**

  `GET`

* **Response Type:**

  `{ [contry_name]: number }`

### Average Price

---

  Returns the average wine price.

* **URL**

  /wineTests/averageWinePrice

* **Method:**

  `GET`

* **Response Type:**

  `number`

### Testers List

---

  Returns a list of all the testers.

* **URL**

  /wineTests/listOfTesters

* **Query Params**

   *Optional:*
   `?testersCount=[boolean]`

* **Method:**

  `GET`

* **Response Type:**

  `Array<string>` OR `{ testers: Array<string>, testers_count: number }` (requests with the query param `?testersCount=true`)

### Most Expensive Variety

---

  Returns the most expensive variety (by average).

* **URL**

  /wineTests/mostExpensiveVariety

* **Method:**

  `GET`

* **Response Type:**

  `{ variety: string, average: number }`
