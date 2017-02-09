(function() {
  'use strict';

  function TeamController(team, TeamFactory, $filter, $stateParams) {
    var vm = this;

    
    vm.team = team.data;

    // Callable methods on the vm:
    vm.createAward = createAward;
    vm.addAward = addAward;
    vm.getSportsFeed = getSportsFeed;
    vm.getBaseballFeed = getBaseballFeed;
    

    // Instantiated info:
    activate();

    // Defined methods:
    function activate() {
      getAwards()
      getSportsFeed()
      getBaseballFeed()
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
      vm.sportsFeed = data["dailygameschedule"]['gameentry']
      return vm.sportsFeed
      // console.log(vm.sportsFeed)
    }

    function getBaseballFeed() {
      return TeamFactory.getBaseballFeed()
                        .then(setBaseballFeed)
    }

    function setBaseballFeed(data) {
      vm.baseballFeed = data["overallteamstandings"]["teamstandingsentry"]
      return vm.baseballFeed
      // console.log(vm.baseballFeed)
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

