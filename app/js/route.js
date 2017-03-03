//Routes
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: "views/landing.html",
    controller: 'landingController',
    controllerAs: 'landing'
  })
  
});
