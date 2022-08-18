define(["views/league-view", "services/league-service"], function (
  view,
  service
) {
  var externals = {};

  function bindEventHandler() {
    view.bind("click", buttonHandler);
  }

  async function buttonHandler() {
    var leagues = await service.getLeagueTeams();

    view.renderLeagues(leagues);
  }

  externals.start = function () {
    console.log("Controller is up and running");

    bindEventHandler();
    view.render();
  };

  return externals;
});
