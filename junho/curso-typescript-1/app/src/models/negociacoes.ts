import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // ? Array<Negociacao> same as Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // ? ReadonlyArray<Negociacao> same as 'readonly Negociacao[]'
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}