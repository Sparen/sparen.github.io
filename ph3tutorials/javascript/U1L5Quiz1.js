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
    alert("'"+s+"' is correct! To stop the freezing, she must add a yield; and to have the while loop exit, she needs to increment objcount!");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. Remember that she also wants the object to delete after 300 frames.");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. Remember that she needs to stop the freezing as well.");
  }else{
    alert("'"+s+"' is incorrect. Please review Part 4.");
  }

  return false;
}