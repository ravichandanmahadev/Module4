(function(){
'use strict';
var mod = angular.module("Menuapp");
mod.component("itemDetail", {
  templateUrl : "/Templates/items.template.html",
  bindings:{
    Category: "<"
  }
});

})();
