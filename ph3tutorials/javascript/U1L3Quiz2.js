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
    alert("'"+s+"' is correct! She forgot to put the line #TouhouDanmakufu[Single]!");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. Please review Part 2.");
  }else if(s == "C"){
    alert("'"+s+"' is incorrect. Please reread the code.");
  }else{
    alert("'"+s+"'? Well... I guess it *could* be Yukari's fault, but this is probably not an incident and it is not a good idea to go out and attack someone because of your own mistakes. (Then again, this is Reimu we're talking about, so... hmm...) Anyways, actually choose a legitimate answer next time, OK?");
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
    alert("¡La " + "'"+s+"' es correcta! Olvidó poner la línea #TouhouDanmakufu[Single].");
  }else if(s == "A"){
    alert("La " + "'"+s+"' es incorrecta. Por favor revisa la parte 2.");
  }else if(s == "C"){
    alert("La " + "'"+s+"' es incorrecta. Por favor vuelve a leer el código.");
  }else{
    alert("La " + "'"+s+"' es incorrecta. Bueno... supongo que *podría* ser culpa de Yukari, pero probablemente esto no sea un incidente y no sea una buena idea ir por ahí atacando a alguien por tus propios errores. (Aunque, estamos hablando de Reimu, así que... hmm...). Como sea, ahora elige una respuesta legítima, ¿sí?");
  }

  return false;
}