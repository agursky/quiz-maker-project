app.controller('mainCtrl', function($scope, classList, quizList) {
    
    classList.getInfo().then(function(data) {
        $scope.classes = data;
    });
    
    quizList.getInfo().then(function(data) {
        $scope.quizzes = data;
        $scope.currentQuiz = $scope.quizzes['cookie quiz'];
        $scope.currentUser = 'Andrew Gursky';
        $scope.currentClass = 'first class';
        $scope.currentQuestion = 0;
    });
    
    $scope.init = function() {
        $scope.management = {
            viewMode: 'teacherView',
            teacherDashView: 'viewQuizzes'
        }
    }
    
    $scope.switchView = function(str1, str2) {
        $scope.management[str1] = str2;
    }
    
    $scope.$on('Send Quiz Data', function() {
        quizList.sendData($scope.quizzes);
    })
    
    $scope.$on('Send Class Data', function() {
        classList.sendData($scope.classes);
    })
    
    
            
});