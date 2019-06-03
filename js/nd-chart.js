// Sales Info JS
window.onload = function () {
  var options = {
  	animationEnabled: true,
  	axisX: {
  		valueFormatString: "DD/MM"
  	},
  	axisY: {
  		postfix: "K",
  		includeZero: false
  	},
  	data: [{
  		yValueFormatString: "#,###K",
  		xValueFormatString: "DD/MM",
  		type: "spline",
  		dataPoints: [
  			{ x: new Date(2017, 0), y: 1.7 },
  			{ x: new Date(2017, 1), y: 2.5 },
  			{ x: new Date(2017, 2), y: 1.9 },
  			{ x: new Date(2017, 3), y: 2.1 },
  			{ x: new Date(2017, 4), y: 4.8 },
  			{ x: new Date(2017, 5), y: 2.2 }
  		]
  	}]
  };
  $("#chartContainer").CanvasJSChart(options);

// Chart for sales JS
  var chart = new CanvasJS.Chart("chartContainer2", {
  	animationEnabled: true,
  	axisX:{
  		valueFormatString: "DD MMM",
  		crosshair: {
  			enabled: true,
  			snapToDataPoint: true
  		}
  	},
  	axisY: {
  		title: "Sales (in USD)",
  		includeZero: false,
  		valueFormatString: "$##0.00",
  		crosshair: {
  			enabled: true,
  			snapToDataPoint: true,
  			labelFormatter: function(e) {
  				return "$" + CanvasJS.formatNumber(e.value, "##0.00");
  			}
  		}
  	},
  	data: [{
  		type: "area",
  		xValueFormatString: "DD MMM",
  		yValueFormatString: "$##0.00",
  		dataPoints: [
  			{ x: new Date(2016, 07, 01), y: 76.727997 },
  			{ x: new Date(2016, 07, 02), y: 75.459999 },
  			{ x: new Date(2016, 07, 03), y: 76.011002 },
  			{ x: new Date(2016, 07, 04), y: 75.751999 },
  			{ x: new Date(2016, 07, 05), y: 77.500000 },
  			{ x: new Date(2016, 07, 08), y: 77.436996 },
  			{ x: new Date(2016, 07, 09), y: 79.650002 },
  			{ x: new Date(2016, 07, 10), y: 79.750999 },
  			{ x: new Date(2016, 07, 11), y: 80.169998 },
  			{ x: new Date(2016, 07, 12), y: 79.570000 },
  			{ x: new Date(2016, 07, 15), y: 80.699997 },
  			{ x: new Date(2016, 07, 16), y: 79.686996 },
  			{ x: new Date(2016, 07, 17), y: 78.996002 },
  			{ x: new Date(2016, 07, 18), y: 78.899002 },
  			{ x: new Date(2016, 07, 19), y: 77.127998 },
  			{ x: new Date(2016, 07, 22), y: 76.759003 },
  			{ x: new Date(2016, 07, 23), y: 77.480003 },
  			{ x: new Date(2016, 07, 24), y: 77.623001 },
  			{ x: new Date(2016, 07, 25), y: 76.408997 },
  			{ x: new Date(2016, 07, 26), y: 76.041000 },
  			{ x: new Date(2016, 07, 29), y: 76.778999 },
  			{ x: new Date(2016, 07, 30), y: 78.654999 },
  			{ x: new Date(2016, 07, 31), y: 74.067000 }
  		]
  	}]
  });
  chart.render();

// New Visitors graph JS
var totalVisitors = 883000;
var visitorsData = {
	"New vs Returning Visitors": [{
		click: visitorsChartDrilldownHandler,
		cursor: "pointer",
		explodeOnClick: false,
		innerRadius: "75%",
		legendMarkerType: "square",
		//name: "New vs Returning Visitors",
		radius: "100%",
		showInLegend: true,
		startAngle: 90,
		type: "doughnut",
		dataPoints: [
			{ y: 519960, name: "NV", color: "#E7823A" },
			{ y: 363040, name: "RV", color: "#546BC1" }
		]
	}],
	"NV": [{
		color: "#E7823A",
		name: "NV",
		type: "column",
		dataPoints: [
			{ x: new Date("1 Jan 2015"), y: 33000 },
			{ x: new Date("1 Feb 2015"), y: 35960 },
			{ x: new Date("1 Mar 2015"), y: 42160 },
			{ x: new Date("1 Apr 2015"), y: 42240 },
			{ x: new Date("1 May 2015"), y: 43200 },
			{ x: new Date("1 Jun 2015"), y: 40600 },
			{ x: new Date("1 Jul 2015"), y: 42560 },
			{ x: new Date("1 Aug 2015"), y: 44280 },
			{ x: new Date("1 Sep 2015"), y: 44800 },
			{ x: new Date("1 Oct 2015"), y: 48720 },
			{ x: new Date("1 Nov 2015"), y: 50840 },
			{ x: new Date("1 Dec 2015"), y: 51600 }
		]
	}],
	"RV": [{
		color: "#546BC1",
		name: "RV",
		type: "column",
		dataPoints: [
			{ x: new Date("1 Jan 2015"), y: 22000 },
			{ x: new Date("1 Feb 2015"), y: 26040 },
			{ x: new Date("1 Mar 2015"), y: 25840 },
			{ x: new Date("1 Apr 2015"), y: 23760 },
			{ x: new Date("1 May 2015"), y: 28800 },
			{ x: new Date("1 Jun 2015"), y: 29400 },
			{ x: new Date("1 Jul 2015"), y: 33440 },
			{ x: new Date("1 Aug 2015"), y: 37720 },
			{ x: new Date("1 Sep 2015"), y: 35200 },
			{ x: new Date("1 Oct 2015"), y: 35280 },
			{ x: new Date("1 Nov 2015"), y: 31160 },
			{ x: new Date("1 Dec 2015"), y: 34400 }
		]
	}]
};

var newVSReturningVisitorsOptions = {
	animationEnabled: true,
	theme: "light2",
	subtitles: [{
		backgroundColor: "#2eacd1",
		fontSize: 16,
		fontColor: "white",
		padding: 5
	}],
	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";
		}
	},
	data: []
};

var visitorsDrilldownedChartOptions = {
	animationEnabled: true,
	theme: "light2",
	axisX: {
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2"
	},
	axisY: {
		gridThickness: 0,
		includeZero: false,
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2",
		lineThickness: 1
	},
	data: []
};

var chart = new CanvasJS.Chart("chartContainer3", newVSReturningVisitorsOptions);
chart.options.data = visitorsData["New vs Returning Visitors"];
chart.render();

function visitorsChartDrilldownHandler(e) {
	chart = new CanvasJS.Chart("chartContainer3", visitorsDrilldownedChartOptions);
	chart.options.data = visitorsData[e.dataPoint.name];
	chart.options.title = { text: e.dataPoint.name }
	chart.render();
	$("#backButton").toggleClass("invisible");
}

$("#backButton").click(function() {
	$(this).toggleClass("invisible");
	chart = new CanvasJS.Chart("chartContainer3", newVSReturningVisitorsOptions);
	chart.options.data = visitorsData["New vs Returning Visitors"];
	chart.render();
});

}
