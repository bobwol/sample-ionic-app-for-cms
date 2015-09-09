starling.controller('contentController', function($scope, $location, $stateParams, $firebase, $ionicSlideBoxDelegate, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
    var viewID = $stateParams.viewID;
    var view = new Firebase("https://starling.firebaseio.com/apps/" + $scope.appKey + "/views/" + viewID );
    $scope.view = $firebase(view);
});