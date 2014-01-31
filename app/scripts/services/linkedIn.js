'use strict';

angular.module('pguGeoNgApp').factory('LinkedIn', function ($q, $window, $timeout) {

    var IN = null;

    return {
        get: function () {

            if (!_(IN).isNull()) {
                return $q.when(IN);
            }

            // loads the LinkedIn API
            var deferred = $q.defer();
            var promise = deferred.promise;

            $window.onLinkedInLoad = function () {

                if (!_(IN).isNull()) { // already initialized by a concurrent request
                    deferred.resolve(IN);
                    return;
                }

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
