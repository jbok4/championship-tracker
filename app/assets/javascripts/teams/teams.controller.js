(function() {
  'use strict';

  function TeamsController(TeamFactory) {
    
    var vm = this;
    vm.name = "Current Teams";
    vm.getTeam = getTeam;
    vm.createTeam = createTeam;
    vm.updateTeam = updateTeam;
    vm.deleteTeam = deleteTeam;
    
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

    function getTeam() {

    }

    function createTeam() {
      return TeamFactory.createTeam(vm.newTeam)
            .then(getTeams)
    }

    function updateTeam() {

    }

    function deleteTeam() {

    }

    function setTeams(data) {
      return vm.teams = data;
    }


  };
  
  angular
  .module('app')
  .controller('TeamsController', TeamsController);
}());