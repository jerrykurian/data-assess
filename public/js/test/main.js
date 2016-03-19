var currentChart;
var numOfDataPoints = 0;
var questionNum = 0;
var questions = [];
var answers = [];
var type = 0;
$( document ).ready(function() {
	$.ajax({
	  type: "POST",
	  url: "/test/load",
	  data: JSON.stringify(answers),
	  success: success,
	  dataType: dataType
	});
    
});

function submit(){
	collectAnswers();
	$.ajax
	({
	  type: "POST",
	  url: "/test/submit",
	  data: answers,
	  dataType: "json",
	 }).done(function ( data ) {
	      questions = data;
	      displayNext();
	   });
}

function displayNext(){
	if(questionNum>0){
		collectAnswers();
	}

	$('#question').html(questions[questionNum].question)
	questionNum++;
}

function collectAnswers(){
	var labels = $('#datalabels');
	var datapoints = $('#dataPoints');
	$('#dataLabels').val('');
	$('#dataPoints').val('');
	answers.push({"type":type,"labels":labels,"points":dataPoints});
}

function addDataPoint(){
	$('#datapoints').append('<li><input type="text" id="datapoint' + numOfDataPoints + '"/></li>');
	numOfDataPoints++;
}

function clearAndShowLinearDataEntries(){
	$('#pieDataEntry').hide();
	$('#linearDataEntry').hide();
	$('#linearDataEntry').show();
}

function clearAndShowPieDataEntries(){
	$('#linearDataEntry').hide();
	$('#pieDataEntry').hide();
	$('#pieDataEntry').show();
}

var dataPoints = [];
var dataLabels = [];
var dataSets = [];
function linearDataEntered(){
	dataPoints = [];
	dataLabels = [];

	dataLabels = $('#datalabels').val().split(',');

	for(i=0;i<numOfDataPoints;i++){
		var enteredData = $('#datapoint'+i).val();
		dataPoints.push(enteredData.split(','));
	}
}

function createDataSets(){
	dataSets = [];
	for(i=0;i<numOfDataPoints;i++){
		var dataSet = {
		            label: "DataSet-"+i,
		            fillColor: "rgba(220,220,220,0.2)",
		            strokeColor: "rgba(220,220,220,1)",
		            pointColor: "rgba(220,220,220,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(220,220,220,1)",
		            data: dataPoints[i]
		        };
		dataSets.push(dataSet);
	}
}