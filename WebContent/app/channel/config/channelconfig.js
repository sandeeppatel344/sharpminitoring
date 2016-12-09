/**
 * Created by sandeep on 12/6/2016.
 */
app.config([ '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('sharpmonitoring/channel');
        $stateProvider.state('sharpmonitoring', {
            url : '/sharpmonitoring',
            abstract :true
        }).state('sharpmonitoring.channel', {
            url : '/channel',
            params:{isnew:null,id:null},
            cache:false,
            views : {
                '@' : {
                    templateUrl : 'app/channel/views/chennal.html',
                    controller:'channelCtrl'
                }
            }

        }).state('sharpmonitoring.listofchannel', {
            url : '/listofchannel',
            cache:false,
            views : {
                '@' : {
                    templateUrl : 'app/channel/views/listofchennal.html',
                    controller:'listOfChannel'
                }
            }

        })
    }]);

