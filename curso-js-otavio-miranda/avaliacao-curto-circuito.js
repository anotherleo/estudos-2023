// Avaliação de curto circuito
console.log('Leo Thomas' && false && 'Fabi Viegas'); // retorna false
console.log('Leo Thomas' && true && 'Fabi Viegas'); // retorna o último valor
console.log('Leo Thomas' && true && NaN); // retorna a última
console.log(0 || false || null || 'Leozinho' || true); // retorna Leozinho

// FALSY VALUES
// 0
// string vazia ''
// false
// null
// undefined
// NaN


// Exemplo de uso com &&
function falaOi() {
    return 'Oi';
}
const vaiExecutar = false;

console.log(vaiExecutar && falaOi);

// Exemplo de uso com ||
let corUser = null;
let corPadrao = corUser || 'black';
console.log(corPadrao);
