(function() {
  'use strict';

  function TeamsController(TeamFactory, $stateParams) {
    
    var vm = this;
    vm.year = $stateParams.year;
    vm.name = "Current Teams";
    vm.getTeams = getTeams;
    vm.createTeam = createTeam;
    vm.upVote = upVote;
    vm.iterateAwards = iterateAwards;
    vm.newAwards = [];
    
 
    // instantiated info
    activate();


    // defined methods
    function activate() {
      getTeams(); 

    }

    function getTeams() {
      return TeamFactory.getTeams()
                .then(setTeams)
                .then(iterateAwards)
    }


    function createTeam() {
      return TeamFactory.createTeam(vm.newTeam)
                .then(function() {
                  vm.newTeam = {}
                  // vm.newTeam.$setPristine();
                  // vm.newTeam.$setUntouched();

                })
                .then(getTeams)
    }


    function setTeams(data) {
      vm.teams = data.sort(function(a, b) {
        return b.upvote - a.upvote;
        });
    }

    function upVote(team) {
      return TeamFactory.upvoteTeam(team)
                        .then(getTeams)
    }

    function iterateAwards() {
      vm.teams.forEach((team) => {
        team.awards.forEach((award) => {
          if (award.year == parseInt(vm.year)) {
            vm.newAwards.push(`${award.title}, ${award.year} ${team.name}`)
          }
        })
      })
      // console.log(vm.newAwards);
    }

  };
  
  angular
  .module('app')
  .controller('TeamsController', TeamsController);
}());