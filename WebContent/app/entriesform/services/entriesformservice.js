
app.factory("entriesformService",function($http,localStorageService){
	var obj = {};
	obj.saveEntries = function(postdata){
      //  postdata.program_name = JSON.parse(postdata.program_name);
       // postdata.program_name = postdata.program_name.movie_name;
        //postdata.channel = postdata.channel.channel_name;
		return $http.post(userserviceapiurl+"entries/add",postdata);
	}
	obj.getAllEntries = function(){
        var userid = localStorageService.get("currentuserid")
		return $http.get(userserviceapiurl+"entries/fetchMyEntries?userid="+userid);
	}
    obj.getLatestFiveEntries = function(){
        var userid = localStorageService.get("currentuserid")
        return $http.get(userserviceapiurl+"entries/latestUserwiseEntries?userid="+userid)
    }
    obj.changeEntryStatus = function(data){
        return $http.post(userserviceapiurl+"entries/updateChannelStatus",data)
    }
	obj.editEntries = function(id){
		return $http.get(userserviceapiurl+"entries/edit?id="+id);
	}
	obj.updateEntries = function(postdata){
		return $http.post(userserviceapiurl+"entries/update",postdata);
	}
	obj.deleteEntries = function(id){
		return $http.get(userserviceapiurl+"entries/delete?id="+id);
	}

    obj.getChannelList = function(){
        return $http.get(userserviceapiurl+"channel/getChannel");
    }
    obj.getProgramsList = function(channelname){
        return $http.get(userserviceapiurl+"channel/getProgramByChannel?channelname="+channelname);
    }
    obj.getProductList = function(){
        return $http.get(userserviceapiurl+"product/fetchAllMovies");
    }
    obj.getSongsList = function(productname){
        return $http.get(userserviceapiurl+"product/fetchSongsByMovie?movieName="+"'"+productname+"'");
    }

	return obj;
})