(function(){
'use strict';
var mod = angular.module("Menuapp");
mod.controller("Categoriescontroller", Categoriescontrollerfunction);

Categoriescontrollerfunction.$inject = ['items']
function Categoriescontrollerfunction(items)
{
  var ctrl = this;
  ctrl.items = items.data;
}

})();
