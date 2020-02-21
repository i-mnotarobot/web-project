function alt() {
    var randomBodyParts = [ "глаза" , "рот" , "уши" , "нос" , "лоб" , "щёки" , "воласы" , "шея" , "ноги" , "руки" , "пальцы" ];
var randomAdjectives = [ "вонючая" , "унылая" , "грязная" , "дурацкая" , "умная" , "шорошая" , "красивая" ];
var randomWords = [ "котяра" , "собака" , "мышь" , "муха" , "лошадь" , "обезьяна" , "пчела" , "мартышка" , "крыса" ];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 10)];

		

var randomAdjective = randomAdjectives[Math.floor(Math.random() * 6)];

var randomWord = randomWords[Math.floor(Math.random() * 8)];

var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
document.getElementById("draz").innerHTML = randomInsult;
}