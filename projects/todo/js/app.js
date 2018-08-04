var myApp = angular.module('myApp', [])
.controller("Ctrl", function ($scope) {

    $scope.tempInput = "";
    $scope.tasksArray = ["Сходить в магаз", "Позвонить куда-нибудь"];

    $scope.addNew = function () {
        $scope.tasksArray.push($scope.tempInput)
    }



});

