'use strict';

/**
 * @ngdoc function
 * @name bookmarkAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bookmarkAppApp
 */
angular.module('bookmarkAppApp')
  .controller('MyBooksCtrl', function ($scope, BookmarkService) {
    var bookmarks = [{title: 'post 2', link: 'http://google.com', rank: 8, tag: 'blur'},
		  {title: 'Thing', link: 'http://google.com', rank: 2, rank: 8, tag: "blah"},
		  {title: 'postything', link: 'http://google.com', rank: 0, rank: 8, tag: "slug"},
		  {title: 'other thing', link: 'http://google.com', rank: 23, rank: 8, tag: "blurg"},
		  {title: 'post', link: 'http://google.com', rank: 5, rank: 8, tag: "blurg"}];

    var addBookmark = function (title){
		if(!$scope.title || $scope.title === '' || !$scope.link || $scope.link === ''){
		 return; 
		}
    	bookmarks.push({
    			title: $scope.title,
    			link: $scope.link,
    			rank: 0,
                tag: $scope.tag});


    	//reset the title to empty
    	$scope.title = '';
    	$scope.link = '';


    } 

    var upRank = function (bookmark){
    	bookmark.rank += 1;

    }

    var description = true;
    $scope.toggleDiv = function(){
        console.log("toggleDiv")
    	if ($scope.description = false){
    		$scope.description = true
    	} else {
    		$scope.description = false    		
    	}
    	$scope.getIcon();
    }

    var getIcon = function (){
    	if (description){
    		return ' glyphicon-chevron-down'
    	} else {
    		return ' glyphicon-chevron-up';
    	}
    }

    var getDescription = function(){
        console.log("getDescription" + description)        
        $scope.description= description;
    };

    $scope.getDescription = getDescription;
    $scope.description = description;
    $scope.bookmarks = bookmarks;
    $scope.upRank = upRank;
    $scope.getIcon = getIcon;
    // $scope.toggleDiv = toggleDiv;
    $scope.addBookmark = addBookmark;
    // bind scope's bookmarks to the 
    BookmarkService.bookmarks = $scope.bookmarks;

  });
