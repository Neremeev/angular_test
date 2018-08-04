questApp.controller('QuestionController',
    function QuestionController($scope, $http){

        $scope.loaded=false;

        $scope.load = function (){
            $http({method:'GET', url: 'question.json'}).
            then(function success(response) {
                    $scope.question=response.data.question;
                    $scope.loaded=true;
                    console.log("код ответа: " + response.status);
                    console.log("объем данных: " + response.headers("content-length"));
                }, function error(response){
                    console.log("Возникла ошибка");
                    console.log("код ответа: " + response.status);
                }
            );
        };

        $scope.voteUp = function (answer){
            answer.rate++;
        };
        $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)