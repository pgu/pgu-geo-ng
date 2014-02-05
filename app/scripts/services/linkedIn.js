'use strict';

angular.module('pguGeoNgApp').factory('LinkedIn', function ($q, $window, $timeout) {

    var IN = null;
    var promise = null;

    return {
        get: function () {

            if (!_(IN).isNull()) {
                return $q.when(IN);
            }

            if (!_(promise).isNull()) { // a request has already been initiated
                return promise;
            }

            // loads once the LinkedIn API
            var deferred = $q.defer();
            promise = deferred.promise;

            $window.onLinkedInLoad = function () {
                IN = $window.IN;
                deferred.resolve(IN);
            };

            var $ = $window.$;

            $($window.$document).ready(function () {

                $.getScript('http://platform.linkedin.com/in.js?async=true')

                    .done(function () {
                        $window.IN.init({
                            api_key: 'qwfxh7u2673i',
                            authorize: true,
                            onLoad: 'onLinkedInLoad',
                            scope: 'r_fullprofile r_network'
                        });
                    })

                    .fail(function () {
                        console.error('Ouch! Unable to load LinkedIn\'s API!');
                    });
            });

            return promise;
        }
    };
})
;
