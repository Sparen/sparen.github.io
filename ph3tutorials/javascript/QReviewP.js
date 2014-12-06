function checkAnswerP(quizForm, theAnswer, parttoreview){
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
    alert("'"+s+"' is correct!");
  }else{
    alert("'"+s+"' is incorrect. Please review Part "+parttoreview+".");
  }

  return false;
}