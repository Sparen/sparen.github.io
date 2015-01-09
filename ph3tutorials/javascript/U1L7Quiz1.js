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
    alert("'"+s+"' is correct! By reaching the destination at a certain time, it is guaranteed that everything will sync!");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. This function would most likely teleport the boss onto the player, resulting in a very cheap autokill unless the player was notified of the teleportation beforehand.");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. This function has different movement times depending on how far away the player is.");
  }else{
    alert("'"+s+"' is a possible answer, but you'll be sitting there for a while trying to figure out how to time everything perfectly.");
  }

  return false;
}