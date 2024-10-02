// Desafio 9
function getArrayNoIntervalo(array, inicio, fim) {
  
  const arrayNoIntervalo = array.filter((num) => {
    num >= inicio && num <= fim
  });
    return { arrayNoIntervalo, contador: arrayNoIntervalo.length };
}

module.exports = {
  getArrayNoIntervalo
}
const array = [1, 2, 3, 4, 5, 1];
const result = getArrayNoIntervalo(array, 2, 4);

console.log(`{arrayNoIntervalo: [${result.arrayNoIntervalo}], contador: ${result.contador}}`);
