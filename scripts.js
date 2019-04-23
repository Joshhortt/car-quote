$(document).ready(function() {
  $("form#insurance").submit(function(event) {
// Variables
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var region = $("select#region").val();
// Multiple Branching statements
    if (age) {
      var quote = (100 - age) * 3;
      if (gender === 'male' && region === 'islands' && age < 26) {
        quote += 50;
    } else if (gender === 'male' && region === 'north' && age < 26) {
        quote += 25;
    } else if (gender === 'female' && region === 'islands' && age < 26) {
        quote += 25;
    } else if (gender === 'female' && region === 'north' && age < 26) {
        quote += 10;
    } else if (gender === 'female', 'male' && region === 'north', 'south', 'islands' && age > 65) {
      quote += 100;
    }
// Show quote or otherwise get alert
      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Please enter your age.');
    }
    event.preventDefault();
  });
});
