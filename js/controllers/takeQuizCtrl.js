app.controller('takeQuizCtrl', function($scope) {
    
    $scope.answers = []
    $scope.letters = ['A', 'B', 'C', 'D', 'E', 'F']
    
    $scope.goBack = function() {
        if($scope.currentQuestion > 0) {
            $scope.currentQuestion-=1;
        }
    }
    
    $scope.goNext = function() {
        if($scope.currentQuestion < $scope.currentQuiz.questions.length - 1) {
            $scope.currentQuestion+=1;
        }
    }
    
    $scope.finishQuiz = function() {
        
       if(!$scope.classes[$scope.currentClass].studentList[$scope.currentUser]) {
           $scope.classes[$scope.currentClass].studentList.push($scope.currentUser);  
       }//adds current user to the list of students in class that have taken the quiz 
        
        if(!$scope.classes[$scope.currentClass].quizzesTaken[$scope.currentQuiz]) {
            $scope.classes[$scope.currentClass].quizzesTaken[$scope.currentQuiz.name] = {
                answerKey: [],
                studentNameAnswer: {}
            }//adds quiz to class list of quizzes taken by this class
            
            for(var x = 0; x < $scope.currentQuiz.questions.length; x+=1) {
                $scope.classes[$scope.currentClass].quizzesTaken[$scope.currentQuiz.name].answerKey.push($scope.currentQuiz.questions[x].correctChoice)
            }//adds answer key to quiz in class
        }
        $scope.classes[$scope.currentClass].quizzesTaken[$scope.currentQuiz.name].studentNameAnswer[$scope.currentUser] = $scope.answers;
        $scope.answers = [];
        $scope.$emit('Send Class Data');
    }
    
    $scope.chooseAnswer = function(str) {
        $scope.answers[$scope.currentQuestion] = str;
        console.log($scope.answers);
    }
            
});