
$("#optimize-button").on("click", function(e) {
  displayResult();
});

function getResults() {
  return new Promise(function(resolve, reject) {
    $.get('/optimized', function(data) {
      resolve(data);
    });
  });
}
function displayResult(data) {
  getResults()
    .then(function(data) {
      var div = $('#results');
      var ol = $('<ol>');
      var solution = data.solution;
      var stops = solution["vehicle_1"];
      for (stop of stops) {
        console.log(stop);
        var li = $('<li>').text(stop['location_name'] + ' at ' + stop['arrival_time']);
        $(div).append(li);
      }
    });
}