import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Hunter extends Personagem {
    private _precisao: number;
    private _rastreamento: number;
    private _domarAnimais: boolean;
    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(150, 1_000);
        this._vidaMaxima = Util.randomizar(300, 1_000);
        this._vidaAtual = Util.randomizar(70, this._vidaMaxima);
        this._precisao = Util.randomizar(500, 1_000);
        this._rastreamento = Util.randomizar(50, 2_000);
        this._domarAnimais = true;
    }
}
