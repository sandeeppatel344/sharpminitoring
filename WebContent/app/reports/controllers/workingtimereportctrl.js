/**
 * Created by sandeep on 12/19/2016.
 */
app.controller("workingTimeCtrl",function($scope,reportsService,$filter){
    $scope.userList = [];
    $scope.filterObj = {};
    $scope.list = {};
    $scope.EmpData = [];
    $scope.getRegisteredUser = function(){
        reportsService.getRegisteredUser().then(function(res){
            $scope.userList = res.data;
        })
    }
    $scope.getReportData = function(){
        $scope.EmpData = [];
        reportsService.getEmployeeWorkingTime($scope.filterObj).then(function(res){
            console.log(res);
            angular.forEach(res.data,function(lst){
                $scope.currentData = lst.userid+""+new Date(lst.login_datetime).getDate();

                if($scope.list[$scope.currentData]){
                    //$scope.list[$scope.currentData].date = lst.date;
                    $scope.list[$scope.currentData].workhours += Math.abs(new Date(lst.login_datetime) - new Date(lst.logout_datetime))/(60*60*1000)
                }else{
                    $scope.list[$scope.currentData] = {};
                    $scope.list[$scope.currentData].date = $filter('date')(new Date(lst.date),'dd/MM/yyyy');
                    $scope.list[$scope.currentData].userid = lst.userid;
                    $scope.list[$scope.currentData].currentData = lst.userid+""+new Date(lst.login_datetime).getDate();
                    $scope.list[$scope.currentData].firstname = lst.first_name;
                    $scope.list[$scope.currentData].lastname = lst.last_name;
                    $scope.list[$scope.currentData].logintime = $filter('date')(new Date(lst.login_datetime),'h:mma');
                    $scope.list[$scope.currentData].logouttime = $filter('date')(new Date(lst.logout_datetime),'h:mma');
                    $scope.list[$scope.currentData].workhours = Math.abs(new Date(lst.login_datetime) - new Date(lst.logout_datetime))/(60*60*1000);
                    $scope.EmpData.push($scope.list[$scope.currentData]);
                }
            })

            console.log($scope.list);


        })
    }
    $scope.getRegisteredUser();

    $scope.print = function () {

        jQuery("#workingreportheading").show();
        jQuery(".hidden-print").hide();
        $scope.showheading = true
        // printElement(document.getElementById("userreport"));
        document.title = "Employee Working Report"
        window.print();
        $scope.showheading = true
        jQuery("#workingreportheading").show();
        jQuery("th").css('border' ,'0px');
        jQuery(".hidden-print").show();
    }
    function printElement(elem) {
        // document.getElementById("heading")._css("display","inline-block")
        $scope.showheading = true
        var domClone = elem.cloneNode(true);
        jQuery("#workingreportheading").show();
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