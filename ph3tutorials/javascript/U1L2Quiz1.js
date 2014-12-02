function checkAnswer(quizForm, theAnswer){
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
    alert("'"+s+"' is correct! You should use 'Directory' if you know the name of the directory you are looking for.");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. Remember that she has a large number of files but knows the directory she is looking for.");
  }else{
    alert("'"+s+"' is incorrect. I can't help you if you chose this option... :P");
  }

  // return "false" to indicate not to
  // submit the form.
  // change this to "true" if the form
  // "action" is valid,
  // i.e. points to a valid CGI script
  //
  return false;
}