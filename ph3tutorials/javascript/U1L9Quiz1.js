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
    alert("'"+s+"' is correct! By increasing the delay time of the laser, the laser will not fire automatically!");
  }else if(s == "A"){
    alert("'"+s+"' is incorrect. The laser will last on-screen for a longer time but it will still appear instantaneously.");
  }else{
    alert("Violence is bad, OK? Reimu doesn't need any more Love from Marisa...");
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
    alert("'"+s+"' is correct! By setting the delete time to be greater than the length of the attack, the lasers will not delete during the attack");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. If you set the delay time to be longer than the length of the attack, a delay laser will form but the laser itself will never actually expand.");
  }else{
    alert("She might run out of lasers... eventually. Try again. :)");
  }

  return false;
}

function checkAnswerA3(quizForm, theAnswer){
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

function checkAnswerA4(quizForm, theAnswer){
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