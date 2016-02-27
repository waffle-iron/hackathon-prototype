angular.module('hackathon')
  .factory('resultService', function($q, $http) {
    searchResults = [
      {
        id: "Igel123",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Igel01.jpg/440px-Igel01.jpg",
        title: "Igel Steckbrief",
        resource_types: [
          "Bild",
          "Steckbrief"
        ],
        description: "Wichtige Fakten zu Igeln.",
        educational_description: ["Biologie", "Tiere"],
        subject: ['Biologie'],
        age_range: '5-12',
        rights_de: 'Rights',
        competence_entry: 'Elementarbereich » Informieren und Recherchieren » TK 2',
        publisher: ['Publisher', 'publisher']
      },
      {
        id: "Igel234",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Keqs_young_european_hedgehog1.jpg/440px-Keqs_young_european_hedgehog1.jpg",
        title: "Igel im Wald",
        resource_types: [
          "Bild"
        ],
        description: "Bildersammlung von Igeln im Wald",
        educational_description: ["Biologie", "Igel"],
        subject: ['Biologie'],
        age_range: '5-12',
        rights_de: 'Rights',
        competence_entry: 'Elementarbereich » Informieren und Recherchieren » TK 2',
        publisher: ['Publisher', 'publisher']
      }
    ];

    function add(resultsObj) {
      console.log('adds results..');
      //searchResults = resultsObj.hits.hits;
    }

    function getResult() {
      return searchResults[0];
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
