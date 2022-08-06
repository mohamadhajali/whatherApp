const re = new Renderer($("#first-templet"), $("#cityWeather"));

const model = class {
  getCityData = function () {
    let city = $("#cityName").val();
    $.ajax({
      type: "get",
      cache: false,
      url: `/city/${city}`,
      error: function (request, error) {
        alert(" City Not found or inalid input");
        return;
      },
      success: function (response) {
        re.renderInfo(response);
      },
    });
    // $.get(`/city/${city}`, function (err, response) {
    //
    // });
  };
  getDataFromDB = function () {
    $.get("/cities", function (response) {
      re.renderInfo(response);
    });
  };

  saveCityInDB = function (i) {
    let div = $(i).closest("#continar2");
    let nameFromDom = div.find("#name").text();

    if ($(i).html() == "Delete") {
      this.deleteCity(div);
      return;
    }
    $(i).html("Delete");
    let tempFromDom = div.find("#temp").text();
    let imgFromDom = div.find("img").attr("src");
    let conditionFromDom = div.find("#condition").text();
    let c1 = {
      name: nameFromDom,
      temperature: parseFloat(tempFromDom),
      condition: conditionFromDom,
      conditionPic: imgFromDom,
      inDB: "Delete",
    };
    $.post("/save", c1, function (res) {});
  };
  deleteCity(divOfCity) {
    $.ajax({
      url: `/deletCity/${divOfCity.find("#name").text()}`,
      method: "DELETE",
      success: function () {},
    });
    divOfCity.remove();
  }
};
