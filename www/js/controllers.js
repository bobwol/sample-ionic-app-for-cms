starling.controller('contentController', function($scope, $location, $stateParams, $firebaseObject, $ionicSlideBoxDelegate, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
    var viewID = $stateParams.viewID;
    var view = new Firebase("https://starling.firebaseio.com/apps/" + $scope.appKey + "/views/" + viewID );
    $scope.view = $firebaseObject(view);
});
starling.controller('globalController', function($scope, $sce, $location, $firebaseObject, $ionicSlideBoxDelegate, $ionicSideMenuDelegate, $ionicNavBarDelegate) {

  $scope.appKey = '-JRk3PYaKSyiy67oB1wA';
  $scope.setAppID = function(appKey) {
    $scope.appKey = appKey;
  };
  var app = new Firebase("https://starling.firebaseio.com/apps/" + $scope.appKey);
  $scope.app = $firebaseObject(app);

  $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
  };

});
starling.controller('navigationController', function($scope, $location, $firebaseObject, $ionicSlideBoxDelegate, $ionicSideMenuDelegate) {

var views = new Firebase("https://starling.firebaseio.com/apps/" + $scope.appKey + "/views");
$scope.sideMenu = $firebaseObject(views);

});
