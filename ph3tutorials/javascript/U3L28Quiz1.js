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
    alert("'"+s+"' is a correct answer! By default, newly created instances of an Enemy have 0 life.");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. Stage enemies are not bosses and cannot use the events for setting life, timer, and spell bonus score typical of a Single script.");
  }else{
    alert("'"+s+"' is a correct answer! If the enemy is spawned 32 or more pixels away from the edges of the screen, it will be deleted due to life being set to -1000 in @MainLoop bounds check. Of course, this is only due to the bounds check we have implemented in our task here.");
  }

  return false;
}