/**
 * Created by sandeep on 12/20/2016.
 */
app.controller("entryreportCtrl",function($scope,reportsService){
	$scope.getAllEntries = function(){
		reportsService.getEntryReport().then(function(res){
			console.log(res);
		},function(error){
			console.error(error);
		})
	}
	 $scope.print = function () {

        jQuery("#entryreportheading").show();
        jQuery(".hidden-print").hide();
        $scope.showheading = true
       // printElement(document.getElementById("userreport"));
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
        var $printSection = document.getElementById("printSection");
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
})
