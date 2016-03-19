function barTypeSelected(){
	if(currentChart!=undefined){
		currentChart.clear();
		currentChart.destroy();
	}
	clearAndShowLinearDataEntries();
	$('#createchart').click(barDataEntered);
}	

function barDataEntered(){
	linearDataEntered();
	showBarGraph();	
}

function showBarGraph(){
	createDataSets(); 
	var data = {
	    labels: dataLabels,
	    datasets: dataSets
	};
	var ctx = $("#myChart").get(0).getContext("2d");
	ctx.beginPath();
	currentChart = new Chart(ctx).Bar(data, options);
}