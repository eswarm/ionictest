var myModule = angular.module('services', []);

myModule.factory('AppService', function() {
  var appObj = {};

  appObj.getData = function() {
    data = [ "Registration", "Tea", "Session", "Party"];
    return data;
  };

  return appObj;
});
