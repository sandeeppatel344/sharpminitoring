/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        //$urlRouterProvider.otherwise('sharpmonitoring/channel');
        $stateProvider.state('sharpmonitoring.entriesform', {
            url : '/entriesform',
            views : {
                '@' : {
                    templateUrl : 'app/login/views/entriesform.html',
                    controller:'entriesformCtrl'
                }
            }

        })
    }]);

