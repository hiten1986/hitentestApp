/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('DataService', ['$document','$http', function ($document,$http) {
  'use strict';

  var pub = {},
  eventListeners = {
      'userClicked' : []
    };;
  
  pub.addEventListener = function(eventName,callback){
	eventListeners[eventName].push(callback);  
  };
  
  pub.userClicked = function(user){
	  for(var i = 0;i < eventListeners.userClicked.length; i++){
		eventListeners.userClicked[i](user);  
	  }
  };
  
  pub.getUsers = function(){
	  return $http.get("https://unsubstantial-deplo.000webhostapp.com/users.json");
  }
  return pub;
  
}]);