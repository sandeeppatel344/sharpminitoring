/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

    $stateProvider.state('sharpmonitoring.product', {
        url : '/product',
        params:{isnew:null,id:null},
        cache:false,
        views : {
            '@' : {
                templateUrl : 'app/product/views/product.html',
                controller:'productCtrl'
            }
        }

    }).state('sharpmonitoring.listofproduct', {
        url : '/listofproduct',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'app/product/views/listofproduct.html',
                controller:'listOfProduct'
            }
        }

    })
}]);

