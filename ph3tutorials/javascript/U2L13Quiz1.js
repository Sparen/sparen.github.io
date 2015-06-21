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
    alert("'"+s+"' is a correct answer! You can use ObjRender_SetScaleXYZ to change the scale of an image.");
  }else if(s == "A"){
    alert("'"+s+"' is a correct answer! You can use ObjSprite2D_SetDestRect to scale what you have selected in ObjSprite2D_SetSourceRect.");
  }else{
    alert("'"+s+"' is incorrect. ObjSprite2D_SetDestCenter automatically centers the 2D sprite based on the location of the object and does not do any scaling by itself.");
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
    alert("'"+s+"' is a correct answer! By using ObjSprite2D_SetDestCenter, you can effectively have Danmakufu center the image for you.");
  }else if(s == "B"){
    alert("'"+s+"' is a correct answer! By manually centering it using ObjSprite2D_SetDestRect, the image will be properly centered.");
  }else{
    alert("'"+s+"' is incorrect. The texture will always render off-center.");
  }

  return false;
}