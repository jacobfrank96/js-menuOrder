// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(orderOptions, foodOption) {
  // your code goes here
  var answerInput = prompt(orderOptions);
  if (answerInput.toUpperCase()==="YES"){
    order+=foodOption;
  }
}

function guac(){
  var answerInput = prompt("Would you like guac");
  if (answerInput.toUpperCase()==="YES"){
  var answerInput2= prompt("This isn't qdoba so thats going to cost you extra. Do you still want guac? ");
      if(answerInput.toUpperCase==="YES"){
        order+='guac';
      }

  }
}

// call the QUESTION function with the order options
question("Would you like rice?","rice ");
question("Would you like beans? ", "beans ");
question("Would you like chicken?" "chicken ");
question("Would you like steak?" "steak ");
question("would you like pork?", "pork ");
question("would you like peppers?", "peppers");
question("Would you like Salsa? ", "salsa ");
question("Would you like sour cream? " "sour cream ");
question("Would you like corn? ", "corn ");
question("Would you like lettus? ", "lettus ");
guac("would you like guac?");




// output their order
document.write("<p>You ordered a burrito with  " + order + "<p>");
