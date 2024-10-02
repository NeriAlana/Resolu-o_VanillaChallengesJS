# Boas-vindas ao repositório do Desafio!

## 1 - Implemente a função printElements

<details>
  <summary>
    Implemente a função <code>printElements</code> escreva um código que imprima todos os elementos de um array.
  </summary> <br />

A função `printElements` recebe um arrray por parâmetro e imprime um por um dos elementos do aray:

</details>

## 2 - Crie uma função que acha o maior número

<details>
  <summary>
  Implemente a função <code>biggerNumber</code> que retorna o maior númeo dentro de um array
 
  </summary> <br />

A função `biggerNumber` recebe um array por parâmetro.

</details>


## 3 - Crie a função ignoreFirstAndLastElement

<details>
  <summary>
Implemente a função <code>ignoreFirstAndLastElement</code> e escreva um código que imprima todos os 
elementos de um array, exceto o primeiro e o último

  </summary> <br />
</details>


## 4 - Crie uma função que inverte a ordem de um array

<details>
  <summary>
Escreva um código que inverta a ordem dos elementos de um array.
Implemente a função <code>invertElementsArray</code> que recebe um array e retorna esse array invertido 

  </summary> <br />
  
 
</details>

## 5 - Crie uma função que inverte uma string

<details>
  <summary>
Implemente a função <code>invertString</code> que inverte uma string 

  </summary> <br />

A função `invertString` recebe uma string por parâmetro e retorna essa string invertida

</details>


## 6 - Crie uma função que retira os elementos duplicados

<details>
  <summary>
Implemente a função <code>noDuplicates</code> e escreva um código que receba um array de números por parâmetro e retorne o array com os elementos duplicados removidos.

  </summary> <br />
  
  Por exemplo:

- Caso o parâmetro seja um array com valores `[9, 1, 2, 3, 9, 2, 7]`, a função deverá retornar `[9, 1, 2, 3, 7]`

</details>


## 7 - Crie uma função que calcula o salário liquido a ser receido

<details>
  <summary>
Implemente a função <code>taxesCalcul</code> que recebe por parâmetro o valor bruto (do tipo number) do salário e calcula o valor líquido.

</summary> <br />
Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

Para as faixas de impostos, use as seguintes referências:

INSS
Salário bruto até R$ 1.556,94: alíquota de 8%;
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
IR
Até R$ 1.903,98: isento de imposto de renda;
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
O cálculo deve ser o demonstrado a seguir
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

R$ 2.670,00 - salário com INSS já deduzido;
7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
R$ 142,80 - parcela a ser deduzida do imposto de renda.
Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: Salário: R$ 2612.55.
   
Exemplo:

**O que será testado:**

- A função recebe um valor do tipo number por parâmetro

- Retorna `'Salário: R$ 2612.55.'` caso o parâmeto passado seja 3000;

- Retorna `'Salário: R$ 1820'` caso o parâmeto passado seja 2000;

- Retorna `'Salário: R$ 3532.1.'` caso o parâmeto passado seja 4200;


</details>

## 8 - Crie uma função de número de telefone

<details>
  <summary>
Implemente a função  <code>formatPhoneNumber</code> que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

  </summary> <br />

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, a função `formatPhoneNumber` deverá retornar `(12) 34567-8901`.

- Retorne a frase `'Array com tamanho incorreto.'` se a função receber um array com tamanho diferente de 11;

- Retorne a string `'não é possível gerar um número de telefone com esses valores'` caso algum dos números do array seja **menor** que 0, **maior** que 9 ou se repita 3 vezes ou mais.

</details>

## 9 - Crie uma função que retorna o intevalo dentro de um array

<details>
  <summary>
Implemente a função  <code>getArrayNoIntervalo</code> que recebe um array e retorna um objeto com duas key, uma delas é arrayNoIntervalo que deve conter um array com o intervalo encontrado e a outa é o contador que deve conter quantos números contem nesse intervalo 
  </summary> <br />

  A função recebe 3 parâmetos, o primeiro é um `array` de números, o segundo é um número que representa o `inicio` do intervalo selecionado, o terceiro representa o `fim` do intervalo selecionado

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 1], 2, 4`, a função `getArrayNoIntervalo` deverá retornar `{ arrayNoIntervalo: [2, 3, 4], contador: 3 };`.

</details>
