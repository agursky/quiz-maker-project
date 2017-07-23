//Contains functions to read and write from Application to JSON file


app.factory('quizList', function($http) {
    
    var count = 0;
    
    var classService = {};
    classService.getInfo = function() {
        var promise = $http.get('data/quizList.json').then(function successCallback(response) {
            return response.data;
        }, function errorCallback(response) {
            console.log(data.status);
        });
        return promise;
    };
    
    classService.sendData = function(data) {
        $http.post('data/quizData.php', data).then(function successCallback(response) {
            
        }, function errorCallback(response) {
            console.log(response);
        });
    };

    classService.statusHolder = '';
    
    return classService;
    
});