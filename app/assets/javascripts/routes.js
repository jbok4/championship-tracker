(function() {
    'use strict'

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {

            // State routes
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.teams', {
                    url: 'teams',
                    templateUrl: 'teams/teams.html',
                    controller: 'TeamsController as vm'
                })
                .state('home.showTeam', {
                    url: 'teams/:id',
                    templateUrl: 'teams/show.html',
                    controller: 'TeamController as vm',
                    resolve: {
                        team: function($http, $stateParams) {
                          return $http.get('/teams/' + $stateParams.id);
                        }
                    }
                });


            // routes invalid routes to root url /
            $urlRouterProvider
                .otherwise('/')


               })
}());