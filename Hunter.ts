import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Hunter extends Personagem {
    
    constructor(nome: string) {
        
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(20, 1_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        
    }
}
