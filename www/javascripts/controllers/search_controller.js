angular.module('hackathon')
  .controller('SearchController', function($scope, $state, $ionicHistory, leanlineApiService) {
    $scope.search = {
      term: 'Pytagoras',
      subject: 'Mathematik',
      class: '5',
      location: 'Aachen'
    };

    $scope.performSearch = function search() {
      leanlineApiService.find($scope.search)
        .then(function(apiResponse) {
          console.log(apiResponse.data);
        }, function(err) {
          console.log(err);
        });
    }
  }
);
