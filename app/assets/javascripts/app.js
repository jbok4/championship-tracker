(function() {
    'use strict'

    angular
        .module('app', ['ui.router', 'templates'])
        .config(function($httpProvider) {
          $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name-csrf-token]').attr('content');
        })
        .controller('AboutController', function($scope) {
              $scope.title = 'About The App';
              
              $scope.subtitle = 'Thank you for visiting the Championship Tracker!';
              
              $scope.text = 'A wikipedia style site (where visitors can enter both new awards and teams) to build an encyclopedic reference of all your favorite teams achievements. Visit an existing team and read about or add a new title, and if your favorite team or the team youre trying to find out about isnt on the list, add it and watch as fellow visitors do some research and add some facts. The site is always growing.';
              
              $scope.pic = 'http://www.btlliners.com/wp-content/uploads/2016/02/sports-field-liners.jpg';
        });
        
}());