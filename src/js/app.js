'use strict';

// Declare app level module which depends on filters, and services

var wfApp = angular.module('wfApp', [
    'ngRoute',
    'ngResource',
    'angular.filter',
    
    'wfApp.controllers',
    'wfApp.factories',
    'wfApp.directives',

    'wfApp.new.filters',
    'wfApp.new.directives',
    'wfApp.new.services',
    'wfApp.new.factories',
    'wfApp.new.controllers',
    'UserApp'
]);

wfApp.config(($routeProvider, $locationProvider) => {
    $routeProvider.when('/', {templateUrl: 'partials/index', public: true});

    $routeProvider.when('/search', {templateUrl: 'partials/search', controller: 'wfSearchCtrl', public: true});
    $routeProvider.when('/fish/:id', {templateUrl: 'partials/fish_detail', controller: 'wfFishDetailCtrl', public: true});

    $routeProvider.when('/login', {templateUrl: 'partials/login', login: true});
    $routeProvider.when('/signup', { templateUrl: 'partials/signup', public: true});

    $routeProvider.otherwise({ redirectTo: '/'});

    $locationProvider.html5Mode(true);
});

wfApp.run((user) => {
    user.init({ appId: '54fa33a3161df' });
});
