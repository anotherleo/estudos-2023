export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const defensivaData = new Date(this._data.getTime());
        return defensivaData;
    }

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
}