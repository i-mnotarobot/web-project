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
var colors = ["green","blue","lightblue","aqua","yellow","gray","pink","black","lime","maroon","red","teal","grey","white","silver","navy","olive","purple","fuchsia"];


setting2.addEventListener('click', function (){console.log(this.id) })
// setting3
// setting4 
// setting5
// setting6
// setting7
// setting8


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
		moreMenu.setAttribute("style","display:block;");
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