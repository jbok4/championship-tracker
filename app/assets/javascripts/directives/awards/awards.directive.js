(function() {
  'use strict';

  function Awards() {
    return {
      templateUrl: 'directives/awards/awards.html',
      scope: {
        awards: '='
      },
      transclude: true,
      restrict: 'E'
    };
  }

  angular
    .module('app')
    .directive('awards', Awards);

}());