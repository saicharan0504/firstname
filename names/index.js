const peopleName = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");
const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};
module.exports = getPeopleInCity;
