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
});
