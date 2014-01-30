'use strict';

angular.module('pguGeoNgApp').factory('LinkedIn', function ($q, $window) {

    var IN = $window.IN;

    return {
        get: function() {

            if (!_(IN).isUndefined()) {
                console.log('direct IN');
                return $q.when(IN);
            }

            console.log('load IN');
            // loads the LinkedIn API
            var deferred = $q.defer();
            var promise = deferred.promise;

            $window.$.ajax({
                url: 'http://platform.linkedin.com/in.js',
                dataType: 'script',
                data: {
                    api_key: 'qwfxh7u2673i',
                    authorize: true,
                    scope: 'r_fullprofile r_network'
                }
            })
                .done(function () {
                    deferred.resolve($window.IN);
                })
                .fail(function () {
                    $window.alert('Ouch! Unable to load LinkedIn\'s API!');
                });

            return promise;
        }
    };
});
