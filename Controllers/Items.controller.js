(function(){
'use strict';
var mod = angular.module("Menuapp");
mod.controller("Itemscontroller", Itemscontrollerfunction);

Itemscontrollerfunction.$inject = ['item']
function Itemscontrollerfunction(item)
{
  var ctrl = this;
  ctrl.item = item.data.menu_items;
}
})();
