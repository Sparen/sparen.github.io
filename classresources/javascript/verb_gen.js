//For word lists that are commonly used.
var container_places = ['<ruby lang="ja"><rb>学校</rb><rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>病院</rb><rp>(</rp><rt>びょういん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>銀行</rb><rp>(</rp><rt>ぎんこう</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>公園</rb><rp>(</rp><rt>こうえん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>動物園</rb><rp>(</rp><rt>どうぶつえん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>大学</rb><rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>床屋</rb><rp>(</rp><rt>とこや</rt><rp>)</rp></ruby>'
    ];
var container_sleepableplaces = ['<ruby lang="ja"><rb>家</rb><rp>(</rp><rt>うち</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>寮</rb><rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>',
    'ホテル'
    ];
var container_swimmableplaces = ['<ruby lang="ja"><rb>海</rb><rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>湖</rb><rp>(</rp><rt>みずうみ</rt><rp>)</rp></ruby>',
    'プール'
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
    'お<ruby lang="ja"><rb>弁当</rb><rp>(</rp><rt>べんとう</rt><rp>)</rp></ruby>',
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
var container_fields = ['<ruby lang="ja"><rb>物理</rb><rp>(</rp><rt>ぶつり</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>科学</rb><rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>化学</rb><rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>芸術</rb><rp>(</rp><rt>げいじゅつ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>工学</rb><rp>(</rp><rt>こうがく</rt><rp>)</rp></ruby>'
    ]
var container_people = ['<ruby lang="ja"><rb>母</rb><rp>(</rp><rt>はは</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>父</rb><rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>先生</rb><rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>友達</rb><rp>(</rp><rt>ともだち</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>先輩</rb><rp>(</rp><rt>せんぱい</rt><rp>)</rp></ruby>'
    ]
var container_pets = ['<ruby lang="ja"><rb>猫</rb><rp>(</rp><rt>ねこ</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>犬</rb><rp>(</rp><rt>いぬ</rt><rp>)</rp></ruby>'
    ]
var container_writable = ['<ruby lang="ja"><rb>本</rb><rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>',
    '<ruby lang="ja"><rb>作文</rb><rp>(</rp><rt>さくぶん</rt><rp>)</rp></ruby>'
    ]

function question_create(){
  //First, determine which verbs to use
  var currentverb = qc_determineverb(); //string containing verb ID, for use in creating question
  var object = qc_object(currentverb);
  var stem = qc_verb(currentverb);
  document.getElementById("quiz_result").innerHTML = "";
  document.getElementById("quiz_quest").innerHTML = "<p>" + object + "<span style=\"color:aqua\">__</span>" + stem + "。</p>";
  document.getElementById("quiz_inner").innerHTML = 
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
  if (document.getElementById("quiz3_okiru").checked) {possible.push("3_okiru");}
  if (document.getElementById("quiz3_taberu").checked) {possible.push("3_taberu");}
  if (document.getElementById("quiz3_neru").checked) {possible.push("3_neru");}
  if (document.getElementById("quiz3_miru").checked) {possible.push("3_miru");}
  if (document.getElementById("quiz3_kuru").checked) {possible.push("3_kuru");}
  if (document.getElementById("quiz3_suru").checked) {possible.push("3_suru");}
  if (document.getElementById("quiz3_benkyousuru").checked) {possible.push("3_benkyousuru");}
  if (document.getElementById("quiz4_au").checked) {possible.push("4_au");}
  if (document.getElementById("quiz4_aru").checked) {possible.push("4_aru");}
  if (document.getElementById("quiz4_kau").checked) {possible.push("4_kau");}
  if (document.getElementById("quiz4_kaku").checked) {possible.push("4_kaku");}
  if (document.getElementById("quiz4_toru").checked) {possible.push("4_toru");}
  if (document.getElementById("quiz4_matsu").checked) {possible.push("4_matsu");}
  if (document.getElementById("quiz4_wakaru").checked) {possible.push("4_wakaru");}
  if (document.getElementById("quiz4_iru").checked) {possible.push("4_iru");}
  if (document.getElementById("quiz5_oyogu").checked) {possible.push("5_oyogu");}
  if (document.getElementById("quiz5_kiku").checked) {possible.push("5_kiku");}
  if (possible.length == 0) {document.getElementById("quiz_result").innerHTML = "<p>Please check at least one value.</p>";}
  var randindex = Math.floor((Math.random() * possible.length));
  return possible[randindex];
}

function qc_object(currentverb){
  var container = [];
  if(currentverb == "3_iku") {
    container = container_places.concat(container_swimmableplaces);
  } else if(currentverb == "3_kaeru") {
    container = container_places.concat(container_swimmableplaces);
  } else if(currentverb == "3_kiku") {
    container = container_hearable;
  } else if(currentverb == "3_nomu") {
    container = container_drinkable;
  } else if(currentverb == "3_hanasu") {
    container = container_languages;
  } else if(currentverb == "3_yomu") {
    container = container_readable;
  } else if(currentverb == "3_okiru") {
    container = container_sleepableplaces;
  } else if(currentverb == "3_taberu") {
    container = container_edible;
  } else if(currentverb == "3_neru") {
    container = container_sleepableplaces;
  } else if(currentverb == "3_miru") {
    container = container_sleepableplaces.concat(container_readable).concat(container_edible);
  } else if(currentverb == "3_kuru") {
    container = container_places.concat(container_swimmableplaces);
  } else if(currentverb == "3_suru") {
    container = container_doable;
  } else if(currentverb == "3_benkyousuru") {
    container = container_languages.concat(container_fields);
  } else if(currentverb == "4_au") {
    container = container_people;
  } else if(currentverb == "4_aru") {
    container = container_drinkable.concat(container_edible);
  } else if(currentverb == "4_kau") {
    container = container_drinkable.concat(container_edible);
  } else if(currentverb == "4_kaku") {
    container = container_writable;
  } else if(currentverb == "4_toru") {
    container = ['<ruby lang="ja"><rb>写真</rb><rp>(</rp><rt>しゃしん</rt><rp>)</rp></ruby>']
  } else if(currentverb == "4_matsu") {
    container = container_places.concat(container_swimmableplaces);
  } else if(currentverb == "4_wakaru") {
    container = container_fields.concat(container_languages);
  } else if(currentverb == "4_iru") {
    container = container_pets.concat(container_people);
  } else if(currentverb == "5_oyogu") {
    container = container_swimmableplaces;
  } else if(currentverb == "5_kiku") {
    container = container_people;
  }
  var randindex = Math.floor((Math.random() * container.length));
  if (container.length == 0) {return "／人 ◕ ‿‿ ◕ 人＼は「だから" + '<ruby lang="ja"><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby>';}
  return container[randindex];
}

var verb_ru_ru_standard = ['る', 'ます', 'た', 'ました', 'ない', 'ません', 'なかった', 'ませんでした', 'てください', 'ています', 'られる', 'られます', 'られない', 'られません', 'なくてもいいです'];
var verb_u_u_standard = ['う', 'います', 'った', 'いました', 'わない', 'いません', 'わなかった', 'いませんでした', 'ってください', 'っています', 'える', 'えます', 'えない', 'えません', 'わなくてもいいです'];
var verb_u_ku_standard = ['く', 'きます', 'いた', 'きました', 'かない', 'きません', 'かなかった', 'きませんでした', 'いてください', 'いています', 'ける', 'けます', 'けない', 'けません', 'かなくてもいいです'];
var verb_u_ru_standard = ['る', 'ります', 'った', 'りました', 'らない', 'りません', 'らなかった', 'りませんでした', 'ってください', 'っています', 'れる', 'れます', 'れない', 'れません', 'らなくてもいいです'];
var verb_u_mu_standard = ['む', 'みます', 'んだ', 'みました', 'まない', 'みません', 'まなかった', 'みませんでした', 'んでください', 'んでいます', 'める', 'めます', 'めない', 'めません', 'まなくてもいいです'];
var verb_u_su_standard = ['す', 'します', 'した', 'しました', 'さない', 'しません', 'さなかった', 'しませんでした', 'してください', 'しています', 'せる', 'せます', 'せない', 'せません', 'さなくてもいいです'];
var verb_u_tsu_standard = ['つ', 'ちます', 'った', 'ちました', 'たない', 'ちません', 'たなかった', 'ちませんでした', 'ってください', 'っています', 'てる', 'てます', 'てない', 'てません', 'たなくてもいいです'];
var verb_u_gu_standard = ['ぐ', 'ぎます', 'いだ', 'ぎました', 'がない', 'ぎません', 'がなかった', 'ぎませんでした', 'いでください', 'いでいます', 'げる', 'げます', 'げない', 'げません', 'がなくてもいいです'];
var verb_suru_standard = ['た', 'ます', 'た', 'ました', 'ない', 'ません', 'なかった', 'ませんでした', 'てください', 'ています', 'できる', 'できます', 'できない', 'できません', 'なくてもいいです'];

function qc_verb(currentverb){
  var container = [];
  var suru_tag = false;
  var stem = "";
  if(currentverb == "3_iku") {
    stem = '<ruby lang="ja"><rb>行</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>';
    container = ['く', 'きます', 'た', 'きました', 'かない', 'きません', 'かなかった', 'きませんでした', 'ってください', 'っています', 'ける', 'けます', 'けない', 'けません', 'かなくてもいいです']; //DOES NOT USE く STANDARD
  } else if(currentverb == "3_kaeru") {
    stem = '<ruby lang="ja"><rb>帰</rb><rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>';
    container = verb_u_ru_standard;
  } else if(currentverb == "3_kiku" || currentverb == "5_kiku") {
    stem = '<ruby lang="ja"><rb>聞</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>';
    container = verb_u_ku_standard;
  } else if(currentverb == "3_nomu") {
    stem = '<ruby lang="ja"><rb>飲</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>';
    container = verb_u_mu_standard;
  } else if(currentverb == "3_hanasu") {
    stem = '<ruby lang="ja"><rb>話</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>';
    container = verb_u_su_standard;
  } else if(currentverb == "3_yomu") {
    stem = '<ruby lang="ja"><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>';
    container = verb_u_mu_standard;
  } else if(currentverb == "3_okiru") {
    stem = '<ruby lang="ja"><rb>起</rb><rp>(</rp><rt>お</rt><rp>)</rp></ruby>き';
    container = verb_ru_ru_standard;
  } else if(currentverb == "3_taberu") {
    stem = '<ruby lang="ja"><rb>食</rb><rp>(</rp><rt>た</rt><rp>)</rp></ruby>べ';
    container = verb_ru_ru_standard;
  } else if(currentverb == "3_neru") {
    stem = '<ruby lang="ja"><rb>寝</rb><rp>(</rp><rt>ね</rt><rp>)</rp></ruby>';
    container = verb_ru_ru_standard;
  } else if(currentverb == "3_miru") {
    stem = '<ruby lang="ja"><rb>見</rb><rp>(</rp><rt>み</rt><rp>)</rp></ruby>';
    container = verb_ru_ru_standard;
  } else if(currentverb == "3_kuru") {
    if (Math.random() < 0.5) {
      stem = '<ruby lang="ja"><rb>来</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>';
      container = ['ます', 'た', 'ました', 'ません', 'ませんでした', 'てください', 'ています'];
    } else if (Math.random() < 0.75){
      stem = '<ruby lang="ja"><rb>来</rb><rp>(</rp><rt>こ</rt><rp>)</rp></ruby>';
      container = ['ない', 'なかった', 'られる', 'られます', 'られない', 'られません', 'なくてもいいです'];
    } else {
      stem = '<ruby lang="ja"><rb>来</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>';
      container = ['る'];
    }
  } else if(currentverb == "3_suru") {
    suru_tag = true;
    if (Math.random() < 0.1) {
      stem = 'す'; container = ['る'];
    } else { //Note the た buffer for the present short form and the replacement of potential forms with できる
      stem = 'し';
      container = verb_suru_standard;
    }
  } else if(currentverb == "3_benkyousuru") {
    suru_tag = true;
    if (Math.random() < 0.1) {
      stem = '<ruby lang="ja"><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>す'; container = ['る'];
    } else { //Note the た buffer for the present short form and the replacement of potential forms with できる
      stem = '<ruby lang="ja"><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>し';
      container = verb_suru_standard;
    }
  } else if(currentverb == "4_au") {
    stem = '<ruby lang="ja"><rb>会</rb><rp>(</rp><rt>あ</rt><rp>)</rp></ruby>';
    container = verb_u_u_standard;
  } else if(currentverb == "4_aru") {
    stem = 'あ';
    container = ['る', 'ります', 'った', 'りました', 'ない', 'りません', 'りませんでした'];
  } else if(currentverb == "4_kau") {
    stem = '<ruby lang="ja"><rb>買</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>';
    container = verb_u_u_standard;
  } else if(currentverb == "4_kaku") {
    stem = '<ruby lang="ja"><rb>書</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>';
    container = verb_u_ku_standard;
  } else if(currentverb == "4_toru") {
    stem = '<ruby lang="ja"><rb>撮</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>';
    container = verb_u_ru_standard;
  } else if(currentverb == "4_matsu") {
    stem = '<ruby lang="ja"><rb>待</rb><rp>(</rp><rt>ま</rt><rp>)</rp></ruby>';
    container = verb_u_tsu_standard;
  } else if(currentverb == "4_wakaru") {
    stem = 'わか';
    container = verb_u_ru_standard;
  } else if(currentverb == "4_iru") {
    stem = 'い';
    container = ['る', 'ます', 'た', 'ました', 'ない', 'ません', 'なかった', 'ませんでした'];
  } else if(currentverb == "5_oyogu") {
    stem = '<ruby lang="ja"><rb>泳</rb><rp>(</rp><rt>およ</rt><rp>)</rp></ruby>';
    container = verb_u_gu_standard;
  } 
  
  //DEFAULT
  if (container.length == 0) {
    return '<ruby lang="ja"><rb>契約</rb><rp>(</rp><rt>けいやく</rt><rp>)</rp></ruby>' + "して、" + 
    '<ruby lang="ja"><rb>魔法少女</rb><rp>(</rp><rt>まほうしょうじょ</rt><rp>)</rp></ruby>' + "になってよ！」<span style=\"color:aqua\">__</span>" + 
    '<ruby lang="ja"><rb>言</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>' + "っていました";
  }

  var randindex = Math.floor((Math.random() * container.length));
  var toreturn = stem + container[randindex];

  var endingadded = false;
  //Below, disable verbs that cannot use endings
  if (currentverb == "3_kuru") {endingadded = true;} //because complications with multiple verb stem forms and inconsistent container
  if (currentverb == "4_aru" || currentverb == "4_iru") {endingadded = true;}
  if (container.length == 1 && suru_tag) { //Specifically for forms of する where the short present form was chosen. Other cases are fine.
    endingadded = true;
  }

  if (suru_tag && randindex >= 10 && randindex <= 13) { //Cheap way to allow forms of できる while allowing endings and not doing the 来る route
    var action_suru = "";
    if(currentverb == "3_benkyousuru") {action_suru = '<ruby lang="ja"><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>';}
    toreturn = action_suru + container[randindex]; //Basically reset the toreturn by removing stem. If had an action, replaces with appropriate action.
  }
  if (currentverb == "4_aru" && randindex == 4) { //ない case for ある
    toreturn = container[randindex];
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
    document.getElementById("quiz_result").innerHTML = "Please make a selection.";
    return false;
  }

  var submission = "";
  if (s == "wo") {submission = "を";}
  else if (s == "ga") {submission = "が";}
  else if (s == "de") {submission = "で";}
  else if (s == "ni") {submission = "に";}
  else if (s == "he") {submission = "へ";}
  else if (s == "to") {submission = "と";}
  else if (s == "mo") {submission = "も";}
  else if (s == "kara") {submission = "から";}
  else if (s == "made") {submission = "まで";}

  var theAnswer = [];
  var kyubey = false;

  //Determine what answers are 
  if (verbID == "3_iku") {theAnswer.push("に"); theAnswer.push("へ");}
  if (verbID == "3_kaeru") {theAnswer.push("に"); theAnswer.push("へ");}
  if (verbID == "3_kiku") {theAnswer.push("を");}
  if (verbID == "3_nomu") {theAnswer.push("を");}
  if (verbID == "3_hanasu") {theAnswer.push("で"); theAnswer.push("を");}
  if (verbID == "3_yomu") {theAnswer.push("を");}
  if (verbID == "3_okiru") {theAnswer.push("で");}
  if (verbID == "3_taberu") {theAnswer.push("を");}
  if (verbID == "3_neru") {theAnswer.push("で");}
  if (verbID == "3_miru") {theAnswer.push("を");}
  if (verbID == "3_kuru") {theAnswer.push("から"); theAnswer.push("に"); theAnswer.push("へ");}
  if (verbID == "3_suru") {theAnswer.push("を");}
  if (verbID == "3_benkyousuru") {theAnswer.push("を");}
  if (verbID == "4_au") {theAnswer.push("に");}
  if (verbID == "4_aru") {theAnswer.push("が");}
  if (verbID == "4_kau") {theAnswer.push("を");}
  if (verbID == "4_kaku") {theAnswer.push("を");}
  if (verbID == "4_toru") {theAnswer.push("を");}
  if (verbID == "4_matsu") {theAnswer.push("で");}
  if (verbID == "4_wakaru") {theAnswer.push("が");}
  if (verbID == "4_iru") {theAnswer.push("が");}
  if (verbID == "5_oyogu") {theAnswer.push("で");}
  if (verbID == "5_kiku") {theAnswer.push("に");}

  if (theAnswer.length == 0) {theAnswer.push("to"); kyubey = true;} //defaults to Kyubey

  var feedback = "Acceptable answers include: " + theAnswer + "<br><br>" + qc_verbinformation(verbID); //For notes and feedback

  if(contains(theAnswer, submission)){
    document.getElementById("quiz_result").innerHTML = "'"+submission+"' is correct!<br>" + feedback + (kyubey ? "<br>Contract complete! You are now a magical girl!" : "");
  }else{
    document.getElementById("quiz_result").innerHTML = "'"+submission+"' is incorrect.<br>" + feedback + (kyubey ? "<br>／人 ͡° ‿‿  ͡°人＼" : "");
  }

  return false;
}

function qc_verbinformation(verbID) {
  if (verbID == "3_iku") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>行</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>く</span>' + 
      '<br>Genki (L3): to go (<i>destination</i> <span style="color:springgreen">に・へ</span>)';
  } else if (verbID == "3_kaeru") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>帰</rb><rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>る</span>' + 
      '<br>Genki (L3): to go back; to return (<i>destination</i> <span style="color:springgreen">に・へ</span>)';
  } else if (verbID == "3_kiku" || verbID == "5_kiku") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>聞</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>く</span>' + 
      '<br>Genki (L3): to listen; to hear (<span style="color:springgreen">〜を</span>)' +
      '<br>Genki (L5): to ask (<i>person</i> <span style="color:springgreen">に</span>)';
  } else if (verbID == "3_nomu") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>飲</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>む</span>' + 
      '<br>Genki (L3): to drink (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "3_hanasu") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>話</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>す</span>' + 
      '<br>Genki (L3): to speak; to talk (<i>language</i> <span style="color:springgreen">を・で</span>)';
  } else if (verbID == "3_yomu") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>む</span>' + 
      '<br>Genki (L3): to read (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "3_okiru") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>起</rb><rp>(</rp><rt>お</rt><rp>)</rp></ruby>き</span>' + 
      '<br>Genki (L3): to get up';
  } else if (verbID == "3_taberu") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>食</rb><rp>(</rp><rt>た</rt><rp>)</rp></ruby>べる</span>' + 
      '<br>Genki (L3): to eat (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "3_neru") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>寝</rb><rp>(</rp><rt>ね</rt><rp>)</rp></ruby>る</span>' + 
      '<br>Genki (L3): to sleep; to go to sleep';
  } else if (verbID == "3_miru") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>見</rb><rp>(</rp><rt>み</rt><rp>)</rp></ruby>る</span>' + 
      '<br>Genki (L3): to see; to look at; to watch (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "3_kuru") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>来</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>る</span>' + 
      '<br>Genki (L3): to come (<i>destination</i> <span style="color:springgreen">に・へ</span>)';
  } else if (verbID == "3_suru") {
    return '<span style="color:aquamarine">する</span>' + 
      '<br>Genki (L3): to do (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "3_benkyousuru") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>する</span>' + 
      '<br>Genki (L3): to study (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "4_au") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>会</rb><rp>(</rp><rt>あ</rt><rp>)</rp></ruby>う</span>' + 
      '<br>Genki (L4): to meet; to see (a person) (<i>person</i> <span style="color:springgreen">に</span>)';
  } else if (verbID == "4_aru") {
    return '<span style="color:aquamarine">ある</span>' + 
      '<br>Genki (L4): there is... (<span style="color:springgreen">〜が</span>)';
  } else if (verbID == "4_kau") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>買</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>う</span>' + 
      '<br>Genki (L4): to buy (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "4_kaku") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>書</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>く</span>' + 
      '<br>Genki (L4): to write (<i>person</i> <span style="color:springgreen">に</span> <i>thing</i> <span style="color:springgreen">を</span>)';
  } else if (verbID == "4_toru") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>撮</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>る</span>' + 
      '<br>Genki (L4): to take (pictures) (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "4_matsu") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>待</rb><rp>(</rp><rt>ま</rt><rp>)</rp></ruby>つ</span>' + 
      '<br>Genki (L4): to wait (<span style="color:springgreen">〜を</span>)';
  } else if (verbID == "4_wakaru") {
    return '<span style="color:aquamarine">わかる</span>' + 
      '<br>Genki (L4): to understand (<span style="color:springgreen">〜が</span>)' +
      '<br>Note: Intransitive';
  } else if (verbID == "4_iru") {
    return '<span style="color:aquamarine">いる</span>' + 
      '<br>Genki (L4): (a person) is in...; stays at... (<span style="color:springgreen">〜が</span>)';
  } else if (verbID == "5_oyogu") {
    return '<span style="color:aquamarine"><ruby lang="ja"><rb>泳</rb><rp>(</rp><rt>およ</rt><rp>)</rp></ruby>ぐ</span>' + 
      '<br>Genki (L5): to swim';
  }
  return "";
}

function qc_checkAll(newval) {
  qc_checkL3(newval);
  qc_checkL4(newval);
  qc_checkL5(newval);
  qc_checkL6(newval);
  qc_checkL7(newval);
  qc_checkL8(newval);
  qc_checkL9(newval);
  qc_checkL10(newval);
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

function qc_checkL4(newval) {
  document.getElementById("quiz4_master").checked = newval;

  document.getElementById("quiz4_au").checked = newval;
  document.getElementById("quiz4_aru").checked = newval;
  document.getElementById("quiz4_kau").checked = newval;
  document.getElementById("quiz4_kaku").checked = newval;
  document.getElementById("quiz4_toru").checked = newval;
  document.getElementById("quiz4_matsu").checked = newval;
  document.getElementById("quiz4_wakaru").checked = newval;
  document.getElementById("quiz4_iru").checked = newval;
}

function qc_checkL5(newval) {
  document.getElementById("quiz5_master").checked = newval;

  document.getElementById("quiz5_oyogu").checked = newval;
  document.getElementById("quiz5_kiku").checked = newval;
  document.getElementById("quiz5_noru").checked = newval;
  document.getElementById("quiz5_yaru").checked = newval;
  document.getElementById("quiz5_dekakeru").checked = newval;
}

function qc_checkL6(newval) {
  document.getElementById("quiz6_master").checked = newval;
}

function qc_checkL7(newval) {
  document.getElementById("quiz7_master").checked = newval;
}

function qc_checkL8(newval) {
  document.getElementById("quiz8_master").checked = newval;
}

function qc_checkL9(newval) {
  document.getElementById("quiz9_master").checked = newval;
}

function qc_checkL10(newval) {
  document.getElementById("quiz10_master").checked = newval;
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}