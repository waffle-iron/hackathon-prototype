angular.module('starter.controllers', ['ionic', 'starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SettingsCtrl', function($scope, $stateParams) {})

.controller('FavouritesCtrl', function($scope, Favourite) {
  //Update the list of favourited items
  console.log(Favourite);
  $scope.favourites = Favourite.list;
})

.controller('DiscoverCtrl', function($scope, $stateParams, Favourite) {
    //Initialize mock data to randomize through
    $scope.discoveries = [
      {
        "title": "Hello",
        "image": "hello.png"
      },
      {
        "title": "World",
        "image": "world.png"
      },
      {
        "title": "Foo",
        "image": "foo.png"
      },
      {
        "title": "Bar",
        "image": "bar.png"
      },
  ];
  //Set initial discovery
  $scope.currentDiscovery = angular.copy($scope.discoveries[0]);

  $scope.discover = function(liked) {

    if(liked) {
      Favourite.addToList($scope.currentDiscovery);
    }
    var randomDiscovery = Math.round(Math.random() * ($scope.discoveries.length - 1));
    $scope.currentDiscovery = angular.copy($scope.discoveries[randomDiscovery]);
  }
});
