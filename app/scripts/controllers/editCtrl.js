'use strict';

angular.module('pguGeoNgApp')
    .controller('EditCtrl', function ($scope, $http, member) {

        console.log(member);

        $scope.profile = member.profile;
        $scope.connections = member.connections;

        //        $http.get(API_host + '/tasks/').then(function (response) {
        //            console.log(response);
        //        });

    });
