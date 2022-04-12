import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Hunter extends Personagem {
    private _destreza: number;
    private _agilidade: number;

    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(300, 2_000);
        this._vidaMaxima = Util.randomizar(300, 2_000);
        this._vidaAtual = Util.randomizar(300, this._vidaMaxima);
        this._destreza = Util.randomizar(300, 10_000);
        this._agilidade = Util.randomizar(300, 10_000);
    }
}
