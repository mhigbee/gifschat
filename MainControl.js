angular.module('gifsChat').controller('MainControl', function(mainService, $scope){

    $scope.gifs;

    $scope.buttonClick = function(){
        mainService.getGifs($scope.gifQuery)
        .then(function(response){
            $scope.gifs = response;
            console.log($scope.gifs);
        }).catch(function(error){
            return console.log(error)
        })
    }

});