import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesview');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    criaNegociacao() {
        // * expressao para substituir os hifens
        const exp = /-/g;
        // * utilitário para formatar o inputData como tipo Date e não string, então substituir os hífens por vírgulas.
        const date = new Date(this.inputData.value.replace(exp, ','));
        // * utilitário para converter string para inteiro
        const quantidade = parseInt(this.inputQuantidade.value);
        // * utilitário para converter string para float
        const valor = parseFloat(this.inputValor.value);
        // * agora sim, importa o modelo e aplica os dados
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
