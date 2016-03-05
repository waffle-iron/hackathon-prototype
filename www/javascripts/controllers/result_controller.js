angular.module('hackathon')
  .controller('ResultController', function($scope, $state, resultService) {

    $scope.dislike = function(index) {
      console.log("Dislike: " + index);
    };

    $scope.like = function(index) {
      console.log("Liked: " + index);
    };

    $scope.remove = function(index) {
      $scope.cards.splice(index, 1);
      $scope.cards = resultService.getAll();
    };

    $scope.cards = resultService.getAll();
  });
