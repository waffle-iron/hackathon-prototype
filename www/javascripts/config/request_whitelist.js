angular.module('hackathon')
  .config(function($sceDelegateProvider, $httpProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://marcal.cepheus.uberspace.de/**',
      'http://*.cepheus.uberspace.de/**',
      'https://marcal.cepheus.uberspace.de/nrwhack.php'
    ]);
  }
);
