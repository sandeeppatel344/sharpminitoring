/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

    $stateProvider.state('sharpmonitoring.product', {
        url : '/product',
        views : {
            '@' : {
                templateUrl : 'app/product/views/product.html',
                controller:'productCtrl'
            }
        }

    }).state('sharpmonitoring.listofproduct', {
        url : '/listofproduct',
        views : {
            '@' : {
                templateUrl : 'app/product/views/listofproduct.html',
                controller:'listOfProduct'
            }
        }

    })
}]);

