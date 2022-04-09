import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Mage extends Personagem {
    private _intelecto: number;
    private _velocidade: number;
    private _vidas: number;
    constructor(nome: string) {
    private _velocidadeDeCast: number;
    constructor(nome: string, armadura: string, vidaMaxima: string, vidaAtual: string, intelecto: string, velocidadeDeCast: number) {
        super(nome);
        this._vidas = (10);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(600, 1_000);
        this._vidaAtual = Util.randomizar(80, this._vidaMaxima);
        this._intelecto = Util.randomizar(100, 1_000);
        this._velocidade = Util.randomizar(10, 2_000);
        this._velocidadeDeCast = Util.randomizar(10, 3_000);
    }
}
