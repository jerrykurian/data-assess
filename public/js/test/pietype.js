function pieTypeSelected(){
	if(currentChart!=undefined){
		currentChart.clear();
		currentChart.destroy();
	}
	clearAndShowPieDataEntries();
	$('#createchart').click(pieDataEntered);
}	

var colorPickers = [];
function showColorPick(){
	var input = document.createElement('INPUT')
	//$('<li><input class="jscolor" value="ab2567"/></li>');
	//$.html('<li><input class="jscolor" value="ab2567"/></li>');
    var picker = new jscolor(input);
    picker.fromHSV(360 / 100 , 100, 100)
	$('#colorPicker').append(input);
	colorPickers.push(input);
}

var piePoints = [0];
var pieLabels = ['None'];
var pieLabelColors = [];

function pieDataEntered(){
	var enteredData = $('#piedatapoints').val();
	dataPoints = enteredData.split(',');
	var enteredData = $('#datalabels').val();
	dataLabels = enteredData.split(',');
	pieLabelColors = [];
	colorPickers.forEach(function(elem){
		pieLabelColors.push('#'+$(elem).val());
	});
	showPieGraph();	
}

function showPieGraph(){
	var pieData = [];
	for(i=0;i<dataPoints.length;i++){
		var data = {
			'value': dataPoints[i],
			'color': pieLabelColors[i],
			'highlight' : pieLabelColors[i],
			'label' : dataLabels[i]
		}
		pieData.push(data);
	}
	var ctx = $("#myChart").get(0).getContext("2d");
	ctx.beginPath();
	currentChart = new Chart(ctx).Doughnut(pieData,options);
}