var randomBodyParts = [ "глаза" , "рот" , "уши" , "нос" , "лоб" , "щёки" , "воласы" , "шея" , "ноги" , "руки" , "пальцы" ];
var randomAdjectives = [ "вонючая" , "унылая" , "грязная" , "дурацкая" , "умная" , "шорошая" , "красивая" ];
var randomWords = [ "котяра" , "собака" , "мышь" , "муха" , "лошадь" , "обезьяна" , "пчела" , "мартышка" , "крыса" ];
var list = document.getElementById('list');
var input = document.getElementById('addVel');
var insult = document.getElementById("draz");
var items = [];
var num = 0;
var result = document.getElementById("result");
var moreMenu = document.getElementById("more__popup");
var vis = false;
var vis2 = false;
var setting = document.getElementById("settings");
var closeImg = document.getElementById("close");
var setting1 = document.getElementById("set-1");
var setting2 = document.getElementById("set-2");
var setting3 = document.getElementById("set-3");
var setting4 = document.getElementById("set-4");
var setting5 = document.getElementById("set-5");
var setting6 = document.getElementById("set-6");
var setting7 = document.getElementById("set-7");
var setting8 = document.getElementById("set-8");
var setting9 = document.getElementById("set-9");
var setting10 = document.getElementById("set-10");
var setting2StandColor = "#4AD17D"
var setting3StandColor = "#D19B4A"
var setting4StandColor = "#d1574a"
var setting5StandColor = "#D14AB8"
var setting6StandColor = "#000000"
var setting7StandColor = "#59E4F5"
var setting8StandColor = "#275661"
var setting9StandColor = "#4A5BD1"
var setting10StandColor = "#148B8B"
var colors = ["green","blue","lightblue","aqua","yellow","gray","pink","black","lime","maroon","red","teal","grey","white","silver","navy","olive","purple","fuchsia"];

	setting2.setAttribute('prop',0);
	setting3.setAttribute('prop',0);
	setting4.setAttribute('prop',0);
	setting5.setAttribute('prop',0);
	setting6.setAttribute('prop',0);
	setting7.setAttribute('prop',0);
	setting8.setAttribute('prop',0);
	setting9.setAttribute('prop',0);
	setting10.setAttribute('prop',0);

// setting2.addEventListener('click', function (event){ var d = setting2.getAttribute('prop'); d++; if (d == 19){d=0}; setting2.setAttribute('prop', d);refresh(setting2.getAttribute('prop'), setting2); } refresh(setting2.getAttribute('prop'), setting2);)
// setting3.addEventListener('click', function (event){ var d = setting3.getAttribute('prop'); d++; if (d == 19){d=0}; setting3.setAttribute('prop', d);})
// setting4.addEventListener('click', function (event){ var d = setting4.getAttribute('prop'); d++; if (d == 19){d=0}; setting4.setAttribute('prop', d);})
// setting5.addEventListener('click', function (event){ var d = setting5.getAttribute('prop'); d++; if (d == 19){d=0}; setting5.setAttribute('prop', d);})
// setting6.addEventListener('click', function (event){ var d = setting6.getAttribute('prop'); d++; if (d == 19){d=0}; setting6.setAttribute('prop', d);})
// setting7.addEventListener('click', function (event){ var d = setting7.getAttribute('prop'); d++; if (d == 19){d=0}; setting7.setAttribute('prop', d);})
// setting8.addEventListener('click', function (event){ var d = setting8.getAttribute('prop'); d++; if (d == 19){d=0}; setting8.setAttribute('prop', d);})
// setting9.addEventListener('click', function (event){ var d = setting9.getAttribute('prop'); d++; if (d == 19){d=0}; setting9.setAttribute('prop', d);})
// setting10.addEventListener('click', function (event){ var d = setting10.getAttribute('prop'); d++; if (d == 19){d=0}; setting10.setAttribute('prop', d);})



closeImg.addEventListener('click', close);

function alt() {
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 10)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 6)];
var randomWord = randomWords[Math.floor(Math.random() * 8)];
var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
insult.innerHTML = randomInsult;
}
function add(){
   var text = document.createTextNode(input.value);
   var item = document.createElement('li');
   item.appendChild(text);
   list.appendChild(item);
   items.push(input.value)
   input.value = " ";

}
function rundom() {
      let rdmNum = Math.floor(Math.random() * items.length);
      result.innerHTML = items[rdmNum];
}

function more() {
	if(vis == false){
		moreMenu.setAttribute("style","display:block; background-color: rgba(0, 0, 0, 10);");
		vis = true;
	}
	else if(vis == true){
		moreMenu.setAttribute("style","display:none;");
		vis = false;
	}
}
function settings() {
	if(vis2 == false){
		setting.setAttribute("style","display:block;");
		vis2 = true;
	}
	
}

function close(){
	if(vis2 == true){
		setting.setAttribute("style","display:none;");
		vis2 = false;
	}
}


// function refresh(num, setting) {
// 	switch (num) {
// 		case 0 :
// 		setting.textContent = "Стандартный";
// 		break;
// 		case 1 :
// 		setting.textContent = "Зелёный";
// 		break;
// 	} 
// }











 