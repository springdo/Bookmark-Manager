'use strict';

angular
  .module('bookmanagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/mybooks', {
        templateUrl: 'app/mybooks/mybooks.html',
        controller: 'MyBooksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });