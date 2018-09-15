$(document).ready(function() {
//this displays the numbers on the Result Window 
//theres probably a way to loop this or use the class to make it a function that works for all the buttons
function numbers(button){
  $(button).click(function(){
    var num = button.text();
  $('#result').append(num);
});
}
numbers($('#button-1'));
numbers($('#button-2'));
numbers($('#button-3'));
numbers($('#button-4'));
numbers($('#button-5'));
numbers($('#button-6'));
numbers($('#button-7'));
numbers($('#button-8'));
numbers($('#button-9'));
numbers($('#button-0'));


var firstEntry = $('#result').text();
var secondEntry = $('#result').text(); //stores secondEntry
function operator(button){
  $(button).click(function(){ //when plus is clicked
  var firstEntry = $('#result').text(); //store the resultText into firstEntry
  $('#result').empty(); //empty's result container
  document.getElementById('first-number').innerHTML = firstEntry;
  $('#button-equal').click(function(){ // when equal is clicked
    var secondEntry = $('#result').text(); //stores secondEntry
    document.getElementById('second-number').innerHTML = secondEntry;
    // $('#result').text(''); //empty's result container
    var a = parseInt(firstEntry); //turns the first set of numbers into an integer and assigns it to variable a
    var b = parseInt(secondEntry); //turns the second set of numbers into an integer and assigns it to variable b
    console.log("answerB" + b);
    document.getElementById('operator').innerHTML = button.text();
    if (button.text() === "+"){
      var answer = a + b; // adds a and b and assigns to answer
      console.log(answer)
    $('#result').text(answer); //pushes the answer to the result window
    }
    if (button.text() === "−"){
      var answer = a - b; // adds a and b and assigns to answer
    console.log(answer)
    $('#result').text(answer); //pushes the answer to the result window
    }
    if (button.text() === "×"){
      var answer = a * b; // adds a and b and assigns to answer
      console.log(answer)
    $('#result').text(answer); //pushes the answer to the result window
    }
    if (button.text() === "÷"){
      var answer = (a/b) >>0; // adds a and b and assigns to answer
      console.log(answer)
    $('#result').text(answer); //pushes the answer to the result window
    }
    if (button.text() === "^"){
      var answer = (Math.pow(a,b)); // adds a and b and assigns to answer
      console.log(answer)
    $('#result').text(answer); //pushes the answer to the result window
    }
  });
});
}
operator($('#button-plus'));
operator($('#button-minus'));
operator($('#button-multiply'));
operator($('#button-divide'));
operator($('#button-power'));

function calculator(button){
  $(button).click(function(){ //when plus is clicked
  $('#result').empty(); //empty's result container
  $("#first-number").empty();
  $("#second-number").empty();
  $("#operator").empty();
});
}
calculator($('#button-clear'));
});