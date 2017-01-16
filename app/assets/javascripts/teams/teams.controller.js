(function() {
  'use strict';

  function TeamsController(TeamFactory) {
    
    var vm = this;
    vm.name = "Current Teams";
    vm.getTeams = getTeams;
    vm.getAwards = getAwards;
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

    }

    function createTeam() {
      return TeamFactory.createTeam(vm.newTeam)
            .then(getTeams)
    }

    function createAward() {
      return TeamFactory.createAward(vm.newTeam)
            .then(getTeams)
    }


    function setTeams(data) {
      return vm.teams = data;
    }


  };
  
  angular
  .module('app')
  .controller('TeamsController', TeamsController);
}());