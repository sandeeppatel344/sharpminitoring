/**
 * Created by sandeep on 12/20/2016.
 */
app.controller("entryreportCtrl",function($scope,reportsService,entriesformService){
    $scope.filterObj = {};
    $scope.curPage = 0;// current Page
    $scope.pageSize = 10;
    $scope.ListOfEntry = [];
    $scope.getAllEntries = function(){
		reportsService.getEntryReport($scope.filterObj).then(function(res){
            $scope.exportData = res.data;
            $scope.ListOfEntry = res.data;
			console.log(res);
		},function(error){
			console.error(error);
		})
	}
    $scope.getAllChannelList = function(){
        entriesformService.getChannelList().then(function(res){
            $scope.channelList = res.data;

        },function(error){
            console.error(error);
        })
    }
    $scope.getRegisteredUser = function(){
        reportsService.getRegisteredUser().then(function(res){
            $scope.userList = res.data;
        })
    }
    $scope.getAllChannelList();
    $scope.getRegisteredUser();
	 $scope.print = function () {

        jQuery("#entryreportheading").show();
        jQuery(".hidden-print").hide();
        $scope.showheading = true
        printElement(document.getElementById("entryreport"));
        document.title = "Entry Report"
        window.print();
        $scope.showheading = true
        jQuery("#entryreportheading").show();
        jQuery("th").css('border' ,'0px');
        jQuery(".hidden-print").show();
      }
    function printElement(elem) {
        // document.getElementById("heading")._css("display","inline-block")
        $scope.showheading = true
        var domClone = elem.cloneNode(true);
        jQuery("#userreportheading").show();
        jQuery(".hidden-print").hide();
        var $printSection = document.getElementById("entryreport");
        if (!$printSection) {
            $scope.showheading = true
            var $printSection = document.createElement("div");
            $printSection.id = "printSection";
            document.body.appendChild($printSection);
        }

        $printSection.innerHTML = "";

        $printSection.appendChild(domClone);
        domClone = "";
    }
    $scope.numberOfPages = function()
    {
        return Math.ceil($scope.ListOfEntry.length / $scope.pageSize);
    };

})
