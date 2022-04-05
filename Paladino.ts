import { Personagem } from "./Personagem";
import { Util } from "./Util";

// Classe Paladino tem como diferencial esforço

export class Paladino extends Personagem {

    //Atributos específicos do personagem Paladino

    private _focado: number;
    private _agilidade: number;
    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(50, 1_000);
        this._vidaAtual = Util.randomizar(35, this._vidaMaxima);
        this._focado = Util.randomizar(95, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }
}