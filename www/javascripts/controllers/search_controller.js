angular.module('hackathon')
  .controller('SearchController', function($scope, $state, $ionicHistory, leanlineApiService, resultService) {
    $scope.search = {
      term: 'Igel',
      subject: 'Biologie',
      class: 'Sekundarstufe I'
    };

    $scope.performSearch = function search() {
      leanlineApiService.find($scope.search)
        .then(function(apiResponse) {
          resultService.add(apiResponse.data);
          resultService.getAll();
        }, function(err) {
          console.log(err);
        });
    }
  }
);
