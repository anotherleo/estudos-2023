export function domInjector(seletor: string) {
    return function (target: any, propertyKey: string) {
        //console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}.`)

        let element: HTMLElement;

        const getter = function() {

            if (!element) {
                element = <HTMLElement>document.querySelector(seletor);
                console.log(`Buscando o elemento do DOM ${seletor} para injetar em ${propertyKey}.`)
            }

            return element;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}