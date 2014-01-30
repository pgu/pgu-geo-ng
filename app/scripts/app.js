'use strict';

angular.module('pguGeoNgApp', [
        'ngRoute',
        'APIConfig'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    IN: ['LinkedIn', function(LinkedIn) {
                        return LinkedIn.get();
                    }]
                }
            })
            .when('/edit/', {
                templateUrl: 'views/edit.html',
                controller: 'EditCtrl',
                resolve: {
                    User: ['LinkedIn', '$location', '$q', function(LinkedIn, $location, $q) {
                        return LinkedIn.get().then(function(IN) {

                            if (IN.User.isAuthorized()) {
                                return IN.User;

                            } else {
                                $location.path('/');
                                return $q.reject();
                            }
                        });
                    }]
                }
            })
            .when('/public/', {
                templateUrl: 'views/public.html',
                controller: 'PublicCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
