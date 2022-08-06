const express = require("express");
const router = express.Router();
const City = require("../model/city");
const axios = require("axios");
router.get("/city/:city", (req, response) => {
  let parm = req.params.city;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${parm}&units=metric&appid=5c0df1570193de98d2da5b872e6dbec3`
    )
    .then((res) => {
      currentCity = [
        new City({
          name: res.data.name,
          temperature: res.data.main.temp,
          condition: res.data.weather[0].description,
          conditionPic: `https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
          inDB: "Save",
        }),
      ];
      response.send(currentCity);
    });
});

router.get("/cities", (req, res) => {
  City.find({}, function (err, data) {
    res.send(data);
  });
});

router.post("/save", (req, res) => {
  let data = req.body;
  console.log(data);
  let city = new City(data);
  city.save();
});
router.delete("/deletCity/:city", (req, res) => {
  let cityToDelete = req.params.city;
  City.deleteOne({ name: cityToDelete }, function (err) {});
});
module.exports = router;
