import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Hunter extends Personagem {
    private _furtividade: number;
    private _intuicao: number;

    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(100, 1_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._vidaAtual = 100;
        this._furtividade = Util.randomizar(200, 1_000);
        this._intuicao = Util.randomizar(1_000, 10_000)
    }
}