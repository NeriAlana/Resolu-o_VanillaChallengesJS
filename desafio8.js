// Desafio 8
function formatPhoneNumber(telNumber) {
    // Verifica se o tamanho do array é diferente de 11
    if (telNumber.length !== 11) {
        return 'Array com tamanho incorreto.';
    }

    const contar = {};

    for (let i = 0; i < telNumber.length; i += 1) {
        // Verifica se o número está fora do intervalo 0-9
        if (telNumber[i] < 0 || telNumber[i] > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }

        // Conta a ocorrência de cada número
        contar[telNumber[i]] = (contar[telNumber[i]] || 0) + 1;

        // Verifica se algum número se repete 3 vezes ou mais
        if (contar[telNumber[i]] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }

    // Formata o número de telefone se todas as verificações passarem
    const formatar = `(${telNumber.slice(0, 2).join('')}) ${telNumber.slice(2, 7).join('')}-${telNumber.slice(7).join('')}`;

    return formatar;
}

module.exports = {
    formatPhoneNumber
};

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));