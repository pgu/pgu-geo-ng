'use strict';

angular.module('pguGeoNgApp').factory('GoogleMaps', function ($q, $window) {

    var google = null;
    var promise = null;

    return {
        get: function () {

            if (!_(google).isNull()) {
                return $q.when(google);
            }

            if (!_(promise).isNull()) { // a request has already been initiated
                return promise;
            }

            // loads once the Google Maps API
            var deferred = $q.defer();
            promise = deferred.promise;

            $window.onGoogleMapsLoad = function () {
                google = $window.google;
                deferred.resolve(google);
            };

            var $ = $window.$;

            $($window.$document).ready(function () {

                $.getScript('http://maps.googleapis.com/maps/api/js?sensor=false&callback=onGoogleMapsLoad&key=AIzaSyBh9m59QbVlNnG0R4EzQKg5tYvOBfbZSVo')

                    .fail(function () {
                        console.error('Ouch! Unable to load Google Maps API!');
                    });
            });

            return promise;
        }
    };
})
;
