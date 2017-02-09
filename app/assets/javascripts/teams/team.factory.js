(function() {

  'use strict';

  function TeamFactory($http) {
      return {
        getTeams: getTeams,
        getAwards: getAwards,
        createTeam: createTeam,
        createAward: createAward,
        upvoteTeam: upvoteTeam,
        getSportsFeed: getSportsFeed
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

    function upvoteTeam(team){
      return $http.put('/teams/' + team.id + '/upvote.json')
        .success(function(data){
          team.upvote += 1;
        });
    };

    function getSportsFeed() {   
        var username = 'jbok4'
        var password = 'mysports420'
        var url = 'https://www.mysportsfeeds.com/api/feed/pull/nhl/2015-2016-regular/daily_game_schedule.json?fordate=20151009&'

        var req = {
          method: 'GET',
          url: url,
          async: false,
          headers: {
             "Authorization": "Basic " + btoa({username} + ":" + {password}),
            'Content-Type': 'application/json'
          }
        }

      return $http(req)
                  .then(handleResponse)
                  .catch(handleError)

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