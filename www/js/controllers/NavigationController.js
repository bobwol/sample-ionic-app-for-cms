starling.controller('navigationController', function($scope, $location, $firebase, $ionicSlideBoxDelegate, $ionicSideMenuDelegate) {
    
var views = new Firebase("https://starling.firebaseio.com/apps/" + $scope.appKey + "/views");
$scope.sideMenu = $firebase(views);

});