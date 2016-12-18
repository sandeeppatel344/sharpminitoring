/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

    $stateProvider.state('sharpmonitoring.userpasswordreport', {
        url : '/userpasswordreport',

        views : {
            '@' : {
                templateUrl : 'app/reports/views/userandpasswordreport.html',
                controller:'userandpasswordCtrl'
            }
        }

    })
}]);

