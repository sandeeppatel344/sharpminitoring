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

    }).state('sharpmonitoring.reportappstore', {
        url : '/reportappstore',

        views : {
            '@' : {
                templateUrl : 'app/reports/views/reportappstore.html',
                controller:'reportappstoreCtrl'
            }
        }

    }).state('sharpmonitoring.workingtimereport', {
        url : '/workingtimereport',

        views : {
            '@' : {
                templateUrl : 'app/reports/views/workingtimereport.html',
                controller:'workingTimeCtrl'
            }
        }

    }).state('sharpmonitoring.entryreport', {
        url : '/entryreport',

        views : {
            '@' : {
                templateUrl : 'app/reports/views/entryreport.html',
                controller:'entryreportCtrl'
            }
        }

    })
}]);

