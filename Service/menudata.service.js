(function(){
'use strict';
var mod = angular.module("data");
mod.service("MenuService", menuServicefunction);

menuServicefunction.$inject = ['$http'];
function menuServicefunction($http){
  var service = this;

  service.getAllCategories = function(){
    var url = "https://davids-restaurant.herokuapp.com/categories.json";
    var response = $http.get(url);
    return response;
  };

  service.getItemsForCategory = function(categoryShortName){
    var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
    var response = $http.get(url);
    return response;
  };

}

})();
