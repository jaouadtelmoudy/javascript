define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider) {
        $stateProvider.state('formation',{
            url: '/formation',
            templateUrl: 'templates/formations/liste.html',
            controller:'FormationCtrl'
        })
        .state('experience',{
            url: '/experience',
            templateUrl: 'templates/experiences/liste.html',
            controller: 'ExperienceCtrl'
        });
    })
});