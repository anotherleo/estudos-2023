import { Comparavel } from "../interfaces/comparavel.js";
import { Modelo } from "../interfaces/modelo.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        // * expressao para substituir os hifens
        const exp = /-/g;

        // * utilitário para formatar o inputData como tipo Date e não string, então substituir os hífens por vírgulas.
        const date = new Date(dataString.replace(exp, ','))

        // * utilitário para converter string para inteiro
        const quantidade = parseInt(quantidadeString);

        // * utilitário para converter string para float
        const valor = parseFloat(valorString);

        // * agora sim, importa o modelo e aplica os dados
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const defensivaData = new Date(this._data.getTime());
        return defensivaData;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data};
            Quantidade: ${this.quantidade};
            Valor: ${this.valor};
        `;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}