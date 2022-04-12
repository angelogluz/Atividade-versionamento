import { Personagem } from "./Personagem"
import { Util } from "./Util"

export class Hunter extends Personagem {
    private _intelecto: number
    private _velocidade: number
    private _forca: number
    private _habilidade: number

    constructor(nome: string) {
        super(nome)
        this._forca = Util.randomizar(100, 1_000)
        this._vidaMaxima = Util.randomizar(200, 1_000)
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima)
        this._habilidade = Util.randomizar(100, 1_000)
        this._intelecto = Util.randomizar(100, 1_000)
        this._velocidade = Util.randomizar(10, 2_000)
    }
}
