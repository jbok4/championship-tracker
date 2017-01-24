(function() {
  'use strict';

  function TeamsController(TeamFactory, $state) {
    
    var vm = this;
    vm.name = "Current Teams";
    vm.getTeams = getTeams;
    vm.createTeam = createTeam;
    // vm.addTeam = addTeam

    
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

    // function addTeam(data) {
    //   vm.teams.push(data);
    //   getTeams();
    //   vm.team = {};
    //   return vm.teams.push(data);
    // }

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