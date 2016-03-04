angular.module('hackathon')
  .factory('leanlineApiService', function($q, $http) {
    function find(searchParams) {
      query = searchParams.term + '&discipline[]=' + searchParams.subject + '&context=' + searchParams.class + '&size=5';
      url = 'http://llnrw4.test.publicplan.de/learnline3-rest/rest/e4863bbb-6edb-4995-b2c6-a8a9791bf9d0/search?q=' + query;
      return $http.get('https://marcal.cepheus.uberspace.de/nrwhack.php?url=' + url);
    }

    return {
      find: find
    };
  });
