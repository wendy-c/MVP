angular.module('findMyPaw.search', [])
  .controller('searchController', function($scope, $http) {

    // $http({
    //   method: 'GET',
    //   url: 'http://api.petfinder.com/auth.getToken',
    //   key: 'ef465d7abe45d4e4b28f5a50802d2605',
    //   format: 'json'})
    //     .then(function(res) {
    //       console.log("here is my data", res);
    //     }, function(err) {
    //       console.log("there is an error", err);
    //     });

  // $scope.fetchData = function() {	
  // };

  $http({
    method: 'GET',
    url: 'http://api.petfinder.com/pet.find',
    data: {
    	key: 'ef465d7abe45d4e4b28f5a50802d2605',
    	secret: 'df3dadbecb0a1e664d4ec7a106f25cac',
      animal: 'cat',
      location: 94066,
      output: 30,
      format: 'json',
	    headers: {
	    	'Access-Control-Allow-Origin': '*'
      }
    }
  }).then(function(data) {
    console.log("there is my animal data", data);
  }, function(err) {
    console.log("error", err);
  })
});
