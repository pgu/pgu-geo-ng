'use strict';

angular.module('pguGeoNgApp')
    .controller('EditCtrl', function ($scope, $http, $location, $timeout, member, IN) {

        $scope.profile = member.profile;
        $scope.connections = member.connections;

        $scope.logout = function () {
            IN.User.logout(function () {
                $timeout(function () {
                    $location.path('/');
                }, 0);
            });
        };

        //        $http.get(API_host + '/tasks/').then(function (response) {
        //            console.log(response);
        //        });

    });
