angular.module('hackathon')
  .controller('ResultController', function($scope, $state) {
    $scope.result = {title: "Titel", tags: ['foo', 'bar']};
  }
);
