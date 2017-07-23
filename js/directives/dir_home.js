app.directive('home', function($compile) {
    
    var directive = {}
    
    directive.restrict = 'A';
    
    directive.templateUrl = 'pages/home.html';
        
    return directive;
    
});

