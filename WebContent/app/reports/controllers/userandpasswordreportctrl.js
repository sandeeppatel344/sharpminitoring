/**
 * Created by sandeep on 12/18/2016.
 */
app.controller("userandpasswordCtrl",function($scope,reportsService){

    $scope.getUserAndPassword = function(){
        reportsService.getUserAndPassword().then(function(res){
                    console.log(res.data)
            $scope.userData = res.data;
        },function(error){
            console.error(error)
        })
    }
    $scope.print = function () {

        jQuery("#userreportheading").show();
        jQuery(".hidden-print").hide();
        $scope.showheading = true
       // printElement(document.getElementById("userreport"));
        document.title = "Username & Password Report"
        window.print();
        $scope.showheading = true
        jQuery("#userreportheading").show();
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


    $scope.getUserAndPassword();

})
