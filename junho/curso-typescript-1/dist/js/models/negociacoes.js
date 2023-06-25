export class Negociacoes {
    constructor() {
        // ? Array<Negociacao> same as Negociacao[]
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ? ReadonlyArray<Negociacao> same as 'readonly Negociacao[]'
    lista() {
        return this.negociacoes;
    }
}
