(function() {

  'use strict';

  function TeamFactory($http) {
      return {
        getTeams: getTeams,
        getAwards: getAwards,
        createTeam: createTeam,
        createAward: createAward,
        editAward: editAward
      }

      function getTeams() {
        return $http.get('/teams')
                    .then(handleResponse)
                    .catch(handleError);
      }


      function getAwards(team_id) {
        var url = `/teams/${team_id}/awards`
        var req = {
          method: 'GET',
          url: url,
          headers: {
            'Content-Type': 'application/json'
          }
        }

      return $http(req)
                  .then(handleResponse)
                  .catch(handleError)
    }

      function createTeam(team) {
          var req = {
            method: 'POST',
            url: '/teams',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              team: team
            }
          };
          return $http(req)
                .catch(handleError)
      }

      function createAward(award, team_id) {
      var url = `/teams/${team_id}/awards`
      var req = {
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          award: award
        }
      }

      return $http(req)
              .then(handleResponse)
              .catch(handleError)
    }

    function editAward() {
      
    }

      function handleResponse(response) {
          return response.data
      }

      function handleError(error) {
          console.log(error)
      }
  }


  angular
    .module('app')
    .factory('TeamFactory', TeamFactory);

}());