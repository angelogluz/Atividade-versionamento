import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Hunter extends Personagem {
    private _intelecto: number;
    private _velocidade: number;
    constructor(nome: string) {
    super(nome);
        this._armadura = Util.randomizar(150, 1_000);
        this._vidaMaxima = Util.randomizar(300, 1_000);
        this._vidaAtual = Util.randomizar(100, this._vidaMaxima);
        this._intelecto = Util.randomizar(50, 1_000);
        this._velocidade = Util.randomizar(100, 2_000);
    }
}