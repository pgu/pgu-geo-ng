'use strict';

angular.module('pguGeoNgApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://pgu-geo-ng-api.appspot.com/tasks/').then(function(response) {
      console.log(response);
    });

});
