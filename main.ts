import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";
//Importação do Personagem Hunter
import { Hunter } from "./Hunter";

let mage: Personagem = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let priest: Personagem = new Priest("Angelo priest");
//Adiciona Personagem Hunter
let hunter: Personagem = new Hunter("Grégory hunter");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);
//Adiciona Personagem Hunter
console.log("hunter :>> ", hunter);
