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
    alert("'"+s+"' is correct! You should use 'Directory' if you know the name of the directory you are looking for.");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. Remember that she has a large number of files but knows the directory she is looking for.");
  }else{
    alert("'"+s+"' is incorrect. I can't help you if you chose this option... :P");
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
    alert("¡La " + "'"+s+"' es correcta! Deberías usar 'Directory' si sabes el nombre de la carpeta que estás buscando.");
  }else if(s == "A"){
    alert("La " + "'"+s+"' es incorrecta. Recuerda que ella tiene una gran cantidad de archivos pero sabe el nombre de la carpeta que está buscando.");
  }else{
    alert("La " + "'"+s+"' es incorrecta. No puedo ayudarte si eliges esta opción... :P");
  }

  return false;
}