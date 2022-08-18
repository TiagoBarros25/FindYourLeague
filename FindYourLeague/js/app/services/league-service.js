define(function () {
  var externals = {};
  var cena;

  externals.getLeagueTeams = async function (callbackFunction) {
    var leagueName = $("#box").val();
    var year = $("#box2").val();

    var league = await fetch(
      "https://api-football-standings.azharimm.site/leagues/"
    )
      .then((response) => response.json())
      .then(function (leagues) {
        return leagues.data.find(function (element) {
          return element.name.includes(leagueName);
        });
      })
      .then(function (response) {
          cena = response;
        $("#megaBox").html("");
        $("#megaBox").append("<p class='fw-bold' > League Name:  </p>" + "<p class='nameLeague' >" + response.name + "</p>");
        $("#megaBox").append("<th><img autoplay loop muted style=z-index:-1; position:absolute; top:0; left:0; width=40% height=40% object-fit: fill; src=" + response.logos.light + "></th>");
        return cena;
      })
      
    var leagues = await fetch(
      "https://api-football-standings.azharimm.site/leagues/" +
        cena.id +
        "/standings?season=" +
        year +
        "&sort=asc"
    ).then((response) => response.json());

    return leagues;
  };
  return externals;
});
