import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o Form existe.');
}

const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
} else {
    throw Error('Botão não foi enconrado.');
}

/*
const negociacoesView = new NegociacoesView;
const template = negociacoesView.template();
console.log(template);
*/