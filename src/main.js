$(document).ready(function() {
    $('#translation-form').submit(function(event) {
      event.preventDefault();
      const inputNumber = $('#inputNumber').val();
      const translation = new Translation(inputNumber)
      //const response = triangle.checkType();
      //$('#response').append("<p>" + response + "</p>");
    });
  });