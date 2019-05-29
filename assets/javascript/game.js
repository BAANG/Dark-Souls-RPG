

//  Variables
var player;
var enemy;
var charArray = [];
var hpArray = [];
var apArray = [];
var cpArray = [];
var imgArray = [];
var cutArray = [];
var baseAP;
var charPicked = false;
var enemyPicked = false;
var isAlive = true;
var enemyIsAlive = true;
var enemiesLeft = 3;
var roundNumber = 0;


// Character Sheets & Constructor (using object protoypes)

function character(charName, healthPoints, atkPwr, counterAtk, charSprite, cutPortrait) {
    this.name = charName;
    this.hp = healthPoints;
    this.ap = atkPwr;
    this.cp = counterAtk;
    this.src = charSprite;
    this.cut = cutPortrait;
};

var asagi = new character("<b>Asagi</b>, <small>Sniper of Demons</small>", 100, 30, 15, "assets/images/asagi.gif", "assets/images/asagicut.png");
var bloodis = new character("<b>Bloodis</b>, <small>Great Demon Fist</small>", 300, 10, 5, "assets/images/bloodis.gif", "assets/images/bloodiscut.png");
var laharl = new character("<b>Laharl</b>, <small>Demon Overlord</small>", 120, 25, 35, "assets/images/laharl.gif", "assets/images/laharlcut.png");
var prinny = new character("<b>Prinny</b>, <small>Worthless Soul</small>", 250, 1, 20, "assets/images/prinny.gif", "assets/images/prinnycut.png");

console.log(charArray)

// Create Player/Enemy Cards

spawnChar = function() {
    
    player = charArray[i];
    console.log(player);

    baseAP = player.ap; //sets base attack

    $("#battleText1").html("<h4>" +player.name+ "</h4>")
    
    $("#playerChar").attr("src", imgArray[i]);
    $("#playerChar").addClass("spawn");
    $("#playerChar").removeClass("death");
    
    $("#playerCut").attr("src", cutArray[i]); 
    $("#playerCut").addClass("enter");
    $("#playerCut").removeClass("exit");
    
    $("#playerHealth").attr({ //checks and prints health values
        value: hpArray[i],
        max: hpArray[i],
    });
    $("#playerHealth").removeClass("death")
    
    $("#playerHealth").css("visibility", "visible");
    

    charArray.splice(i, 1);
    hpArray.splice(i, 1);
    apArray.splice(i, 1);
    cpArray.splice(i, 1);
    imgArray.splice(i, 1);
    cutArray.splice(i, 1);
}

spawnEnemy = function () {
   
    enemy = charArray[i];
    console.log(enemy);

    $("#battleText2").html("<h4>" +enemy.name+ "</h4>")
    
    $("#enemyChar").attr("src", imgArray[i]);
    $("#enemyChar").addClass("spawn");
    $("#enemyChar").removeClass("death");
    
    $("#enemyCut").attr("src", cutArray[i]);
    $("#enemyCut").addClass("enter");
    $("#enemyCut").removeClass("exit");

    
    $("#enemyHealth").attr({
        value: hpArray[i],
        max: hpArray[i],
    });
    $("#enemyHealth").removeClass("death")
    
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

// Battle Functions

damagePhase = function(){
   
    enemy.hp -= player.ap //hp calculation
    player.hp -= enemy.cp
    
    $("#battleText1").addClass("slide");
    $("#battleText2").addClass("slide");
    $("#battleText1").html(player.name + " attacks for <b>" + player.ap + "</b> damage!");
    $("#battleText2").html(enemy.name + " counters for <b>" + enemy.cp + "</b> damage!");

    $("#playerHealth").attr("value", player.hp);
    $("#enemyHealth").attr("value", enemy.hp);

    if (player.hp > 0) {
        isAlive = true;
        player.ap += baseAP;

        if (player === prinny) {  // prinny OP
            player.ap += (player.ap^2)
        }

        $("#playerChar").addClass("attack");
    } else if (player.hp <= 0) {
        $("#playerCut").removeClass("enter")
        $("#playerCut").addClass("exit")

        
        $("#character-select-prompt").append("<br>" + player.name + " has been <b>DEFEATED</b>!")
        
        isAlive = false;
    }
    if (enemy.hp > 0) {
        enemyIsAlive = true;
        $("#enemyChar").addClass("attack");        
    } else if (enemy.hp <= 0) {
        $("#enemyCut").removeClass("enter")
        $("#enemyCut").addClass("exit")

        $("#character-select-prompt").append("<br>" + enemy.name + " has been <b>DEFEATED</b>!")

        enemyIsAlive = false;
    }
    setTimeout(animationReset, 600);
}

animationReset = function() {
    $("#playerChar").removeClass("attack");
    $("#playerChar").removeClass("spawn");
    
    $("#enemyChar").removeClass("attack");
    $("#enemyChar").removeClass("spawn");

    $("#battleText1").removeClass("slide");
    $("#battleText2").removeClass("slide");
}

// Win/Lose Conditions

checkWin = function () {
    if (!isAlive) {
        $("#playerChar").addClass("death")
        $("#playerHealth").addClass("death")
        $("#user-control").text("Try again?")
        $("#youLose").attr("style", "visibility: visible");
    } 
    
    if (!enemyIsAlive) {
        $("#enemyChar").addClass("death")
        $("#enemyHealth").addClass("death")
        enemyPicked = false;
        enemiesLeft--;
        console.log(enemiesLeft);
        if (enemiesLeft === 0) {
            $("#user-control").text("Play again?");
            $("#youWin").attr("style", "visibility: visible");
        }
    }
}

// Remove Splash Screen (to use with setTimeout for event timing)

splashScreen = function() {
    $("#splash").remove();
}

// Reset Game Animation

resetPage = function () {
    $("#game").removeClass("death");
    $("#game").addClass("start");

    $(".charBtn").removeClass("select")
    $("#character-select-prompt").text("Choose your character...")
    $("#playerCut").attr("src", "")
    $("#enemyCut").attr("src", "")
    $("#playerCut").removeClass("enter")
    $("#enemyCut").removeClass("enter")
    $("#enemyChar").attr("src", "")
    $("#playerChar").attr("src", "")
    $("#playerChar").removeClass("death")
    $("#playerHealth").attr("style", "visibility: hidden")
    $("#enemyHealth").attr("style", "visibility: hidden")
    $("#youWin").attr("style", "visibility: hidden")
    $("#youLose").attr("style", "visibility: hidden")
    $("#battleText1").empty()
    $("#battleText2").empty()
    $("#user-control").text("Attack")
}

// Reset Game Function

resetGame = function () {
    $("#game").removeClass("start");
    $("#game").addClass("death");
    
    charArray = [];
    hpArray = [];
    apArray = [];
    cpArray = [];
    imgArray = [];
    cutArray = [];
    charPicked = false;
    enemyPicked = false;
    isAlive = true;
    enemyIsAlive = true;
    enemiesLeft = 3;
    roundNumber = 0;

asagi = new character("<b>Asagi</b>, <small>Sniper of Demons</small>", 100, 30, 15, "assets/images/asagi.gif", "assets/images/asagicut.png");
bloodis = new character("<b>Bloodis</b>, <small>Great Demon Fist</small>", 300, 10, 5, "assets/images/bloodis.gif", "assets/images/bloodiscut.png");
laharl = new character("<b>Laharl</b>, <small>Demon Overlord</small>", 120, 25, 35, "assets/images/laharl.gif", "assets/images/laharlcut.png");
prinny = new character("<b>Prinny</b>, <small>Worthless Soul</small>", 250, 1, 20, "assets/images/prinny.gif", "assets/images/prinnycut.png");

    charArray.push(asagi, bloodis, laharl, prinny) //// Reload arrays for character selection
    hpArray.push(asagi.hp, bloodis.hp, laharl.hp, prinny.hp)
    apArray.push(asagi.ap, bloodis.ap, laharl.ap, prinny.ap)
    cpArray.push(asagi.cp, bloodis.cp, laharl.cp, prinny.cp)
    imgArray.push(asagi.src, bloodis.src, laharl.src, prinny.src)
    cutArray.push(asagi.cut, bloodis.cut, laharl.cut, prinny.cut)

    setTimeout(resetPage, 1200)
}


// On Page Load


$(document).ready(function () {

charArray.push(asagi, bloodis, laharl, prinny) //// adds characters to selection pool
hpArray.push(asagi.hp, bloodis.hp, laharl.hp, prinny.hp)
apArray.push(asagi.ap, bloodis.ap, laharl.ap, prinny.ap)
cpArray.push(asagi.cp, bloodis.cp, laharl.cp, prinny.cp)
imgArray.push(asagi.src, bloodis.src, laharl.src, prinny.src)
cutArray.push(asagi.cut, bloodis.cut, laharl.cut, prinny.cut)

    // Event Listener (Splash Screen)
    $("#splash").on("click", function(){
        setTimeout(splashScreen, 2200);
        $("#splash").addClass("fade");
        $("#game").css("visibility", "visible");
        $("#game").addClass("start");
        
    });

    // Event Listener (Choose Characters)
    $(".charBtn").on("click", function() {
        if (charPicked === false) { // if character has NOT been picked
            for (i = 0; i < charArray.length; i++) {      
                if (charArray[i].name === this.name) {
                    $(this).addClass("select");
                    spawnChar();
                    charPicked = true;
                    $("#character-select-prompt").text("Choose your opponent...")
                }
            }  
        } else if (enemyPicked === false) { //after character has been picked, if enemy has NOT been picked
            for (i = 0; i < charArray.length; i++) {
                if (charArray[i].name === this.name) {
                    $(this).addClass("select");
                    spawnEnemy();
                    enemyPicked = true;
                    enemyIsAlive = true;
                    roundNumber ++;
                    $("#character-select-prompt").html("Round " + roundNumber)
                }
            }
        }   
    
    
    })


    //Event Listener (Control Button functionality)
    $("#user-control").on("click", function() { 
        if (!isAlive || enemiesLeft === 0) {
            resetGame();
        } else if (charPicked && enemyPicked) {
           damagePhase();
           console.log("Enemy HP: " + enemy.hp)
           console.log("Player HP: " + player.hp)
           checkWin ();
        } 
        
    });

});
