(function() {
  'use strict';

  function CreateAward() {
    return {
      templateUrl: 'directives/awards/create-award.html',
      restrict: 'E'
    };
  }

  angular
    .module('app')
    .directive('createAward', CreateAward);

}());