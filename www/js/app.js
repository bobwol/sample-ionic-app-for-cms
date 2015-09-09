var starling = angular.module('starter', [
  'ionic',
  'firebase',
  'ngSanitize'
]);
starling.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

starling.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('sidenav', {
      url: "/sidenav",
      abstract: true,
      templateUrl: "templates/side-nav-app.html"
    })
    .state('sidenav.starter', {
      url: "/start",
      views: {
        'starlingView' :{
          templateUrl: "templates/starter.html"
        }
      }
    })
    .state('sidenav.content', {
      url: "/:viewID",
      views: {
        'starlingView' :{
          templateUrl: "templates/content-view.html",
          controller: "contentController"
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sidenav/start');

});