angular.module('hackathon')
  .controller('ResultController', function($scope, $state) {
    $scope.result = {
      image: "http://www.tivi.de/imperia/md/images/loewenzahn/p_1er_160x170/artikelsendunglogo.gif",
      title: "Titel",
      resource_types: [
          "Bild",
          "Simulation",
          "Werkzeug"
      ],
      description: "Description",
      educational_description: "Edu description",
      subject: ['Context', 'Context'],
      age_range: '5-12',
      rights_de: 'Rights',
      competence_entry: 'verwenden E-Mail, Chat und Handy zur Kommunikation und beschreiben Vor- und Nachteile der Kommunikationsformen.',
      publisher: ['Publisher', 'publisher']
    };
  }
);
