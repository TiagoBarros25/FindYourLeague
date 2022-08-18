/**
 * Router Module
 */
define(function() {
    
    var externals = {}; // module external api

    var routes = {
        league: {
            hash: "#league",
            controller: "league-controller"
        }

    };
    
    var defaultRoute = 'league';

    function hashCheck() {
    
        var routeName = Object.keys(routes).find(function(name) {
            return window.location.hash === routes[name].hash;
        });

        if (!routeName) {
            routeName = defaultRoute;
            window.location.hash = routes[defaultRoute].hash;
        }

        loadController(routes[routeName].controller);
    };


    function loadController(controllerName) {
        
        require(['controllers/' + controllerName], function(controller) {
            try {
                controller.start();
            } catch (err) {
                console.log(err.stack);
                window.location.hash = routes[defaultRoute].hash;
            }
        });
    };

    externals.start = function() {

        hashCheck();

        $(window).on('hashchange', function() {
            hashCheck();
        });
          
    };

    return externals;
});
