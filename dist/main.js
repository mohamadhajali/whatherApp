const c = new model();
const loadPage = function () {
  c.getDataFromDB();
};
loadPage();
handleSearch = function () {
  c.getCityData();
};
oparitonInIdDB = function (i) {
  c.saveCityInDB(i);
};
