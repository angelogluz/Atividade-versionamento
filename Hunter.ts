import { Personagem } from "./Personagem";
import { Util } from "./Util";

// Classe Hunter tem como diferencial a agilidade e o foco do personagem que faz de um excelente caçador
export class Hunter extends Personagem {

    //Atributos específicos do personagem Hunter
    private _focado: number;
    private _agilidade: number;
    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(40, 1_000);
        this._vidaAtual = Util.randomizar(30, this._vidaMaxima);
        this._focado = Util.randomizar(95, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }
}

