//For word lists that are commonly used.
var container_places = ['<ruby lang="ja"><rb>学校</rb><rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>病院</rb><rp>(</rp><rt>びょういん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>銀行</rb><rp>(</rp><rt>ぎんこう</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>公園</rb><rp>(</rp><rt>こうえん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>動物園</rb><rp>(</rp><rt>どうぶつえん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>海</rb><rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>家</rb><rp>(</rp><rt>うち</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>大学</rb><rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>'
    ];
var container_sleepableplaces = ['<ruby lang="ja"><rb>家</rb><rp>(</rp><rt>うち</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>寮</rb><rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>',
    'ホテル'
    ];
var container_hearable = ['<ruby lang="ja"><rb>音楽</rb><rp>(</rp><rt>おんがく</rt><rp>)</rp></ruby>'
    ];
var container_drinkable = ['<ruby lang="ja"><rb>水</rb><rp>(</rp><rt>みず</rt><rp>)</rp></ruby>',
    'お<ruby lang="ja"><rb>酒</rb><rp>(</rp><rt>さけ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>紅茶</rb><rp>(</rp><rt>こうちゃ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>牛乳</rb><rp>(</rp><rt>ぎゅうにゅう</rt><rp>)</rp></ruby>',
    'ジュース',
    'ビール',
    'コーヒ'
    ];
var container_languages = ['<ruby lang="ja"><rb>日本語</rb><rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>'
    ]
var container_readable = ['<ruby lang="ja"><rb>新聞</rb><rp>(</rp><rt>しんぶん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>雑誌</rb><rp>(</rp><rt>ざっし</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>本</rb><rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>'
    ]
var container_edible = ['<ruby lang="ja"><rb>寿司</rb><rp>(</rp><rt>すし</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>刺身</rb><rp>(</rp><rt>さしみ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>弁当</rb><rp>(</rp><rt>べんとう</rt><rp>)</rp></ruby>',
    'かつ<ruby lang="ja"><rb>丼</rb><rp>(</rp><rt>どん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>牛丼</rb><rp>(</rp><rt>ぎゅうどん</rt><rp>)</rp></ruby>',
    'ラーメン',
    'うどん'
    ]
var container_doable = ['<ruby lang="ja"><rb>宿題</rb><rp>(</rp><rt>しゅくだい</rt><rp>)</rp></ruby>',
    'テニス',
    'ゲーム',
    'スポーツ'
    ]

function question_create(){
  //First, determine which verbs to use
  var currentverb = qc_determineverb(); //string containing verb ID, for use in creating question
  var object = qc_object(currentverb);
  var stem = qc_verb(currentverb);
  document.getElementById("quiz_inner").innerHTML = "<p>" + object + "__" + stem + "。</p>" + 
          '<form method="POST" title="' + currentverb + '" onSubmit="return qc_checkAnswer(this, \'' + currentverb + '\');">' + 
          '<input type="RADIO" value="wo" name="cc">' +
          '          を<br>' +
          '<input type="RADIO" value="ga" name="cc">' +
          '          が<br>' +
          '<input type="RADIO" value="de" name="cc">' +
          '          で<br>' +
          '<input type="RADIO" value="ni" name="cc">' +
          '          に<br>' +
          '<input type="RADIO" value="he" name="cc">' +
          '          へ<br>' +
          '<input type="RADIO" value="to" name="cc">' +
          '          と<br>' +
          '<input type="RADIO" value="mo" name="cc">' +
          '          も<br>' +
          '<input type="RADIO" value="kara" name="cc">' +
          '          から<br>' +
          '<input type="RADIO" value="made" name="cc">' +
          '          まで<br>' +
          '<input type="SUBMIT" value="Submit">' +
          '</form>';
}

//Randomly select one of the checked verbs to create a sentence
function qc_determineverb(){
  var possible = [];
  if (document.getElementById("quiz3_iku").checked) {possible.push("3_iku");}
  if (document.getElementById("quiz3_kaeru").checked) {possible.push("3_kaeru");}
  if (document.getElementById("quiz3_kiku").checked) {possible.push("3_kiku");}
  if (document.getElementById("quiz3_nomu").checked) {possible.push("3_nomu");}
  if (document.getElementById("quiz3_hanasu").checked) {possible.push("3_hanasu");}
  if (document.getElementById("quiz3_yomu").checked) {possible.push("3_yomu");}
  if (document.getElementById("quiz3_taberu").checked) {possible.push("3_taberu");}
  if (document.getElementById("quiz3_neru").checked) {possible.push("3_neru");}
  if (document.getElementById("quiz3_miru").checked) {possible.push("3_miru");}
  if (document.getElementById("quiz3_kuru").checked) {possible.push("3_kuru");}
  if (document.getElementById("quiz3_suru").checked) {possible.push("3_suru");}
  /*if (document.getElementById("quiz3_benkyousuru").checked) {possible.push("3_benkyousuru");}*/
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
  } else if(currentverb == "3_kiku") {
    container = container_hearable;
  } else if(currentverb == "3_nomu") {
    container = container_drinkable;
  } else if(currentverb == "3_hanasu") {
    container = container_languages;
  } else if(currentverb == "3_yomu") {
    container = container_readable;
  } else if(currentverb == "3_taberu") {
    container = container_edible;
  } else if(currentverb == "3_neru") {
    container = container_sleepableplaces;
  } else if(currentverb == "3_miru") {
    container = container_sleepableplaces.concat(container_readable).concat(container_edible);
  } else if(currentverb == "3_kuru") {
    container = container_places;
  } else if(currentverb == "3_suru") {
    container = container_doable;
  }
  var randindex = Math.floor((Math.random() * container.length));
  if (container.length == 0) {return "／人 ◕ ‿‿ ◕ 人＼は「だから" + '<ruby lang="ja"><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby>';}
  return container[randindex];
}

function qc_verb(currentverb){
  var container = [];
  var suru_tag = false;
  var stem = "";
  if(currentverb == "3_iku") {
    stem = '<ruby lang="ja"><rb>行</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>';
    container = ['く', 'きます', 'った', 'きました', 'かない', 'きません', 'かなかった', 'きませんでした', 'ってください', 'っています', 'ける', 'けます', 'けない', 'けません'];
  } else if(currentverb == "3_kaeru") {
    stem = '<ruby lang="ja"><rb>帰</rb><rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>';
    container = ['る', 'ります', 'った', 'りました', 'らない', 'りません', 'らなかった', 'りませんでした', 'ってください', 'っています', 'れる', 'れます', 'れない', 'れません'];
  } else if(currentverb == "3_kiku") {
    stem = '<ruby lang="ja"><rb>聞</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>';
    container = ['く', 'きます', 'いた', 'きました', 'かない', 'きません', 'かなかった', 'きませんでした', 'いてください', 'いています', 'ける', 'けます', 'けない', 'けません'];
  } else if(currentverb == "3_nomu") {
    stem = '<ruby lang="ja"><rb>飲</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>';
    container = ['む', 'みます', 'んだ', 'みました', 'まない', 'みません', 'まなかった', 'みませんでした', 'んでください', 'んでいます', 'める', 'めます', 'めない', 'めません'];
  } else if(currentverb == "3_hanasu") {
    stem = '<ruby lang="ja"><rb>話</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>';
    container = ['す', 'します', 'した', 'しました', 'さない', 'しません', 'さなかった', 'しませんでした', 'してください', 'しています', 'せる', 'せます', 'せない', 'せません'];
  } else if(currentverb == "3_yomu") {
    stem = '<ruby lang="ja"><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>';
    container = ['む', 'みます', 'んだ', 'みました', 'まない', 'みません', 'まなかった', 'みませんでした', 'んでください', 'んでいます', 'める', 'めます', 'めない', 'めません'];
  } else if(currentverb == "3_taberu") {
    stem = '<ruby lang="ja"><rb>食</rb><rp>(</rp><rt>た</rt><rp>)</rp></ruby>';
    container = ['べる', 'べます', 'べた', 'べました', 'べない', 'べません', 'べなかった', 'べませんでした', 'べてください', 'べています', 'べられる', 'べられます', 'べられない', 'べられません'];
  } else if(currentverb == "3_neru") {
    stem = '<ruby lang="ja"><rb>寝</rb><rp>(</rp><rt>ね</rt><rp>)</rp></ruby>';
    container = ['る', 'ます', 'た', 'ました', 'ない', 'ません', 'なかった', 'ませんでした', 'てください', 'ています', 'られる', 'られます', 'られない', 'られません'];
  } else if(currentverb == "3_miru") {
    stem = '<ruby lang="ja"><rb>見</rb><rp>(</rp><rt>み</rt><rp>)</rp></ruby>';
    container = ['る', 'ます', 'た', 'ました', 'ない', 'ません', 'なかった', 'ませんでした', 'てください', 'ています', 'られる', 'られます', 'られない', 'られません'];
  } else if(currentverb == "3_kuru") {
    if (Math.random() < 0.5) {
      stem = '<ruby lang="ja"><rb>来</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>';
      container = ['ます', 'た', 'ました', 'ません', 'ませんでした', 'てください', 'ています'];
    } else if (Math.random() < 0.75){
      stem = '<ruby lang="ja"><rb>来</rb><rp>(</rp><rt>こ</rt><rp>)</rp></ruby>';
      container = ['ない', 'なかった', 'られる', 'られます', 'られない', 'られません'];
    } else {
      stem = '<ruby lang="ja"><rb>来</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>';
      container = ['る'];
    }
  } else if(currentverb == "3_suru") {
    suru_tag = true;
    if (Math.random() < 0.1) {
      stem = 'す';
      container = ['る'];
    } else { //Note the た buffer for the present short form and the replacement of potential forms with できる
      stem = 'し';
      container = ['た', 'ます', 'た', 'ました', 'ない', 'ません', 'なかった', 'ませんでした', 'てください', 'ています', 'できる', 'できます', 'できない', 'できません'];
    }
  }
  
  //DEFAULT
  if (container.length == 0) {
    return '<ruby lang="ja"><rb>契約</rb><rp>(</rp><rt>けいやく</rt><rp>)</rp></ruby>' + "して、" + 
    '<ruby lang="ja"><rb>魔法少女</rb><rp>(</rp><rt>まほうしょうじょ</rt><rp>)</rp></ruby>' + "になってよ！」__" + 
    '<ruby lang="ja"><rb>言</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>' + "っていました";
  }

  var randindex = Math.floor((Math.random() * container.length));
  var toreturn = stem + container[randindex];

  var endingadded = false;
  //Below, disable verbs that cannot use endings
  if (currentverb == "3_kuru") {endingadded = true;} //because complications with multiple verb stem forms and inconsistent container
  if (container.length == 1 && suru_tag) { //Specifically for forms of する where the short present form was chosen. Other cases are fine.
    endingadded = true;
  }
  if (suru_tag && randindex >= 10) { //Cheap way to allow forms of できる while allowing endings and doing the 来る route
    toreturn = container[randindex]; //Basically reset the toreturn by removing stem
  }

  //Add random endings to some sentences
  
  if ((randindex == 0 || randindex == 2 || randindex == 4) && !endingadded) {
    var thing = Math.random();
    //Add specific banned words in an if statement here, transform next into else if. e.g. to die, to kill, to get sick, etc.
    if (thing < 0.25){
      toreturn += '<ruby lang="ja"><rb>方</rb><rp>(</rp><rt>ほう</rt><rp>)</rp></ruby>がいいです';
      endingadded = true;
    }
  }

  if ((randindex == 0 || randindex == 2 || randindex == 4 || randindex == 6 || randindex == 10 || randindex == 12) && !endingadded) {
    var thing = Math.random();
    if (thing < 0.25){
      toreturn += 'みたいです';
      endingadded = true;
    }
  }

  return toreturn;
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
  var kyubey = false;

  //Determine what answers are 
  if (verbID == "3_iku") {theAnswer.push("ni"); theAnswer.push("he");}
  if (verbID == "3_kaeru") {theAnswer.push("ni"); theAnswer.push("he");}
  if (verbID == "3_kiku") {theAnswer.push("wo");}
  if (verbID == "3_nomu") {theAnswer.push("wo");}
  if (verbID == "3_hanasu") {theAnswer.push("de"); theAnswer.push("wo");}
  if (verbID == "3_yomu") {theAnswer.push("wo");}
  if (verbID == "3_taberu") {theAnswer.push("wo");}
  if (verbID == "3_neru") {theAnswer.push("de");}
  if (verbID == "3_miru") {theAnswer.push("wo");}
  if (verbID == "3_kuru") {theAnswer.push("kara"); theAnswer.push("ni"); theAnswer.push("he");}
  if (verbID == "3_suru") {theAnswer.push("wo");}

  if (theAnswer.length == 0) {theAnswer.push("to"); kyubey = true;} //defaults to Kyubey

  var feedback = "Acceptable answers include: " + theAnswer; //For notes and feedback

  if(contains(theAnswer, s)){
    alert("'"+s+"' is correct! " + feedback + (kyubey ? "\n\nContract complete! You are now a magical girl!" : ""));
  }else{
    alert("'"+s+"' is incorrect. " + feedback + (kyubey ? "\n\n／人 ͡° ‿‿  ͡°人＼" : ""));
  }

  return false;
}

function qc_checkAll(newval) {
  qc_checkL3(newval);
}

function qc_checkL3(newval) {
  document.getElementById("quiz3_master").checked = newval;

  document.getElementById("quiz3_iku").checked = newval;
  document.getElementById("quiz3_kaeru").checked = newval;
  document.getElementById("quiz3_iku").checked = newval;
  document.getElementById("quiz3_kiku").checked = newval;
  document.getElementById("quiz3_nomu").checked = newval;
  document.getElementById("quiz3_hanasu").checked = newval;
  document.getElementById("quiz3_yomu").checked = newval;
  document.getElementById("quiz3_taberu").checked = newval;
  document.getElementById("quiz3_neru").checked = newval;
  document.getElementById("quiz3_miru").checked = newval;
  document.getElementById("quiz3_kuru").checked = newval;
  document.getElementById("quiz3_suru").checked = newval;
  document.getElementById("quiz3_benkyousuru").checked = newval;
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}