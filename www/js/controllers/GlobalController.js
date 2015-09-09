starling.controller('globalController', function($scope, $sce, $location, $firebase, $ionicSlideBoxDelegate, $ionicSideMenuDelegate, $ionicNavBarDelegate) {

  $scope.appKey = '-JRk3PYaKSyiy67oB1wA';
  $scope.setAppID = function(appKey) {
    $scope.appKey = appKey;
  };
  var app = new Firebase("https://starling.firebaseio.com/apps/" + $scope.appKey);
  $scope.app = $firebase(app);

  $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
  };

});