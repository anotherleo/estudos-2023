import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-excucao.js";
import { DiasDaSemana } from "../enumerations/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesview');
    private mensagemView = new MensagemView('#mensagemview');

    private negociacoesService = new NegociacoesService();

    constructor() {
        /* * Código substituído pelo @domInject
        // ? same as <HTMLInputElement>document.querySelector('#data');
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;;
        */
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect()
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        
        // ! validação do dia da semana
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.')
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.atualizaView();
    }

    public importaDados(): void {
        this.negociacoesService
        .obterNegociacoesDoDia()
        .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this.negociacoes
                    .lista()
                    .some(negocicao => negociacaoDeHoje
                        .ehIgual(negociacaoDeHoje)
                    );
            })
        })
        .then(negociacoesDeHoje => {
            for(let negociacao of negociacoesDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
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