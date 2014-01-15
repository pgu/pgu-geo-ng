'use strict';

angular.module('pguGeoNgApp', [
        'ngRoute',
        'APIConfig'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/edit/', {
                templateUrl: 'views/edit.html',
                controller: 'EditCtrl'
            })
            .when('/public/', {
                templateUrl: 'views/read.html',
                controller: 'ReadCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
