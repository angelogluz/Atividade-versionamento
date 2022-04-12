import { Priest } from "./Priest"
import { Warrior } from "./Warrior"
import { Mage } from "./Mage"
import { Personagem } from "./Personagem"
import { Hunter } from "./Hunter"
import { Warlock } from "./Warlock"
import { Paladino } from "./Paladino";

let mage: Personagem = new Mage("Angelo mage")
let warrior: Personagem = new Warrior("Angelo warrior")
let priest: Personagem = new Priest("Angelo priest")
let hunter: Personagem = new Hunter("Angelo hunter")
let warlock: Personagem = new Warlock("Angelo warlock")
let paladino: Personagem = new Paladino("Angelo paladino");

console.log("mage :>> ", mage)
console.log("warrior :>> ", warrior)
console.log("priest :>> ", priest)
console.log("hunter :>> ", hunter)
console.log("warlock :>> ", warlock)
console.log("paladino :>> ", paladino);

