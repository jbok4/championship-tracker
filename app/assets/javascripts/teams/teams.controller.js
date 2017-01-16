(function() {
  'use strict';

  function TeamsController(TeamFactory) {
    
    var vm = this;
    vm.name = "Current Teams";
    vm.getTeams = getTeams;
    vm.getAwards = getAwards;
    vm.addAward = addAward;
    vm.createTeam = createTeam;
    vm.createAward = createAward;
    
    // instantiated info
    activate();


    // defined methods
    function activate() {
      getTeams(); 
    }

    function getTeams() {
      return TeamFactory.getTeams()
                .then(setTeams)
    }

    function getAwards() {
      return TeamFactory.getAwards()
                .then(setAwards)
    }

    function createTeam() {
      return TeamFactory.createTeam(vm.newTeam)
                .then(getTeams)
    }

    function createAward() {
      return TeamFactory.createAward(vm.newTeam, vm.team.id)
                .then(addAward)
    }

    function addAward(data) {
      vm.team.awards.push(data);
      getAwards();
      vm.award = {};
      vm.form.$setPristine();
      vm.form.$setUntouched();
      return vm.awards.push(data);
    }


    function setTeams(data) {
      return vm.teams = data;
      // vm.form.$setPristine();
      // vm.form.$setUntouched();
    }

    function setAwards(data) {
      return vm.awards = data.filter(function(award) {
        return (award.team_id == vm.team.id)
      });
    }

  };
  
  angular
  .module('app')
  .controller('TeamsController', TeamsController);
}());