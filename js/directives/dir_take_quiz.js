app.directive('takeQuiz', function($compile) {
    
    var directive = {}
    
    directive.restrict = 'A';
    
    directive.templateUrl = 'pages/take-quiz.html';
        
    return directive;
    
});

