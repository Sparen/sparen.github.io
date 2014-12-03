function checkAnswerA1(quizForm, theAnswer){
  var s = "?";

  var i = 0;
  for(;i<quizForm.elements.length;i++){
    if(("cc" == quizForm.elements[i].name) && (quizForm.elements[i].checked)){
      s = quizForm.elements[i].value;
    }
  }

  if(s == "?"){
    alert("Please make a selection.");
    return false;
  }

  if(s == theAnswer){
    alert("'"+s+"' is correct! Decimals in Danmakufu cannot start with a period!");
  }else{
    alert("'"+s+"' is incorrect. Please review Part 5.");
  }

  // return "false" to indicate not to
  // submit the form.
  // change this to "true" if the form
  // "action" is valid,
  // i.e. points to a valid CGI script
  //
  return false;
}