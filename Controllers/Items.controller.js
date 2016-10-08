(function(){
'use strict';
var mod = angular.module("Menuapp");
mod.controller("Itemscontroller", Itemscontrollerfunction);

Itemscontrollerfunction.$inject = ['items']
function Itemscontrollerfunction(items)
{
  var ctrl = this;
  ctrl.menuList = items.data.menu_items;
  console.log(ctrl.menuList);
}
})();
