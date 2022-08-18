define(function () {
  var externals = {};
  var elements = {};
  var handlers = {};

  function createBox() {
    return "<input class='form-control' type='text' id='box' name='search' placeholder='Insert League Name'/>";
  }
  function createButton() {
    return "<button id='button' class='btn btn-primary' type='button'>Search</button>";
  }
  function createBox2() {
    return "<input class='form-control' type='number' id='box2' min = 2012 maxlength = 4 size = 4 name='search' placeholder='Insert League Year'/>";
  }
  function createButton2() {
    return "<button id='button2' class='btn btn-primary' type='button'>Search</button>";
  }
  function renderBox() {
    if (elements.box && elements.box2) {
      return;
    }
    elements.box = $(createBox());
    elements.buttonClick = $(createButton());
    elements.box.change(handlers["click"]);
    elements.buttonClick.click(handlers["click"]);
    elements.app.append(elements.box);
    elements.app.append(elements.buttonClick);

    elements.box2 = $(createBox2());
    elements.buttonClick2 = $(createButton2());
    elements.box2.change(handlers["click"]);
    elements.buttonClick2.click(handlers["click2"]);
    elements.app.append(elements.box2);
    elements.app.append(elements.buttonClick2);
  }

  externals.renderLeagues = function (leagues) {
    $("#megaBox2").text("")
    $("#megaBox3").text("")
    for (let i = 0; i < leagues.data.standings.length; i++) {
      console.log(leagues.data.standings[i].stats[8]);
      if(i<10){
        $("#megaBox2").append(
        "<th> <img autoplay loop muted style=z-index:-1; position:absolute; top:0; left:0; width=80% height=40%  src=" +
          leagues.data.standings[i].team.logos["0"].href + "><br>" + "<br>" +
          leagues.data.standings[i].team.name + "<br>" +
          leagues.data.standings[i].stats[8].name + " : "+ leagues.data.standings[i].stats[8].value + "<br>" +
          leagues.data.standings[i].stats[6].name + " : "+ leagues.data.standings[i].stats[6].value +
        "</th>"+"<br>"
      );
      } else if(i>10){
        $("#megaBox3").append(
          "<th> <img autoplay loop muted style=z-index:-1; position:absolute; top:0; left:0; width=80% height=40%  src=" +
            leagues.data.standings[i].team.logos["0"].href + "><br>" + "<br>" +
            leagues.data.standings[i].team.name + "<br>" +
            leagues.data.standings[i].stats[8].name + " : "+ leagues.data.standings[i].stats[8].value + "<br>" +
            leagues.data.standings[i].stats[6].name + " : "+ leagues.data.standings[i].stats[6].value +
          "</th>"
        );
      }
      
    }
  };

  function renderLeague(league) {
    if (elements.leagueCard) {
      elements.leagueCard.empty();
    }
    elements.leagueCard = $(createLeagueCard(league));
    elements.app.append(elements.leagueCard);
  }

  externals.bind = function (event, handler) {
    handlers[event] = handler;
  };
  externals.render = function (league) {
    console.log("view is up and running");

    elements.app = $("#app");

    renderBox();

    if (league) {
      renderLeague(league);
    }
  };

  return externals;
});
