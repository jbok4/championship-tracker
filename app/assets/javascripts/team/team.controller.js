(function() {
  'use strict';

  function TeamController(team, TeamFactory, $filter, $stateParams) {
    var vm = this;

    
    vm.team = team.data;

    // Callable methods on the vm:
    vm.createAward = createAward;
    vm.addAward = addAward;
    vm.getSportsFeed = getSportsFeed;
    

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getAwards()
      getSportsFeed()
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

    function getSportsFeed() {
      return TeamFactory.getSportsFeed()
                        .then(setSportsFeed)
    }

    function setSportsFeed(data) {
      vm.sportsFeed = data
      return vm.sportsFeed["dailygameschedule"]['gameentry']
      // console.log(vm.sportsFeed["dailygameschedule"]['gameentry'])
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

