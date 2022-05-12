import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Hunter extends Personagem {
    private _destreza: number;
    private _precisao: number;
    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(200, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
        this._destreza = Util.randomizar(100, 1_000);
        this._precisao = Util.randomizar(10, 2_000);
    }
}
