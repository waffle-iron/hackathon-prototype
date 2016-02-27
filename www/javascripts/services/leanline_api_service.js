angular.module('hackathon')
  .factory('leanlineApiService', function($q, $http) {
    function find(query) {
      console.log('TODO: need to add query to url request');
      url = 'http://llnrw.test.publicplan.de/learnline3-rest/rest/e4863bbb-6edb-4995-b2c6-a8a9791bf9d0/search?q=test'
      return $http.get('https://marcal.cepheus.uberspace.de/nrwhack.php?url=' + url);
    }

    return {
      find: find
    };
  });
