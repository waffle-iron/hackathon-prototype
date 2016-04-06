angular.module('hackathon')
  .factory('leanlineApiService', function($q, $http, LEARNLINE_API) {
    function find(searchParams) {
      query = searchParams.term + '&discipline[]=' + searchParams.subject + '&context=' + searchParams.class + '&size=5';
      url = LEARNLINE_API.url + '?q=' + query;
      return $http.get(url);
    }

    return {
      find: find
    };
  });
