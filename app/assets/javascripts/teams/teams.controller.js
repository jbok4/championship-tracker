(function() {
  'use strict';

  function TeamsController(TeamFactory) {
    
    var vm = this;
    vm.name = "Current Teams";
    vm.getTeams = getTeams;
    vm.createTeam = createTeam;

    
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


    function createTeam() {
      return TeamFactory.createTeam(vm.newTeam)
                .then(getTeams)
    }

    function setTeams(data) {
      // vm.teamForm.$setPristine();
      // vm.teamForm.$setUntouched();
      // vm.team = {};
      return vm.teams = data;
    }


  };
  
  angular
  .module('app')
  .controller('TeamsController', TeamsController);
}());