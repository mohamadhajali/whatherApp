const Renderer = class {
  constructor(firstTemplet, cityWether) {
    this.firstTemplet = firstTemplet;
    this.cityWether = cityWether;
  }
  changeButton = function (button) {
    button.html("Delete");
  };
  renderInfo = function (data) {
    const source = this.firstTemplet.html();
    const template = Handlebars.compile(source);
    const newHTML = template({ data });
    this.cityWether.append(newHTML);
    data.forEach((element) => {
      if (element.inDB == "Delete") {
        this.changeButton(this.cityWether.find("button"));
      }
    });
  };
};
