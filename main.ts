import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";
import { Hunter } from "./Hunter"

let mage: Personagem = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let priest: Personagem = new Priest("Angelo priest");
let hunter: Personagem = new Hunter("Angelo Dracaris");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);
console.log("hunter :>> ", hunter);

const avaliableClasses = [mage, warrior, priest, hunter]
console.log("Classes que podem domar animais: ",avaliableClasses.filter((e: any ) => e.domarAnimais))
