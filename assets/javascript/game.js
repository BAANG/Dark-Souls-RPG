//  Variables
var playerChar;
var enemyChar;
var charArray;

// Character Sheets & Constructor (using object protoypes)

function character(charName, healthPoints, atkPwr, counterAtk) {
    this.name = charName;
    this.hp = healthPoints;
    this.ap = atkPwr;
    this.cp = counterAtk;
};

var asagi = new character("Asagi, Sniper of Demons", 100, 30, 15);
var bloodis = new character("Bloodis, Great Demon Fist", 250, 10, 5);
var laharl = new character("Laharl, Demon Prince", 120, 25, 15);
var prinny = new character("Prinny, Worthless Soul", 500, 1, 50);