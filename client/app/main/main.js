'use strict';

/**
 * @ngdoc function
 * @name bookmarkAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookmarkAppApp
 */
angular.module('bookmanagerApp')
  .controller('MainCtrl', function ($scope, BookmarkService) {


	    $scope.addBookmark = function (title){
			if(!$scope.title || $scope.title === '' || !$scope.link || $scope.link === ''){
			 return; 
			}
	    	BookmarkService.bookmarks.push({
	    			title: $scope.title,
	    			link: $scope.link,
	    			rank: 0,
	    			tag: $scope.tag});

	    	//reset the title to empty
	    	$scope.title = '';
	    	$scope.link = '';


	    } 	
  		//wont load the bookmarks until BookmarkService loads
  		$scope.bookmarks = BookmarkService.bookmarks;
  });
