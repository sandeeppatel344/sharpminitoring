/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        //$urlRouterProvider.otherwise('sharpmonitoring/channel');
        $stateProvider.state('sharpmonitoring.entriesform', {
            url : '/entriesform',
            params:{isnew:false}
            views : {
                '@' : {
                    templateUrl : 'app/entriesform/views/entriesform.html',
                    controller:'entriesformCtrl'
                }
            }

        }).state('sharpmonitoring.listofentries', {
            url : '/listofentries',
            params:{isnew:false}
            views : {
                '@' : {
                    templateUrl : 'app/entriesform/views/listofentries.html',
                    controller:'listOfEntriesCtrl'
                }
            }

        })
    }]);

