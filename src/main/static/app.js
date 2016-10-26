var volunteerService = angular.module("volunteerService", ["ui.router"]);

volunteerService.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "view/home.html",
            controller: "HomeController"
        })
        .state("calendar", {
            url: "/calendar",
            templateUrl: "view/calendar.html",
            controller: "CalendarController"
        })
        .state("service", {
            url: "/service",
            templateUrl: "view/serviceOverview.html",
            controller: "ServiceController"
        });
}]);