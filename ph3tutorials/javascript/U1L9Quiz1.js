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
    alert("'"+s+"' is a correct answer! By doing this, the radius will increase from 0 to 60 over 60 frames!");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. This will shift the lasers to the bottom right and will not increase the radius.");
  }else{
    alert("'"+s+"' is a correct answer! By doing this, the radius will increase from 0 to 60 over 60 frames!");
  }

  return false;
}

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
    alert("'"+s+"' is a correct answer! This will result in the laser deleting after the spark has spawned, fulfilling the purpose of the delay laser.");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. While it seems like it might work, the delay laser will disappear before the spark is spawned.");
  }else{
    alert("'"+s+"' is not a good idea. The delay laser is sure to last longer than the actual spark + delay period, and will look awkward afterwards.");
  }

  return false;
}