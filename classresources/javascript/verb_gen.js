//For word lists that are commonly used.
var container_places = ['<ruby lang="ja"><rb>学校</rb><rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>病院</rb><rp>(</rp><rt>びょういん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>銀行</rb><rp>(</rp><rt>ぎんこう</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>公園</rb><rp>(</rp><rt>こうえん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>動物園</rb><rp>(</rp><rt>どうぶつえん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>海</rb><rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>家</rb><rp>(</rp><rt>うち</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>大学</rb><rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>'];

function question_create(){
  //First, determine which verbs to use
  var currentverb = qc_determineverb(); //string containing verb ID, for use in creating question
  var object = qc_object(currentverb);
  var stem = qc_verb(currentverb);
  document.getElementById("quiz_inner").innerHTML = "<p>" + object + "__" + stem + "。</p>" + 
          '<form method="POST" title="' + currentverb + '" onSubmit="return qc_checkAnswer(this, \'' + currentverb + '\');">' + 
          '<input type="RADIO" value="ha" name="cc">' +
          '          は<br>' +
          '<input type="RADIO" value="wo" name="cc">' +
          '          を<br>' +
          '<input type="RADIO" value="ga" name="cc">' +
          '          が<br>' +
          '<input type="RADIO" value="ni" name="cc">' +
          '          に<br>' +
          '<input type="RADIO" value="he" name="cc">' +
          '          へ<br>' +
          '<input type="RADIO" value="to" name="cc">' +
          '          と<br>' +
          '<input type="RADIO" value="mo" name="cc">' +
          '          も<br>' +
          '<input type="SUBMIT" value="Submit">' +
          '</form>';
}

function qc_determineverb(){
  var possible = [];
  if (document.getElementById("quiz3_iku").checked) {possible.push("3_iku");}
  if (document.getElementById("quiz3_kaeru").checked) {possible.push("3_kaeru");}
  /*if (document.getElementById("quiz3_kiku").checked) {possible.push("3_kiku");}
  if (document.getElementById("quiz3_nomu").checked) {possible.push("3_nomu");}
  if (document.getElementById("quiz3_hanasu").checked) {possible.push("3_hanasu");}
  if (document.getElementById("quiz3_yomu").checked) {possible.push("3_yomu");}
  if (document.getElementById("quiz3_taberu").checked) {possible.push("3_taberu");}
  if (document.getElementById("quiz3_neru").checked) {possible.push("3_neru");}
  if (document.getElementById("quiz3_miru").checked) {possible.push("3_miru");}
  if (document.getElementById("quiz3_kuru").checked) {possible.push("3_kuru");}
  if (document.getElementById("quiz3_suru").checked) {possible.push("3_suru");}
  if (document.getElementById("quiz3_benkyousuru").checked) {possible.push("3_benkyousuru");}*/
  if (possible.length == 0) {alert("Please check at least one value.");}
  var randindex = Math.floor((Math.random() * possible.length));
  return possible[randindex];
}

function qc_object(currentverb){
  var container = [];
  if(currentverb == "3_iku") {
    container = container_places;
  } else if(currentverb == "3_kaeru") {
    container = container_places;
  }
  var randindex = Math.floor((Math.random() * container.length));
  return container[randindex];
}

function qc_verb(currentverb){
  var container = [];
  var stem = "";
  if(currentverb == "3_iku") {
    stem = '<ruby lang="ja"><rb>行</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>';
    container = ['く', 'きます', 'った', 'きました', 'かない', 'きません', 'かなかった', 'きませんでした', 'ってください', 'っています'];
  } else if(currentverb == "3_kaeru") {
    stem = '<ruby lang="ja"><rb>帰</rb><rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>';
    container = ['る', 'ります', 'った', 'りました', 'らない', 'りません', 'らなかった', 'りませんでした', 'ってください', 'っています'];
  }
  var randindex = Math.floor((Math.random() * container.length));
  return stem + container[randindex];
}

function qc_checkAnswer(quizForm, verbID){
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

  var theAnswer = [];

  //Determine what answers are 
  if (verbID == "3_iku") {theAnswer.push("ni"); theAnswer.push("he");}
  if (verbID == "3_kaeru") {theAnswer.push("ni"); theAnswer.push("he");}

  var feedback = ""; //For notes and feedback

  if(contains(theAnswer, s)){
    alert("'"+s+"' is correct!" + feedback);
  }else{
    alert("'"+s+"' is incorrect." + feedback);
  }

  return false;
}

function qc_checkAll() {
  document.getElementById("quiz3_iku").checked = true;
  document.getElementById("quiz3_kaeru").checked = true;
  document.getElementById("quiz3_iku").checked = true;
  document.getElementById("quiz3_kiku").checked = true;
  document.getElementById("quiz3_nomu").checked = true;
  document.getElementById("quiz3_hanasu").checked = true;
  document.getElementById("quiz3_yomu").checked = true;
  document.getElementById("quiz3_taberu").checked = true;
  document.getElementById("quiz3_neru").checked = true;
  document.getElementById("quiz3_miru").checked = true;
  document.getElementById("quiz3_kuru").checked = true;
  document.getElementById("quiz3_suru").checked = true;
  document.getElementById("quiz3_benkyousuru").checked = true;
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}