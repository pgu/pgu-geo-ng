'use strict';

angular.module('pguGeoNgApp').factory('D3', function ($q, $window, $timeout) {

    var d3 = null;
    var promise = null;

    return {
        get: function () {

            if (!_(d3).isNull()) {
                return $q.when(d3);
            }

            if (!_(promise).isNull()) { // a request has already been initiated
                return promise;
            }

            var deferred = $q.defer();
            promise = deferred.promise;

            var $ = $window.$;

            $($window.$document).ready(function () {

                $.getScript('http://d3js.org/d3.v3.min.js')

                    .done(function () {
                        d3 = $window.d3;
                        deferred.resolve(d3);
                    })

                    .fail(function () {
                        console.error('Ouch! Unable to load d3.js!');
                    });
            });

            return promise;
        }
    };
})
;
