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
    alert("'"+s+"' is a correct answer! An image containing text is a reliable way to have both graphics and text together in harmony.");
  }else if(s == "D"){
    alert("'"+s+"' is a correct answer! By rendering text using a text object in combination with render objects, you can make the text work well with the image(s).");
  }else{
    alert("'"+s+"' is incorrect. Remember that the aim here is to have both text and graphics.");
  }

  return false;
}