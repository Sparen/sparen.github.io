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
    alert("'"+s+"' is correct! This code creates a circle of bullets, with a radius of 30 pixels.");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect, as it spawns all the bullets at the location of the boss");
  }else if(s == "C"){
    alert("'"+s+"' is incorrect. Check which trigonometric functions are being used. If you need to, run it in Danmakufu to see what it does, and try to figure out what went wrong that way.");
  }else{
    alert("'"+s+"' is incorrect. Suwako wants a circle, not an ellipse.");
  }

  return false;
}