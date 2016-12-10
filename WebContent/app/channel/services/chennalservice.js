/**
 * Created by sandeep on 12/8/2016.
 */
app.factory("channelService",function($http){
    var obj = {};
    obj.saveChannel = function(channeldata){
        return $http.post(userserviceapiurl+"channel/add",channeldata);
    }
    obj.getChannelList = function(){
        return $http.get(userserviceapiurl+"channel/getChannel");
    }
    obj.editChannel = function(id){
        return $http.get(userserviceapiurl+"channel/edit?channelid="+id);
    }

    obj.deleteChannel = function(id){
        return $http.get(userserviceapiurl+"channel/delete?channelid="+id);
    }

    obj.updateChannel = function(data){
        return $http.post(userserviceapiurl+"channel/update",data);
    }
    return obj;
})
