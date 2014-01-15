'use strict';

angular.module('pguGeoNgApp')
    .controller('EditCtrl', function ($scope, $http, API_host) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $http.get(API_host + '/tasks/').then(function (response) {
            console.log(response);
        });

    });
