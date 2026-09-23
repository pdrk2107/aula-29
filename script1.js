let senha;

console.log("=== SISTEMA DA LANCHONETE ===");

do{
    senha = prompt("Digite a senha: ");

    if(senha !== "1234"){
        console.log("Senha incorreta!");
    }
} while(senha != "1234");

console.log("Acesso permitido!");
let total = 0;
let quantidadetotal = 0;

while (true) {
    console.log("\n=== MENU ===");
    console.log("1 - Hambúrguer - R$15,00");
    console.log("2 - Pizza - R$20,00");
    console.log("3 - Refrigerante - R$6,00");
    console.log("4 - Batata Frita - R$10,00");
    console.log("0 - Finalizar");

    let opcao = Number(prompt("Escolha: "));
    let preco;

    switch (opcao) {
        case 1:
            preco = 15;
            console.log("Hambúrguer adicionado!");
            break;

        case 2:
            preco = 20;
            console.log("Pizza adicionada!");
            break;

        case 3:
            preco = 6;
            console.log("Refrigerante adicionado!");
            break;

        case 4:
            preco = 10;
            console.log("Batata Frita adicionada!");
            break;

        case 0:
            break;

        default:
            console.log("Opção inválida!");
            continue;
    }

    if (opcao === 0){
        break;
    }

    total += preco;
    quantidadetotal++;
}

for (let i = 1; i <= quantidadetotal; i++){
    console.log("Produto " + i + "registrado!");
}

let desconto = total >= 50 ? total * 0.10 : 10;

let valorfinal = total - desconto;

console.log("Subtotal: R$ " + total.toFixed(2));
console.log("Desconto: R$ " + desconto.toFixed(2));
console.log("Total: R$ " + valorfinal.toFixed(2));