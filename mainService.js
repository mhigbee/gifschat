angular.module('gifsChat').service('mainService', function($http, $q){

    var gifUrl = 'http://api.giphy.com/v1/gifs/search?q=';
    var apiKey = '&api_key=dc6zaTOxFJmzC'

    this.getGifs = function (queryText){
        return $http.get(gifUrl+queryText+apiKey).then(function(response){
            return response.data.data
        }).catch(function(error){
            return console.error(error)
        });
    };
    //https://github.com/Giphy/GiphyAPI
});