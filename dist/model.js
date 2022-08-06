const render = new Renderer($("#first-templet"), $("#cityWeather"));

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
        render.renderInfo(response);
      },
    });
  };
  getDataFromDB = function () {
    $.get("/cities", function (response) {
      render.renderInfo(response);
    });
  };

  saveCityInDB = function (buttonAction) {
    let div = $(buttonAction).closest("#continar2");
    let nameFromDom = div.find("#name").text();

    if ($(buttonAction).html() == "Delete") {
      this.deleteCity(div);
      return;
    }
    $(buttonAction).html("Delete");
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
