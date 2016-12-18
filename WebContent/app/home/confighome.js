/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    //$urlRouterProvider.otherwise('sharpmonitoring/channel');
    $stateProvider.state('sharpmonitoring.home', {
        url : '/home',
        views : {
            '@' : {
                templateUrl : 'app/home/home.html',
                controller:'homeCtrl'
            }
        }

    })
}]);

