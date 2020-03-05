var randomBodyParts = [ "глаза" , "рот" , "уши" , "нос" , "лоб" , "щёки" , "воласы" , "шея" , "ноги" , "руки" , "пальцы" ];
var randomAdjectives = [ "вонючая" , "унылая" , "грязная" , "дурацкая" , "умная" , "шорошая" , "красивая" ];
var randomWords = [ "котяра" , "собака" , "мышь" , "муха" , "лошадь" , "обезьяна" , "пчела" , "мартышка" , "крыса" ];
var list = document.getElementById('list');
var input = document.getElementById('addVel');
var insult = document.getElementById("draz");
var items = [];
var num = 0;
var result = document.getElementById("result");

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