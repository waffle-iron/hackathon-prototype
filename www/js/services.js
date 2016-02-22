angular.module('starter.services', [])
.factory('Favourite', function() {
  var object = {
    list: []
  };

  object.addToList = function(favourite) {
    if(!favourite) {
      return false;
    }

    object.list.unshift(favourite);
  };

  return object;
})
.factory('Discovery', function($http, SERVER){
  var object = {
    element: {}
  };

  object.getNext = function() {
    var random = Math.round(Math.random() * 10);
    return $http({
      method: "GET",
      url: SERVER.url + "/" + random
    }).success(function(data) {
      object.element = data;
    });
  };

  return object;
});
