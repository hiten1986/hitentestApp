/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('DetailPageController', ['$scope', '$http', 'InitService','DataService', function ($scope, $http, InitService,DataService) {
  'use strict';
  
  InitService.addEventListener('ready', function () {
    
	DataService.addEventListener('userClicked',function(user){
		//console.log('in detail page');
		//console.log(user);
		$scope.user = user;
	});
  });
  
}]);