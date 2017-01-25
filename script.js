$(document).ready(function() {
  var searchValue;
  $("#button2").click(function() {
    searchValue = $('#searcher2').val()
    console.log(searchValue)

    var results;
    $.getJSON("http://hackathon.liannsun.com/supermarkets?location=" + searchValue, function(results) {
      console.log(results);
    })
  });

});
