(function(){
'use strict';

var mod = angular.module("Menuapp");
mod.component("categoriesList",{
  templateUrl : "/Templates/Categories.template.html",
  bindings:{
    items: "<"
  }

});

})();
