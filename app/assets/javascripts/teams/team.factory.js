(function() {

  'use strict';

  function TeamFactory($http) {
      return {
        getTeams: getTeams,
        getTeam: getTeam,
        createTeam: createTeam,
        updateTeam: updateTeam,
        deleteTeam: deleteTeam
      }

      function getTeams() {
        return $http.get('/teams')
                    .then(handleResponse)
                    .catch(handleError);
      }

      function getTeam() {

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

      function updateTeam() {

      }

      function deleteTeam() {

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