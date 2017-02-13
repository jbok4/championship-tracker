(function() {

  'use strict';

  function TeamFactory($http) {
      return {
        getTeams: getTeams,
        getAwards: getAwards,
        createTeam: createTeam,
        createAward: createAward,
        upvoteTeam: upvoteTeam,
        getSportsFeed: getSportsFeed,
        getBaseballFeed: getBaseballFeed,
        getFootballFeed: getFootballFeed
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
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var date = (year + '0' + month + day).toString()
        var url = 'https://www.mysportsfeeds.com/api/feed/pull/nhl/2016-2017-regular/daily_game_schedule.json?fordate=' + date +'&'
        var req = {
          method: 'GET',
          url: url,
          async: false,
          headers: {
             "Authorization": "Basic " + btoa(username + ":" + password),
            'Content-Type': 'application/json'
          }
        }

      return $http(req)                  
                  .then(handleResponse)
                  .catch(handleError)

    }

    function getBaseballFeed() {   
        var username = 'jbok4'
        var password = 'mysports420'
        var url = 'https://www.mysportsfeeds.com/api/feed/pull/mlb/2016-regular/overall_team_standings.json?teamstats=W,L,RF,RA'
        var req = {
          method: 'GET',
          url: url,
          async: false,
          headers: {
             "Authorization": "Basic " + btoa(username + ":" + password),
            'Content-Type': 'application/json'
          }
        }

      return $http(req)                  
                  .then(handleResponse)
                  .catch(handleError)

    }

      function getFootballFeed() {   
        var username = 'jbok4'
        var password = 'mysports420'
        var url = 'https://www.mysportsfeeds.com/api/feed/pull/nfl/2016-2017-regular/overall_team_standings.json?'
        var req = {
          method: 'GET',
          url: url,
          async: false,
          headers: {
             "Authorization": "Basic " + btoa(username + ":" + password),
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