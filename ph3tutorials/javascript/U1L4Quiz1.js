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
    alert("'"+s+"' is correct! Decimals in Danmakufu cannot start with a period!");
  }else{
    alert("'"+s+"' is incorrect. Please review Part 5.");
  }

  return false;
}

function checkAnswerA1ESP(quizForm, theAnswer){
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
    alert("¡La " + "'"+s+"' es correcta! ¡Los decimales en Danmakufu no pueden empezar con un punto!");
  }else{
    alert("La " + "'"+s+"' es incorrecta. Por favor revisa la parte 5");
  }

  return false;
}