(function() {
  'use strict';

  function TeamController(team, TeamFactory, $filter) {
    var vm = this;

    vm.team = team.data;

    // Callable methods on the vm:
    vm.createAward = createAward;
    vm.addAward = addAward;

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getAwards()
    }

    function getAwards() {
      return TeamFactory.getAwards()
                        .then(setAwards)
    }

    function createAward() {
      return TeamFactory.createAward(vm.award, vm.team.id)
                        .then(addAward)
    }

    function addAward(data) {
      vm.team.awards.push(data);
      getAwards();
      vm.award = {};
      return vm.awards.push(data);
    }

    function setAwards(data) {
      return vm.awards = data.filter(function(award) {
        return (award.team_id == vm.team.id)
      });
    }

  }



  angular
    .module('app')
    .controller('TeamController', TeamController)


}());

