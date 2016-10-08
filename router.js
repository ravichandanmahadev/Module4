(function(){

angular.module("Menuapp")
.config(Routeconfig);

Routeconfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function Routeconfig($stateProvider,$urlRouterProvider)
{
  $urlRouterProvider.otherwise("/");


    $stateProvider.state("Home" , {
      url:"/",
      templateUrl:"/Templates/Home.template.html",
      ncyBreadcrumb: { label: 'Home' }
    });

  $stateProvider.state("Categories" , {
    url:"/categories",
    templateUrl:"/Templates/maincategory.template.html",
    controller:"Categoriescontroller as ctrl",
    ncyBreadcrumb: { label: 'Categories'  },
    resolve :{
      items: ['MenuService', function(MenuService){
        return MenuService.getAllCategories();
      }]
    }
  });
  $stateProvider.state("Categories.itemDetails" , {
    url:"/item-details/{Category}",
    templateUrl:"Templates/Items.template.html",
    controller:"Itemscontroller as ctrl1",
    ncyBreadcrumb: {
      label: 'Item Detail page'
    },
    resolve :{
        items: ['MenuService','$stateParams', function(MenuService, $stateParams){
        return MenuService.getItemsForCategory($stateParams.Category);
      }]
    }
});
}
})();
