//a module is a collection of configuration and run blocks which get applied to the application during the bootstrap process, configuration blocks and run blocks
angular.module('findMyPaw', ['findMyPaw.search'
	])

.config(function($httpProvider) {
		//config takes injectables like Providers as pararms
		//get executed during the provider registrations and configuration phase

  // $routeProvider.
  // when('/', {
  //   templateUrl: 'app/search/search.html',
  //   controller: 'searchController'
  // }).
  // when('/liked', {
  //   templateUrl: 'app/likes/liked.html',
  //   controller: 'likesController'
  // });

		//httpProvider

	}).factory(function() {

	}).run(function() {
		//run takes injectables like Providers as pararms
		//get execited after the injector is created and are used to kickstart the applcation

	});