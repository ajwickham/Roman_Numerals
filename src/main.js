import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import Translate from './data.js';

export default function Test(testNumber) {
  this.testNumber = testNumber;
}

Test.prototype.checkFunctionality = function() {
  let testInputNumber = new Translate(5);
  let outputTest =  testInputNumber.checkInput();
  return outputTest;
};


$('#translation-form').on("submit",function() {
  event.preventDefault();
  const inputNumber = $('#inputNumber').val(); 
  let outputNumber = new Translate(inputNumber);
  $(".answerResponse").text(outputNumber.checkInput());
});
