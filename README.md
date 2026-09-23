Atividade — JavaScript
Sistema de Atendimento de uma Lanchonete
1. Por que o switch é adequado para o menu?

O switch é adequado porque permite verificar várias opções diferentes de um mesmo valor. No menu da lanchonete, cada número representa um produto diferente, facilitando a escolha e a definição do preço.

2. Qual é a diferença entre while e do...while?

O while verifica a condição antes de executar o código. Já o do...while executa o código pelo menos uma vez e depois verifica a condição.

3. Por que o do...while foi utilizado na validação da senha?

O do...while foi utilizado porque o usuário precisa informar a senha pelo menos uma vez. Caso a senha esteja incorreta, o programa solicita a senha novamente até que ela esteja correta.

4. Em qual situação o break encerra o programa?

O break é utilizado para encerrar o laço de pedidos quando o usuário escolhe a opção 0 - Finalizar pedido.

5. O que aconteceria se retirássemos o continue da opção inválida?

Se o continue fosse retirado, o programa não voltaria imediatamente para o início do laço quando uma opção inválida fosse escolhida. O restante do código da repetição poderia continuar sendo executado.

6. Por que o for é adequado quando sabemos previamente a quantidade de repetições?

O for é adequado porque sabemos previamente quantas vezes precisamos repetir uma ação. No programa, sabemos a quantidade total de produtos comprados e podemos usar essa quantidade para mostrar cada produto registrado.

7. Reescreva a condição do desconto utilizando if/else e compare-a com o operador ternário.

Utilizando o operador ternário:

let desconto = total >= 50 ? total * 0.10 : 0;


Utilizando if/else:

let desconto;

if (total >= 50) {
    desconto = total * 0.10;
} else {
    desconto = 0;
}


Os dois códigos possuem a mesma função. O operador ternário é uma forma mais curta de escrever uma condição simples, enquanto o if/else deixa a lógica mais explícita.

Exercícios — IF/ELSE Aninhados
1. Classificação de idade

Questão: Faça um programa que solicite a idade de uma pessoa e informe:

Menor de 12 anos → "Criança"

De 12 a 17 anos → "Adolescente"

De 18 a 59 anos → "Adulto"

60 anos ou mais → "Idoso"

Resposta:
let idade = Number(prompt("Digite sua idade:"));

if (idade < 12) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

2. Situação do aluno

Questão: Solicite duas notas, calcule a média e informe:

Média ≥ 7 → "Aprovado"

Média ≥ 5 e menor que 7 → "Recuperação"

Média < 5 → "Reprovado"

Se o aluno estiver aprovado e tiver média igual a 10, mostrar também "Parabéns! Desempenho excelente!".

Resposta:
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

console.log("Média: " + media);

if (media >= 7) {
    console.log("Aprovado");

    if (media === 10) {
        console.log("Parabéns! Desempenho excelente!");
    }

} else if (media >= 5) {
    console.log("Recuperação");

} else {
    console.log("Reprovado");
}

3. Positivo, negativo ou zero

Questão: Solicite um número. Verifique se ele é positivo, negativo ou zero. Se for positivo, informe também se é par ou ímpar.

Resposta:
let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo.");

    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }

} else if (numero < 0) {
    console.log("O número é negativo.");

} else {
    console.log("O número é zero.");
}

4. Sistema de acesso

Questão: Solicite a idade do usuário. Se ele tiver 18 anos ou mais, solicite uma senha. Se a senha for "1234", mostre "Acesso autorizado". Caso contrário, mostre "Senha incorreta". Se for menor de 18 anos, mostre "Acesso não permitido".

Resposta:
let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {

    let senha = prompt("Digite sua senha:");

    if (senha === "1234") {
        console.log("Acesso autorizado");
    } else {
        console.log("Senha incorreta");
    }

} else {
    console.log("Acesso não permitido");
}

5. Desconto da loja

Questão: Solicite o valor de uma compra. Se a compra for igual ou superior a R$ 100,00, verifique:

Cliente comum → 10% de desconto

Cliente VIP → 20% de desconto

Se a compra for menor que R$ 100,00, não conceda desconto.

Resposta:
let valorCompra = Number(prompt("Digite o valor da compra:"));

if (valorCompra >= 100) {

    let tipoCliente = prompt("Digite o tipo de cliente (comum ou VIP):");

    if (tipoCliente.toLowerCase() === "comum") {

        let desconto = valorCompra * 0.10;
        let total = valorCompra - desconto;

        console.log("Desconto: R$ " + desconto.toFixed(2));
        console.log("Total: R$ " + total.toFixed(2));

    } else if (tipoCliente.toLowerCase() === "vip") {

        let desconto = valorCompra * 0.20;
        let total = valorCompra - desconto;

        console.log("Desconto: R$ " + desconto.toFixed(2));
        console.log("Total: R$ " + total.toFixed(2));

    } else {
        console.log("Tipo de cliente inválido.");
    }

} else {
    console.log("Não há desconto.");
    console.log("Total: R$ " + valorCompra.toFixed(2));
}

6. Classificação de um jogador

Questão: Solicite a pontuação de um jogador:

Menos de 100 pontos → "Iniciante"

De 100 a 499 → "Intermediário"

De 500 a 999 → "Avançado"

1000 ou mais → "Mestre"

Se o jogador estiver na categoria "Mestre" e tiver 2000 pontos ou mais, mostrar "Mestre Lendário".

Resposta:
let pontos = Number(prompt("Digite a pontuação do jogador:"));

if (pontos < 100) {

    console.log("Iniciante");

} else if (pontos < 500) {

    console.log("Intermediário");

} else if (pontos < 1000) {

    console.log("Avançado");

} else {

    console.log("Mestre");

    if (pontos >= 2000) {
        console.log("Mestre Lendário");
    }
}

7. Empréstimo bancário

Questão: Solicite o salário e o valor da prestação desejada. Primeiro verifique se o salário é maior que R$ 2.000,00. Se for, verifique se a prestação é menor ou igual a 30% do salário.

Resposta:
let salario = Number(prompt("Digite seu salário:"));
let prestacao = Number(prompt("Digite o valor da prestação desejada:"));

if (salario > 2000) {

    let limitePrestacao = salario * 0.30;

    if (prestacao <= limitePrestacao) {
        console.log("Empréstimo aprovado");
    } else {
        console.log("Prestação muito alta");
    }

} else {
    console.log("Renda insuficiente");
}

Desafio Integrador — Sistema de Cinema

Questão: Crie um Sistema de Cinema. O programa deverá solicitar a idade do cliente e verificar se ele pode assistir ao filme. Se tiver 18 anos ou mais, a entrada é permitida. Caso tenha menos de 18 anos, verifique se está acompanhado de um responsável.

Depois, solicite se o cliente é estudante e determine o preço:

Preço normal: R$ 30,00

Estudante: R$ 15,00

Menor de 12 anos: R$ 10,00

Utilize pelo menos dois if/else aninhados e um operador ternário para informar "Meia-entrada" ou "Entrada inteira".

Resposta:
console.log("=== SISTEMA DE CINEMA ===");

let idade = Number(prompt("Digite sua idade:"));

let acompanhado = false;

if (idade >= 18) {

    console.log("Entrada permitida.");

} else {

    let resposta = prompt(
        "Está acompanhado de um responsável? (sim/não)"
    );

    if (resposta.toLowerCase() === "sim") {
        acompanhado = true;
        console.log("Entrada permitida com responsável.");
    } else {
        console.log("Entrada não permitida.");
    }
}

if (idade >= 18 || acompanhado) {

    let estudante = prompt("Você é estudante? (sim/não)");

    let preco;

    if (idade < 12) {

        preco = 10;

    } else {

        if (estudante.toLowerCase() === "sim") {
            preco = 15;
        } else {
            preco = 30;
        }
    }

    let tipoEntrada = preco < 30
        ? "Meia-entrada"
        : "Entrada inteira";

    console.log("Preço: R$ " + preco.toFixed(2));
    console.log(tipoEntrada);
}

Conclusão

Nesta atividade foram utilizados diversos conceitos de JavaScript, como if/else, switch, while, do...while, for, break, continue e operador ternário. Esses comandos permitem criar programas capazes de receber informações do usuário, tomar decisões e repetir determinadas ações de acordo com as condições estabelecidas.
