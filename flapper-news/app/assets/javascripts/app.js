'use strict';

angular.module('flapperNews', ['ui.router', 'templates']) //modules go here...just like ui-router

//Set up routing

.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
    url: '/posts/{id}',
    templateUrl: 'posts/_posts.html',
    controller: 'PostsCtrl'
  });
    
    
    $urlRouterProvider.otherwise('home');
    
}]);
