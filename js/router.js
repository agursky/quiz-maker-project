app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "pages/teacher-dash.html"
    })
    .when("/take-quiz", {
        templateUrl: "pages/take-quiz.html"
    })
    .when("/make-quiz", {
        templateUrl: "pages/make-quiz.html"
    })
    .when("/view-scores", {
        templateUrl: "pages/teacher-dash.html"
    })
    .when("/teacher-dash", {
        templateUrl: "pages/teacher-dash.html"
    })
    .otherwise({
        templateUrl: "pages/teacher-dash.html"
    })
    
})