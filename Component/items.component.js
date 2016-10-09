(function(){
'use strict';
var mod = angular.module("Menuapp");
mod.component("itemDetail", {
  templateUrl : "Templates/itemdetail.template.html",
  bindings:{
    item: "<"
  }
});
})();
