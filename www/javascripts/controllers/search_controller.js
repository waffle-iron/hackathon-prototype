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
          return $state.go('app.result', {});
        }, function(err) {
          console.log(err);
        });
    }
  }
);
