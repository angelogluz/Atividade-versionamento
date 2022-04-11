import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Hunter extends Personagem {
    private _strenght: number;
    private _agility: number;
    private _scent: number;

    constructor(nome: string) {
        
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(20, 1_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._strenght = Util.randomizar(20,800)
        this._agility = Util.randomizar(10,500)
        this._scent = Util.randomizar(50,400)

    //Adicionado as Skills do Hunter (armadura,vida maxima , vida atual, força, agilidade e fragancia)

    }
}

