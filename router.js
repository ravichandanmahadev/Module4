(function(){

angular.module("Menuapp")
.config(Routeconfig);

Routeconfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function Routeconfig($stateProvider,$urlRouterProvider)
{
  $urlRouterProvider.otherwise("/");


    $stateProvider.state("Home" , {
      url:"/",
      templateUrl:"Templates/Home.template.html",
      ncyBreadcrumb: { label: 'Home' }
    });

  $stateProvider.state("Categories" , {
    url:"/Categories",
    templateUrl:"Templates/maincategory.template.html",
    controller:"Categoriescontroller as ctrl",
    resolve :{
      items: ['MenuService', function(MenuService){
        return MenuService.getAllCategories();
      }]
    }
  });
  $stateProvider.state("itemDetails" , {
    url:"/item-details/{Category}",
    templateUrl:"Templates/Items.template.html",
    controller:"Itemscontroller as ctrl1",
    resolve :{    
        item: ['MenuService','$stateParams', function(MenuService, $stateParams){
        return MenuService.getItemsForCategory($stateParams.Category);
      }]
    }
});
}
})();
