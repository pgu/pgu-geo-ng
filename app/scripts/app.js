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
                    IN: ['LinkedIn', function (LinkedIn) {
                        return LinkedIn.get();
                    }]
                }
            })
            .when('/edit/', {
                templateUrl: 'views/edit.html',
                controller: 'EditCtrl',
                resolve: {
                    member: ['LinkedIn', '$location', '$q', function (LinkedIn, $location, $q) {
                        return LinkedIn.get()

                            .then(function (IN) {

                                if (IN.User.isAuthorized()) {

                                    var profileDeferred = $q.defer();
                                    var profilePromise = profileDeferred.promise;

                                    var connectionsDeferred = $q.defer();
                                    var connectionsPromise = connectionsDeferred.promise;

                                    IN.API.Profile('me')
                                        .fields(
                                            'id',
                                            'first-name',
                                            'last-name',
                                            'headline',
                                            'location',
                                            'numConnections',
                                            'numConnectionsCapped',
                                            'summary',
                                            'specialties',
                                            'pictureUrl',
                                            'publicProfileUrl',
                                            'positions:(id,company,endDate,isCurrent,startDate,summary,title,location)',
                                            'languages:(language,proficiency)',
                                            'educations'
                                        )
                                        .result(function (profiles) {
                                            profileDeferred.resolve(_(profiles.values).first());
                                        });

                                    IN.API.Connections('me')
                                        .fields('firstName', 'lastName', 'location')
                                        .result(function (connections) {
                                            connectionsDeferred.resolve(connections);
                                        });

                                    return $q.all({ profile: profilePromise, connections: connectionsPromise})

                                        .catch(function () {
                                            $location.path('/');
                                        });

                                } else {
                                    $location.path('/');
                                    return $q.reject();
                                }
                            })

                            .catch(function () {
                                $location.path('/');
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
