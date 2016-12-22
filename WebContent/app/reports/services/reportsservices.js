/**
 * Created by sandeep on 12/18/2016.
 */
app.factory("reportsService",function($http,$filter){
    var obj = {};
    obj.getUserAndPassword = function(){
        return $http.get(userserviceapiurl+"registration/getUsernameAndPassword")
    }
    obj.getEmployeeWorkingTime = function(filterData){
        filterData.fromdate = $filter('date')(filterData.fromdate,'yyyy-MM-dd');
        filterData.todate = $filter('date')(filterData.todate,'yyyy-MM-dd');
        return $http.post(userserviceapiurl+"login/usercheckinoutreport",filterData)
    }

    obj.getRegisteredUser = function(){
        return $http.get(userserviceapiurl+"registration/getRegisteredUsers")
    }
    obj.getEntryReport = function(){
        return $http.get(userserviceapiurl+"entries/entriesReport")
    }
    return obj;
})
