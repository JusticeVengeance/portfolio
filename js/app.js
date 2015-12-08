// app.js
var justinVinge = angular.module('justinVinge', ['ui.router']);

justinVinge.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })
        
        // EXTREMEDY PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('extremedy', {
            url: '/extremedy',
            templateUrl: 'pages/extremedy.html' 
        })

}); // closes $routerApp.config()