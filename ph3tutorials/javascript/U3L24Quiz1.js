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
    alert("'"+s+"' is the correct answer! This option utilizes a standard default value as a control for the blocking while loop.");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. If 0 were used as a difficulty option for Easy Mode or some other difficulty, then this code may not work as expected. Please review Part 3 of this lesson.");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. This code is not blocking; it only checks the Common Data for one frame before continuing rather than waiting for a valid response. Additionally, if 0 were used as a difficulty option for Easy Mode or some other difficulty, then this code may not work as expected. Please review Part 3 of this lesson.");
  }else{
    alert("'"+s+"' is incorrect. This code is not blocking; it only checks the Common Data for one frame before continuing rather than waiting for a valid response.");
  }

  return false;
}