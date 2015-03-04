'use strict';

// Declare app level module which depends on filters, and services

var wfApp = angular.module('wfApp', [
    'ngRoute',
    'wfApp.controllers',
    'wfApp.factory',
    'wfApp.filters',
    'wfApp.services',
    'wfApp.directives'
]);

wfApp.config(function ($routeProvider, $locationProvider) {
    var when = $routeProvider.
        when('/', {
            templateUrl: 'partials/index',
            controller: 'wfHomeCtrl'
        }).
        when('/search/:term', {
            templateUrl: 'partials/search',
            controller: 'wfSearchCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});
