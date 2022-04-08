import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Mage extends Personagem {
    private _intelecto: number;
    private _velocidade: number;
<<<<<<< HEAD
    private _agilidade: number;
    
=======
    private _forca: number;
>>>>>>> a117b7c46426a3955d9a7fbc694698058ce9f160
    constructor(nome: string) {
        super(nome);
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(200, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
        this._intelecto = Util.randomizar(100, 1_000);
        this._velocidade = Util.randomizar(10, 2_000);
<<<<<<< HEAD
        this._agilidade = Util.randomizar(10, 1_000);
=======
        this._forca = Util.randomizar(90, 2_000);
>>>>>>> a117b7c46426a3955d9a7fbc694698058ce9f160
    }
}

