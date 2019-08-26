import { bro } from './bro'
document.querySelector('h1').textContent = bro(`Hey`);
var myApp = angular.module("productsModule", ["ngRoute"]);

myApp.run(function($rootScope) {
  $rootScope.apidomain = 'http://localhost:8181';
});
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/products', {
            template: '<h2>test template</h2>',
            controller: "productsController"
        })
        .when('/cart', {
            templateUrl: './cart.html',
            controller: 'productsController'
        });  
  });
  
myApp.controller("productsController", function ($scope) {
    $scope.message = "Hello";
});