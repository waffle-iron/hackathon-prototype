angular.module('hackathon')
  .factory('resultService', function($q, $http) {
    searchResults = false;

    function add(resultsObj) {
      console.log('adds results..');
      searchResults = resultsObj.hits;
    }

    function getAll() {
      return searchResults;
    }

    return {
      add: add,
      getAll: getAll
    };
  });
