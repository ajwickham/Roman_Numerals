import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Translate from './data.js';


let newRequest = new Translate;



$('#translation-form').on("submit",function() {
  event.preventDefault();
  const inputNumber = $('#inputNumber').val(); 
  let outputNumber = newRequest.checkInput(inputNumber);
  alert("Yippee");
  $(".answerResponse").text(outputNumber);
});

//const translation = new Translation(inputNumber)
//const response = triangle.checkType();
//$('#response').append("<p>" + response + "</p>");
