import { Priest } from "./Priest"
import { Warrior } from "./Warrior"
import { Mage } from "./Mage"
import { Hunter } from "./Hunter"
import { Personagem } from "./Personagem"

let mage: Personagem = new Mage("Angelo mage")
let hunter: Personagem = new Hunter("Angelo hunter")
let warrior: Personagem = new Warrior("Angelo warrior")
let priest: Personagem = new Priest("Angelo priest")

console.log("mage :>> ", mage)
console.log("hunter :>> ", hunter)
console.log("warrior :>> ", warrior)
console.log("priest :>> ", priest)
