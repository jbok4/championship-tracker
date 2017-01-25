(function() {
  'use strict';

  function TeamsController(TeamFactory, $state) {
    
    var vm = this;
    vm.name = "Current Teams";
    vm.getTeams = getTeams;
    vm.createTeam = createTeam;
    vm.upVote = upVote;
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


    function setTeams(data) {
      // vm.teamForm.$setPristine();
      // vm.teamForm.$setUntouched();
      // vm.team = {};
      vm.teams = data;
      for (var i = 0; i < vm.teams.length; i++) { 
      vm.teams[i].upVotes = 0;
      }
    }



    function upVote(team) {
      team.upVotes++;
    }


  };
  
  angular
  .module('app')
  .controller('TeamsController', TeamsController);
}());