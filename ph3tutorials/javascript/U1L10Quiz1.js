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
    alert("'"+s+"' is a correct answer! If one or both of these functions are not called, there will be no angular velocity.");
  }else if(s == "A"){
    alert("'"+s+"' is a correct answer, although if she didn't realize that she set the angular velocity to 0, she may want to read this lesson carefully...");
  }else{
    alert("'"+s+"' is probably wrong, although saying that the Pagoda is a dud/fake/useless is probably bad idea in front of Shou...");
  }

  return false;
}