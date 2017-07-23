app.directive('teacherDash', function($compile) {
    
    var directive = {}
    
    directive.restrict = 'A';
    
    directive.templateUrl = 'pages/teacher-dash.html';
        
    return directive;
    
});

