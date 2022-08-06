const c = new model();
const loadPage = function () {
  c.getDataFromDB();
};
loadPage();
handleSearch = function () {
  c.getCityData();
};
oparitonInIdDB = function (buttonAction) {
  c.saveCityInDB(buttonAction);
};
