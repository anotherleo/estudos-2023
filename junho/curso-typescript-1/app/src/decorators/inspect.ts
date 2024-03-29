export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const metodoOriginal = descriptor.value;

        // ? não pode usar arrow function por causa do uso do this nesse contexto
        descriptor.value = function (...args: Array<any>) {
            console.log(`---- Método ${propertyKey}`);
            console.log(`------ parâmetros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        }

        return descriptor;
    }
}