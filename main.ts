import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Warlock } from "./Warlock";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";

let mage: Personagem = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let warlock: Personagem = new Warlock("Angelo warlock");
let priest: Personagem = new Priest("Angelo priest");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("warlock :>> ", warlock);
console.log("priest :>> ", priest);
