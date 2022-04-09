import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Personagem {
    private _forca: number;
    private _agilidade: number;
    private _invisibilidade: number;
    private _imortalidade: number;
    private _Defesa: number;
    private _vigor: number;

    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(1_000, 10_000);
        this._vidaMaxima = Util.randomizar(200, 10_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._vidaAtual = 100;
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
        this._invisibilidade = Util.randomizar(100, 120);
        this._imortalidade = Util.randomizar(100, 500_000);
        this._Defesa = Util.randomizar(100, 10_000);
        this._vigor = Util.randomizar(100, 1_000);
    }
}
