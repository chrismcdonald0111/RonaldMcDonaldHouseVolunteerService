'use strict';

var volunteerService = angular.module("volunteerService", ['ui.router','ui.bootstrap']);

leads.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url:'/home',
            views:{
                "":{
                    templateUrl:"view/home.html",
                    controller:"HomeController"
                },
            }
        }).state('calendar',{
        url:'/calendar',
        views:{
            "":{
                templateUrl:"view/calendar.html",
                controller:"CalendarController"
            },
            }
        }).state('service', {
            url: "/service/:listid",
            views: {
                "": {
                    templateUrl: "view/volunteerServiceOverview.html",
                    controller: "ServiceController"
                },
            }
        }).state('serviceDetails', {
        url: "/service/:listid",
        views: {
            "": {
                templateUrl: "view/volunteerServiceDetails.html",
                controller: "ServiceController"
            },
        }
    });
});