

//  Variables
var playerChar;
var enemyChar;
var charArray = [];
var hpArray = [];
var apArray = [];
var cpArray = [];
var imgArray = [];
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

var asagi = new character("Asagi", 100, 30, 15, "assets/images/asagi.gif");
var bloodis = new character("Bloodis", 250, 10, 5, "assets/images/bloodis.gif");
var laharl = new character("Laharl", 120, 25, 15, "assets/images/laharl.gif");
var prinny = new character("Prinny", 500, 1, 50, "assets/images/prinny.gif");

console.log(charArray)

// Create Player/Enemy Cards

spawnChar = function() {
    $("#playerChar").attr("name", charArray[i]);
    $("#playerChar").attr("hp", hpArray[i]);
    $("#playerChar").attr("ap", apArray[i]);
    $("#playerChar").attr("cp", cpArray[i]);
    $("#playerChar").attr("src", imgArray[i]);
}

// Load Character Information

$("#asagi").attr(asagi)
$("#bloodis").attr(bloodis)
$("#laharl").attr(laharl)
$("#prinny").attr(prinny)

// On Page Load

$(document).ready(function () {

charArray.push(asagi.name, bloodis.name, laharl.name, prinny.name) //// adds characters to selection pool
hpArray.push(asagi.hp, bloodis.hp, laharl.hp, prinny.hp)
apArray.push(asagi.ap, bloodis.ap, laharl.ap, prinny.ap)
cpArray.push(asagi.cp, bloodis.cp, laharl.cp, prinny.cp)
imgArray.push(asagi.src, bloodis.src, laharl.src, prinny.src)

    // Event Listener (Click Character Button)
    
    $(".charBtn").on("click", function() {
        if (charPicked === false) {
            for (i = 0; i < charArray.length; i++) {      
                if (charArray[i] === this.name){
                    $(this).addClass("select");
                    console.log(this.src);
                    spawnChar();
                    charArray.splice(i, 1);
                    console.log(charArray);
                    charPicked = true;
                    console.log(charPicked);
                }
            }  
        }    
    })

});
