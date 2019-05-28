

//  Variables
var playerChar;
var enemyChar;
var charArray = [];

// Character Sheets & Constructor (using object protoypes)

function character(charName, healthPoints, atkPwr, counterAtk, charSprite) {
    this.name = charName;
    this.hp = healthPoints;
    this.ap = atkPwr;
    this.cp = counterAtk;
    this.sprite = charSprite;
};

var asagi = new character("Asagi, Sniper of Demons", 100, 30, 15, "../images/asagi.gif");
var bloodis = new character("Bloodis, Great Demon Fist", 250, 10, 5, "../images/bloodis.gif");
var laharl = new character("Laharl, Demon Prince", 120, 25, 15, "../images/laharl.gif");
var prinny = new character("Prinny, Worthless Soul", 500, 1, 50, "../images/prinny.gif");

charArray.push(asagi, bloodis, laharl, prinny)
console.log(charArray)

// On Page Load

$(document).ready(function () {

    $(document).on("click", "#charBtn", function() {
        console.log("This is a character button.")
    })
});
