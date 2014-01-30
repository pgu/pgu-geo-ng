'use strict';

angular.module('pguGeoNgApp').factory('LinkedIn', function ($q, $window, $timeout) {

    return {
        get: function () {

            if (!_($window.IN).isUndefined()) {
                return $q.when($window.IN);
            }

            // loads the LinkedIn API
            var deferred = $q.defer();
            var promise = deferred.promise;

            $window.onLinkedInLoad = function () {
                console.info('onLinkedInLoad');
                deferred.resolve($window.IN);
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
