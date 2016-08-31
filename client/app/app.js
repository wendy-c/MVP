//a module is a collection of configuration and run blocks which get applied to the application during the bootstrap process, configuration blocks and run blocks
angular.module('pawMe', ['pawMe.search'])

// .config(function($stateProvider, $urlRouterProvider) {
//   //config takes injectables like Providers as pararms
//   //get executed during the provider registrations and configuration phase
//   $urlRouterProvider.otherwise('/search');

//   $stateProvider
//     .state('/search', {
//       url: '/search',
//       templateUrl: '/search.html'
//     })
//     .state('/liked', {
//       url: '/liked',
//       templateUrl: '/liked.html'
//     })

// });

//	.run(function() {
//run takes injectables like Providers as pararms
//get execited after the injector is created and are used to kickstart the applcation

//});