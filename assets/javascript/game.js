//  Variables
var playerChar;
var enemyChar;
var charArray;

// Character Sheets & Constructor (using object protoypes)

function createChar (charName, healthPoints, atkPwr, counterAtk) {
    this.name = charName;
    this.hp = healthPoints;
    this.ap = atkPwr;
    this.cp = counterAtk;
}