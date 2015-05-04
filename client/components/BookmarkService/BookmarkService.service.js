'use strict';

angular.module('bookmanagerApp')
  .factory('BookmarkService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var bookmarks = {
      bookmarks: []
    };
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getBookmarks : function (){
        return bookmarks;
      }
    };
  });
