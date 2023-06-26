import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesview');
    private mensagemView = new MensagemView('#mensagemview');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        // ! validação do dia da semana
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.')
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO;
    }

    private criaNegociacao(): Negociacao {
        // * expressao para substituir os hifens
        const exp = /-/g;

        // * utilitário para formatar o inputData como tipo Date e não string, então substituir os hífens por vírgulas.
        const date = new Date(this.inputData.value.replace(exp, ','))

        // * utilitário para converter string para inteiro
        const quantidade = parseInt(this.inputQuantidade.value);

        // * utilitário para converter string para float
        const valor = parseFloat(this.inputValor.value);

        // * agora sim, importa o modelo e aplica os dados
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!')
    }
}