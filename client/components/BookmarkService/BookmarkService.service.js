'use strict';

angular.module('bookmanagerApp')
  .factory('BookmarkService', ['$http', function($http){
    // Service logic
    // ...

    // var bookmarks = [];
    // Public API here
    var service = {
      
      bookmarks : [],

      upRank: function(id_param) {
        return $http.get('/api/linkmanagers/:id', function(data){
          // update the rank on the ui
            // angular.copy(data, bookmarks)
        })
      },

      getAllBookmarks : function (){
        return $http.get('/api/linkmanagers').
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            angular.copy(data, service.bookmarks)

          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

          });
      }
    };


    return service;
  }]);
