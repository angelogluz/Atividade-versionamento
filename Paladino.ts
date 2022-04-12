import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Paladino extends Personagem {
    private _inteligencia: number;
    private _espirito: number;
    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000); 
        this._forca = Util.randomizar(100, 1_000);	
       	this._vidaMaxima = Util.randomizar(200, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
	this._inteligencia = Util.randomizar(100, 1_000);
        this._espirito = Util.randomizar(10, 2_000);
    }
}
