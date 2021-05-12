import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Translate from './data.js';

export default function Test(testNumber) {
  this.testNumber = testNumber;
}

//let newTestExample = new Test;



$('#translation-form').on("submit",function() {
  event.preventDefault();
  const inputNumber = $('#inputNumber').val(); 
  /*let outputNumber = newRequest.checkInput(inputNumber);*/
  alert("Yippee");
  $(".answerResponse").text(inputNumber);
});

//const translation = new Translation(inputNumber)
//const response = triangle.checkType();
//$('#response').append("<p>" + response + "</p>");
