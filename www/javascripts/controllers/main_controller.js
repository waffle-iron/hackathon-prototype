angular.module('hackathon')
  .controller('MainController', function($scope, $localstorage, $state, $ionicHistory, $ionicSideMenuDelegate) {
    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });

    $ionicSideMenuDelegate.canDragContent(false)

    console.log('mainController..');
  }
);
