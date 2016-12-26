
app.factory("entriesformService",function($http){
	var obj = {};
	obj.saveEntries = function(postdata){
		return $http.post(userserviceapiurl+"entries/add",postdata);
	}
	obj.getAllEntries = function(){
		return $http.get(userserviceapiurl+"entries/all");
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