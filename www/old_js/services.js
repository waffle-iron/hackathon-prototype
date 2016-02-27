angular.module('starter.services', [])
  .factory('Favourite', function() {
    var object = {
      list: []
    };

    object.addToList = function(favourite) {
      if (!favourite) {
        return false;
      }

      object.list.unshift(favourite);
    };

    return object;
  })
  .factory('Discovery', function($http, SERVER, LEARN_LINE) {
    var object = {
      element: {},
      learnline: {}
    };

    object.getNext = function() {
      object.learnline = $http({
          method: "GET",
          url: LEARN_LINE.url + LEARN_LINE.search + "hase"
        })
        .success(function(data) {
          console.log(data)
        });
      var random = Math.floor(Math.random() * 10) + 1;
      return $http({
        method: "GET",
        url: SERVER.url + "/" + random
      }).success(function(data) {
        object.element = data;
      });
    };

    return object;
  });
