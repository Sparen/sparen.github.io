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
    alert("'"+s+"' is correct! You should change the hitbox in-script so that nothing is broken elsewhere!");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. If you were to change the settings in the actual shotsheet, it is likely that any other script using the shotsheet may have incorrect hitboxes.");
  }else{
    alert("'"+s+"' is a terrible idea. Then again, it depends on the nature of the script... I advise against trolling players though.");
  }

  return false;
}