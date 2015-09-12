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
    alert("'"+s+"' is correct! You must have a yield; in @MainLoop in order for tasks to run!");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. Look back at Part 3 or at previous lessons - this is a really important thing to know!");
  }else{
    alert("Cheeeeeeeeen!!!!!");
  }

  return false;
}