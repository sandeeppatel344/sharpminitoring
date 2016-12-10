/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

    $stateProvider.state('sharpmonitoring.registration', {
        url : '/registration',
        views : {
            '@' : {
                templateUrl : 'app/registration/views/registration.html',
                controller:'registrationCtrl'
            }
        }

    }).state('sharpmonitoring.listofregistration', {
        url : '/listofregistration',
        views : {
            '@' : {
                templateUrl : 'app/registration/views/listofregistration.html',
                controller:'listOfRegistrationCtrl'
            }
        }

    })
}]);

