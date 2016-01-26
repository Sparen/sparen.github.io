function checkAnswerA2(quizForm, theAnswer){
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
    alert("'"+s+"' is correct! The second item in an array is the first index!");
  }else{
    alert("'"+s+"' is incorrect. Remember that the first item in an array is the zeroth index.");
  }

  return false;
}

function checkAnswerA2ESP(quizForm, theAnswer){
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
    alert("¡La " + "'"+s+"' es correcta! El segundo elemento en un array es el primer índice.");
  }else{
    alert("La " + "'"+s+"' es incorrecta. Recuerda que el primer elemento de un array tiene índice 0.");
  }

  return false;
}