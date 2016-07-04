// intialization
var app = angular.module('mainApp',['ngRoute']);

//configuration
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/login.html'
    })
});