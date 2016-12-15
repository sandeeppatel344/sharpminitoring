
app.factory("entriesformService",function($http){
	var obj = {};
	obj.saveEntries = function(postdata){
		return $http.post(userserviceapiurl+"entries/add",postdata)
	}
	obj.getAllEntries = function(){
		return $http.post(userserviceapiurl+"entries/add",postdata)
	}
	obj.editEntries = function(id){
		return $http.post(userserviceapiurl+"entries/edit?id=",id)
	}
	obj.updateEntries = function(postdata){
		return $http.post(userserviceapiurl+"entries/update",postdata)
	}
	obj.deleteEntries = function(id){
		return $http.post(userserviceapiurl+"entries/delete?id=",id)
	}
	

	return obj;
})