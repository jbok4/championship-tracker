(function() {
  'use strict';

  function Awards() {
    return {
      templateUrl: 'directives/awards/awards.html',
      // creating this scope object in the directive isolates an objects scope from the parent.
      scope: {
        // creates a 2 way binding of the object
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