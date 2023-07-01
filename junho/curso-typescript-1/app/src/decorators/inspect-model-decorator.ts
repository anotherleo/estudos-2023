// ? exemplo que pode ser usado para construir outros decorators, uma boilerplate
function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const metodoOriginal = descriptor.value;

        // ? não pode usar arrow function por causa do uso do this nesse contexto
        descriptor.value = function (...args: Array<any>) {
            const retorno = metodoOriginal.apply(this, args)
            return retorno;
        }

        return descriptor;
    }
}