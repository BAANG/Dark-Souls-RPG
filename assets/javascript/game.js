

//  Variables
var playerChar;
var enemyChar;
var charArray = [];
var charPicked = false;
var enemyPicked = false;

// Character Sheets & Constructor (using object protoypes)

function character(charName, healthPoints, atkPwr, counterAtk, charSprite) {
    this.name = charName;
    this.hp = healthPoints;
    this.ap = atkPwr;
    this.cp = counterAtk;
    this.src = charSprite;
};

var asagi = new character("Asagi, Sniper of Demons", 100, 30, 15, "assets/images/asagi.gif");
var bloodis = new character("Bloodis, Great Demon Fist", 250, 10, 5, "assets/images/bloodis.gif");
var laharl = new character("Laharl, Demon Prince", 120, 25, 15, "assets/images/laharl.gif");
var prinny = new character("Prinny, Worthless Soul", 500, 1, 50, "assets/images/prinny.gif");

console.log(charArray)

// Load Character Information

$("#asagi").attr(asagi)
$("#bloodis").attr(bloodis)
$("#laharl").attr(laharl)
$("#prinny").attr(prinny)

// On Page Load

$(document).ready(function () {

    // Event Listener (Click Character Button)

    $(".charBtn").on("click", function() {
        console.log("This is a character button.")
    })
});
