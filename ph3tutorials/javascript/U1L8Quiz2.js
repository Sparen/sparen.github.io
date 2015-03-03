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
    alert("'"+s+"' is correct! By using a task with a wait statement, you can time actions in Danmakufu!");
  }else if(s == "A"){
    alert("'"+s+"' is correct! ObjMove_AddPattern is the most reliable way to change a bullet's properties at a certain time in advance.");
  }else if(s == "B"){
    alert("'"+s+"' is incorrect. If you use ObjRender_SetAngleZ, you are not changing the actual direction of the bullet - you are only changing the angle the graphic points in.");
  }else{
    alert("'"+s+"' is incorrect. Although you can use ObjMove_SetDestAtFrame to move the bullet in a given direction, it is not good for moving things at certain angles.");
  }

  return false;
}