function checkAnswer(quizForm, theAnswer){
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
    alert("'"+s+"' is correct! You cannot run ph3 scripts in 0.12m.");
  }else{
    alert("'"+s+"' is incorrect. Please review Part 5.");
  }

  return false;
}

function checkAnswerESP(quizForm, theAnswer){
  var s = "?";

  var i = 0;
  for(;i<quizForm.elements.length;i++){
    if(("cc" == quizForm.elements[i].name) && (quizForm.elements[i].checked)){
      s = quizForm.elements[i].value;
    }
  }

  if(s == "?"){
    alert("Por favor haga una selección.");
    return false;
  }

  if(s == theAnswer){
    alert("¡La " + "'"+s+"' es correcta! No puedes ejecutar scripts de ph3 en 0.12m.");
  }else{
    alert("La " + "'"+s+"' es incorrecta. Por favor vuelve a revisar la parte 5.");
  }

  return false;
}