function lineTypeSelected(){
	if(currentChart!=undefined){
		currentChart.clear();
		currentChart.destroy();
	}
	clearAndShowLinearDataEntries();
	$('#createchart').click(lineDataEntered);
}	

function lineDataEntered(){
	linearDataEntered();
	showLineGraph();	
}

function showLineGraph(){
	createDataSets(); 
	var data = {
	    labels: dataLabels,
	    datasets: dataSets
	};
	var ctx = $("#myChart").get(0).getContext("2d");
	ctx.beginPath();
	currentChart = new Chart(ctx).Line(data, options);
}