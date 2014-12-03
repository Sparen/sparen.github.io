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