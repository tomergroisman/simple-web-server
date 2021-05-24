// 1. Write a function that return list of ages 

function getAgeList(data) {
    return data.map(item => item.age)
}

// 2. ... returns the ratio between male and female
function getGenderRatio(data) {
    let male = data.filter(item => item.sex === "M").length
    let female = data.filter(item => item.sex === "F").length
    return male / female;
}

// 3 - count all values of "school"
function schoolDistribution(data) {
    let schools = data.map(item => item.school)
    let counts = {}
    for (let school of schools) {
        if (counts[school]) counts[school]++
        else counts[school] = 1
    }
    return counts;
}

function addStudent(data, age, school, gender) {
    data.push({
        "age": age,
        "school": school,
        "sex": gender
    })
}

module.exports = {
    getAgeList,
    getGenderRatio,
    addStudent
}