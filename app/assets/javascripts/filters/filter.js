(function() {
  'use strict';

  // function customSort(teams) {
  //   return {    
  //     teams.sort(function(a, b){
  //      return b.upvote-a.upvote
  //     })
  //   }
  // })

function sortByUpvote(a, b) {
    var sortStatus = 0;
 
    if (a.upvote < b.upvote) {
        sortStatus = -1;
    } else if (a.upvote > b.upvote) {
            sortStatus = 1;
    }
    return sortStatus;
}
 
teams.sort(sortByUpvote);

  angular
    .module('app')
    .filter('sortByUpvote', sortByUpvote);

}());