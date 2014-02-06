'use strict';

angular.module('pguGeoNgApp')
    .controller('PublicCtrl', function ($scope, $timeout) {

        $scope.mapId = 'publicMap';

        $scope.onMapLoad = function (google) {

            var mapOptions = {
                zoom: 5,
                center: new google.maps.LatLng(48, 2)
            };

            $timeout(function () { // hack to give time for the getElementById
                new google.maps.Map(document.getElementById($scope.mapId), mapOptions);
            }, 0);

        };

    });
