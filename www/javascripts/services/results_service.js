angular.module('hackathon')
  .factory('resultService', function($q, $http) {
    searchResults = false;

    function add(resultsObj) {
      console.log('adds results..');
      searchResults = resultsObj.hits;
    }

    function getResult() {
      return {
        image: "http://www.tivi.de/imperia/md/images/loewenzahn/p_1er_160x170/artikelsendunglogo.gif",
        title: "Titel",
        resource_types: [
          "Bild",
          "Simulation",
          "Werkzeug"
        ],
        description: "Description",
        educational_description: ["Englisch", "Fremdsprachen"],
        subject: ['Context', 'Context'],
        age_range: '5-12',
        rights_de: 'Rights',
        competence_entry: 'verwenden E-Mail, Chat und Handy zur Kommunikation und beschreiben Vor- und Nachteile der Kommunikationsformen.',
        publisher: ['Publisher', 'publisher']
      };
    }

    function getAll() {
      return searchResults;
    }

    return {
      add: add,
      getResult: getResult,
      getAll: getAll
    };
  });
