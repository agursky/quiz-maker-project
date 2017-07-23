app.controller('makeQuizCtrl', function($scope) {
      
    $scope.newQuiz = {
        name: '',
        status: '', 
        questions: [
            
        ], 
        classList: [], 
        newQuestion: {
            questionText: '', 
            answerChoices: [], 
            correctChoice: 0
        }
    }
    
    $scope.addAnswerChoice = function() {        
        $scope.newQuiz.newQuestion.answerChoices.push($scope.nextAnswerChoice);
        $scope.nextAnswerChoice = '';
    }
        
    $scope.addQuestion = function() {
        $scope.newQuiz.questions.push($scope.newQuiz.newQuestion);
        $scope.newQuiz.newQuestion = {
            questionText: '', 
            answerChoices: [], 
            correctChoice: 0
        };
    }
    
    $scope.saveQuiz = function() {
        $scope.quizzes[$scope.newQuiz.name] = $scope.newQuiz;
        $scope.newQuiz = {
            name: '',
            status: '', 
            classList: [],
            questions: [

            ], 
            newQuestion: {
                questionText: '', 
                answerChoices: [], 
                correctChoice: 0
            }
        }
        $scope.$emit("Send Quiz Data");
    }
    
    $scope.addClass = function(str) {
        $scope.$emit("Send Class Data");
        $scope.classes[str] = {
            studentList: [],
            quizzesTaken: {}, 
            quizPermission: false
        }
        $scope.newClassName = '';
        console.log($scope.classes);
    }
});