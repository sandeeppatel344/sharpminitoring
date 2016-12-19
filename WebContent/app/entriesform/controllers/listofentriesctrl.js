/**
 * Created by sandeep on 12/18/2016.
 */
app.controller("listOfEntriesCtrl",function($scope,$state,entriesformService,localStorageService){
	$scope.ListOfEntries = [];
	localStorageService.set("entryid","");
	$scope.getListOfEntries = function(){
		entriesformService.getAllEntries().then(function(res){
			$scope.ListOfEntries = res.data;
		},function(error){
			console.error(error);
		})
	}

	$scope.editEntries = function(id){
		localStorageService.set("entryid",id);
		$state.go("sharpmonitoring.entriesform",{isnew:false})
	}
	$scope.addNewEntries = function(){
		localStorageService.set("entryid","");
		$state.go("sharpmonitoring.entriesform",{isnew:true})	
	}

	$scope.deleteEntries = function(id){
	entriesformService.deleteEntries(id).then(function(res){
		//$scope.ListOfEntries = res.data;
		$state.reload();
	},function(error){
		console.error(error);
	})
}
$scope.getListOfEntries();

})