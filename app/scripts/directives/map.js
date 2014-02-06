'use strict';

angular.module('pguGeoNgApp').directive('map', function (GoogleMaps) {

    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        scope: {
            onMapLoad: '&'
        },
        link: function ($scope, $elt, $attrs) {

            if (_($attrs.id).isUndefined()) {
                throw new Error('An id is mandatory for the map');
            }

            GoogleMaps.get().then(function (google) {
                $scope.onMapLoad({ google: google });
            });

        }
    };
});
