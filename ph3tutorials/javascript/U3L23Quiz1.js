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
    alert("'"+s+"' is the correct answer! If the plural never ends, the stage, assuming it is properly made, will fail to progress further and the player will be required to manually quit the game.");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. If there had been no check at all as to whether or not the plural was active, the stage would have continued on towards the end regardless of the plural.");
  }else if(s == "C"){
    alert("'"+s+"' is incorrect. Please read the question again. Also, it's simply not possible for Mokou-tan to die.");
  }else{
    alert("'"+s+"' is incorrect. Please review Part 4 of this lesson.");
  }

  return false;
}