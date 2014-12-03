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