angular.module('student')
.factory('chartOptions',[function(){
	var provider = {};
var defaultOpts = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,


    scaleLineColor: "rgba(255,255,255,1)",
    scaleFontColor : "#fff",

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(255,255,255,0.1)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - Whether the line is curved between points
    bezierCurve : false,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};
	provider.options = function(key){
		var newObj = angular.copy(defaultOpts);
		newObj.scaleFontColor = "#444";
		 newObj.scaleLineColor = "rgba(68,68,68,0.5)";
         newObj.scaleGridLineColor = "rgba(68,68,68,0.1)";
         newObj.scaleShowHorizontalLines = true;

			  if(key == 'profile'){
			   	return newObj;
			  }else if(!key){
			  	return defaultOpts;
			  }

		 
	};

	provider.extendOptions = function(obj){
		return angular.extend(obj, defaultOpts);
	}

	return provider;

}])