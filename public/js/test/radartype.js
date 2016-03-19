function radarTypeSelected(){
	if(currentChart!=undefined){
		currentChart.clear();
		currentChart.destroy();
	}

	clearAndShowLinearDataEntries();
	$('#createchart').click(radarDataEntered);
}	

function radarDataEntered(){
	linearDataEntered();
	showRadarGraph();	
}

function showRadarGraph(){
	createDataSets(); 
	var data = {
	    labels: dataLabels,
	    datasets: dataSets
	};
	var ctx = $("#myChart").get(0).getContext("2d");
	currentChart = new Chart(ctx).Radar(data, options);
}