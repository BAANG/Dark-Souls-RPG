

//  Variables
var playerChar;
var enemyChar;
var charArray = [];
var hpArray = [];
var apArray = [];
var cpArray = [];
var imgArray = [];
var cutArray = [];
var charPicked = false;
var enemyPicked = false;

// Character Sheets & Constructor (using object protoypes)

function character(charName, healthPoints, atkPwr, counterAtk, charSprite, cutPortrait) {
    this.name = charName;
    this.hp = healthPoints;
    this.ap = atkPwr;
    this.cp = counterAtk;
    this.src = charSprite;
    this.cut = cutPortrait;
};

var asagi = new character("Asagi", 100, 30, 15, "assets/images/asagi.gif", "assets/images/asagicut.png");
var bloodis = new character("Bloodis", 250, 10, 5, "assets/images/bloodis.gif", "assets/images/bloodiscut.png");
var laharl = new character("Laharl", 120, 25, 15, "assets/images/laharl.gif", "assets/images/laharlcut.png");
var prinny = new character("Prinny", 500, 1, 50, "assets/images/prinny.gif", "assets/images/prinnycut.png");

console.log(charArray)

// Create Player/Enemy Cards

spawnChar = function() {
    // $("#playerChar").attr("name", charArray[i]);
    // $("#playerChar").attr("hp", hpArray[i]);
    // $("#playerChar").attr("ap", apArray[i]);
    // $("#playerChar").attr("cp", cpArray[i]);
    // $("#playerChar").attr("src", imgArray[i]);

    $("#playerChar").attr({
        name: charArray[i],
        hp: hpArray[i],
        ap: apArray[i],
        cp: cpArray[i],
        src: imgArray[i]
    });

    $("#playerCut").attr("src", cutArray[i]);

    $("#playerCut").addClass("enter");
    
    $("#playerHealth").attr({
        value: hpArray[i],
        max: hpArray[i],
    });

    $("#playerHealth").css("visibility", "visible");

    charArray.splice(i, 1);
    hpArray.splice(i, 1);
    apArray.splice(i, 1);
    cpArray.splice(i, 1);
    imgArray.splice(i, 1);
    cutArray.splice(i, 1);
}

spawnEnemy = function () {
    // $("#enemyChar").attr("name", charArray[i]);
    // $("#enemyChar").attr("hp", hpArray[i]);
    // $("#enemyChar").attr("ap", apArray[i]);
    // $("#enemyChar").attr("cp", cpArray[i]);
    // $("#enemyChar").attr("src", imgArray[i]);

    $("#enemyChar").attr({
        name: charArray[i],
        hp: hpArray[i],
        ap: apArray[i],
        cp: cpArray[i],
        src: imgArray[i],
    });

    $("#enemyCut").attr("src", cutArray[i]);
    
    $("#enemyCut").addClass("enter");

    $("#enemyHealth").attr({
        value: hpArray[i],
        max: hpArray[i],
    });

    $("#enemyHealth").css("visibility", "visible");

    charArray.splice(i, 1);
    hpArray.splice(i, 1);
    apArray.splice(i, 1);
    cpArray.splice(i, 1);
    imgArray.splice(i, 1);
    cutArray.splice(i, 1);
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
cutArray.push(asagi.cut, bloodis.cut, laharl.cut, prinny.cut)

    // Event Listener (Click Character Button)
    
    $(".charBtn").on("click", function() {
        if (charPicked === false) {
            for (i = 0; i < charArray.length; i++) {      
                if (charArray[i] === this.name) {
                    $(this).addClass("select");
                    spawnChar();
                    charPicked = true;
                }
            }  
        } else if (enemyPicked === false) {
            for (i = 0; i < charArray.length; i++) {
                if (charArray[i] === this.name) {
                    $(this).addClass("select");
                    spawnEnemy();
                    enemyPicked = true;
                }
            }
        }   
    })

});
