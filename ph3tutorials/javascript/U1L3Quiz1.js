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
    alert("'"+s+"' is correct! You should make nonspells and spells in Single scripts!");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. Please review Part 1.");
  }else{
    alert("'"+s+"' is incorrect. Plural scripts are used to chain together attacks and are used in boss battles. Please review Part 1.");
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
    alert("¡La " + "'"+s+"' es correcta! ¡Las spells y no-spells van en los scripts singles!");
  }else if(s == "A"){
    alert("La " + "'"+s+"' es incorrecta. Por favor revisa la parte 1.");
  }else{
    alert("La " + "'"+s+"' es incorrecta. Los scripts plurals se usan para juntar ataques y en las batallas con bosses. Por favor revisa la parte 1.");
  }

  return false;
}