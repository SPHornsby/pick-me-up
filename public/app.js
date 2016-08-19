
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
      $(div).empty();
      var ul = $('<ul>').addClass('list-group');
      var solution = data.solution;
      var stops = solution["vehicle_1"];
      for (stop of stops) {
        console.log(stop);
        var li = $('<li>').text(stop['location_name'] + ' at ' + stop['arrival_time']);
        $(li).addClass('list-group-item')
        $(ul).append(li);
      }
      $(div).append(ul);
    });
}