angular.module('hackathon')
  .controller('ResultController', function($scope, $state, resultService) {
    $scope.result = resultService.getResult();
  }
);
