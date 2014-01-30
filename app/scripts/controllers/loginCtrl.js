'use strict';

angular.module('pguGeoNgApp')
    .controller('LoginCtrl', function ($scope, IN, $location) {

        $scope.isAuthorized = false;

        if (IN.User.isAuthorized()) {
            $location.path('/edit');

        } else {
            IN.parse(); // renders the LinkedIn login btn
        }

    });
