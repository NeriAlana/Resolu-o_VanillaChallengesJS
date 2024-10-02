// Desafio 7
function taxesCalcul(grossSalary) {
    let salarioLiquido = 0;
//CALCULANDO O VALOR DO SALARIO DEDUZINDO O VALOR DO INSS

    if (grossSalary <= 1556.94) {
        novoSalario = grossSalary - (grossSalary * 0.08);           
    }else if (grossSalary > 1556.94 && grossSalary <= 2594.92) {
        novoSalario = grossSalary - (grossSalary * 0.09);    
    }else if (grossSalary > 2594.92 && grossSalary <= 5189.82){
        novoSalario = grossSalary - (grossSalary * 0.11);
    }else {
        novoSalario = (grossSalary - 570.88);
    }
//CALCULANDO O VALOR DO SALÁRIO LÍQUIDO( salário( já deduzido o INSS) - IR(- valor de parcela))

    if (novoSalario <= 1903.98){
        salarioLiquido = novoSalario
    }else if (novoSalario > 1903.98 && novoSalario <=2826.65) {
        salarioLiquido = novoSalario - ((novoSalario * 0.075) - 142.80);
    }else if (novoSalario > 2826.65 && novoSalario <= 3751.05){
        salarioLiquido = novoSalario - ((novoSalario * 0.15) - 354.80);
    }else if (novoSalario >3751.05 && novoSalario <= 4664.68){
        salarioLiquido = novoSalario - ((novoSalario * 0.225) - 636.13);
    }else {
        salarioLiquido = novoSalario - ((novoSalario * 0.275) - 869.36);
    }
    newSalary = (`Salário: R$ ${salarioLiquido}`)
    return newSalary;
}

module.exports = {
    taxesCalcul
}
console.log(taxesCalcul(2000));
