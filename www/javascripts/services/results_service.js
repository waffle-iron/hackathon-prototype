angular.module('hackathon')
  .factory('resultService', function($q, $http) {
    var object = {
      data: {}
    };

    object.add = function(resultsObj) {
      object.data = resultsObj.hits;
    }

    object.getResult = function() {
      var result = object.data.hits[0];
      var source = result._source;
      console.log(object.data);
      data = {
        id: result._id,
        image: source["lom:relation_hasThumbnail"],
        title: source["lom:general_title"],
        resource_types: source["lom:educational_learningResourceType"],
        description: source["lom:general_description"],
        subject: source["ll3:classificationDisciplineEntry"],
        age_range: source["lom:educational_typicalAgeRange"],
        rights_de: source["lom:rights_de"],
        competence_entry: source["lom:educational_typicalAgeRange"],
        publisher: source["lom:publisher"]
      };
      return data;
    }

    return object;
  });
