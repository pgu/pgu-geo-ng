'use strict';

angular.module('pguGeoNgApp')
    .controller('EditCtrl', function ($scope, $http, $location, $timeout, member, IN) {

        $scope.profile = member.profile;
        $scope.connections = member.connections;
        $scope.mapId = 'editMap';

        $scope.logout = function () {
            IN.User.logout(function () {
                $timeout(function () {
                    $location.path('/');
                }, 0);
            });
        };

        $scope.onMapLoad = function (google) {

            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(-34.397, 150.644)
            };

            $timeout(function () { // hack to give time for the getElementById
                new google.maps.Map(document.getElementById($scope.mapId), mapOptions);
            }, 0);

        };

        //        $http.get(API_host + '/tasks/').then(function (response) {
        //            console.log(response);
        //        });

    });
