(function() {
  'use strict';

  function TeamsController(TeamFactory, $state) {
    
    var vm = this;
    vm.name = "Current Teams";
    vm.getTeams = getTeams;
    vm.createTeam = createTeam;
    vm.upVote = upVote;
    // vm.sortByUpvote = sortByUpvote;

    
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
      vm.teams = data;
      data.sort(function(a, b) {
        return b.upvote - a.upvote;
    });
      return data;
    }

    function upVote(team) {
      return TeamFactory.upvoteTeam(team)
                        .then(getTeams)
    }


  };
  
  angular
  .module('app')
  .controller('TeamsController', TeamsController);
}());