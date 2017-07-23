app.directive('makeQuiz', function($compile) {
    
    var directive = {}
    
    directive.restrict = 'E';
    
    directive.templateUrl = 'pages/create-quiz.html';
        
    return directive;
    
});

