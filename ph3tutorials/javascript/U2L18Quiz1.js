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
    alert("'"+s+"' is the correct answer! By changing all the tasks to functions, their execution will be in serial rather than in parallel.");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. Subroutines do not take parameters.");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. If the incorrect files were #included, then Danmakufu would have crashed.");
  }else{
    alert("'"+s+"' is incorrect. If this were the case, there would be a very different problem.");
  }

  return false;
}