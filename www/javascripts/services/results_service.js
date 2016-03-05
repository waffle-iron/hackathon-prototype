angular.module('hackathon')
  .factory('resultService', function($q, $http) {
    var object = {
      data: []
    };

    object.add = function(resultsObj) {
      var hits = resultsObj.hits;
      console.log(hits);
      hits.hits.forEach(function(hit) {
        object.data.push({
          id: hit._id,
          image: hit._source["lom:relation_hasThumbnail"],
          title: hit._source["lom:general_title"],
          resource_types: hit._source["lom:educational_learningRehit._sourceType"],
          description: hit._source["lom:general_description"],
          subject: hit._source["ll3:classificationDisciplineEntry"],
          age_range: hit._source["lom:educational_typicalAgeRange"],
          rights_de: hit._source["lom:rights_de"],
          competence_entry: hit._source["lom:classificationCompetencyEntry"],
          publisher: hit._source["lom:publisher"]
        });
      });
    };

    object.getResult = function() {
      return object.data[0];
    };

    object.getAll = function() {
      return object.data;
    };

    return object;
  });
