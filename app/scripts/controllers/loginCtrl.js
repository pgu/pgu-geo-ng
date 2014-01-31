'use strict';

angular.module('pguGeoNgApp')
    .controller('LoginCtrl', function ($scope, IN, $location, $timeout) {

        IN.parse(); // renders the LinkedIn login btn

        IN.Event.on(IN, 'auth', function () {
            $timeout(function () {
                $location.path('/edit');
            }, 0);
        });

    });
