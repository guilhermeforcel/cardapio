
function selecaoItem(item,tipo){

    let escolha = item;
    let selecionado = document.querySelector(`.${tipo} .selecionado`);

    //console.log(tipo + " " + item)

    if(selecionado === null){
        escolha.classList.add("selecionado"); 
    }else if(escolha === selecionado){
        escolha.classList.remove("selecionado");
    }else{
        selecionado.classList.remove("selecionado");
        escolha.classList.add("selecionado");
    }
    verificar();

    // if(tipo === "prato"){
    //     selecaoPrato(item);
    // }else if(tipo === "bebida"){
    //     selecaoBebida(item);
    // }else if(tipo === "sobremesa"){
    //     selecaoSobremesa(item);
    // }
   
}

function verificar(){

    let precoTotal = 0;
    let precoP = 0;
    let precoB = 0;
    let precoS = 0;

    const botaoPedido = document.querySelector(".botao-pedido");
    const textoInicial = "Selecione os 3 itens para fechar o pedido";
    botaoPedido.classList.remove("completo");
    botaoPedido.innerText=textoInicial;

    let prato=document.querySelector(".prato .selecionado .nome");
    let p = prato!==null;
    let bebida=document.querySelector(".bebida .selecionado .nome");
    let b = bebida!==null;
    let sobremesa=document.querySelector(".sobremesa .selecionado .nome");
    let s = sobremesa!==null;

    if(p && b && s){
        
    prato=prato.innerText;
    bebida=bebida.innerText;
    sobremesa=sobremesa.innerText;

    precoP=document.querySelector(".prato .selecionado .preco").innerText;
    precoP=Number(precoP.substring(2).replace(",","."));
    console.log(precoP)

    precoB=document.querySelector(".bebida .selecionado .preco").innerText;
    precoB=Number(precoB.substring(2).replace(",","."));
    console.log(precoB)


    precoS=document.querySelector(".sobremesa .selecionado .preco").innerText;
    precoS=Number(precoS.substring(2).replace(",","."));
    console.log(precoS)

    precoTotal=precoP+precoB+precoS;

    // precoP=precoP.toFixed(2).replace(".",",");
    // precoB=precoB.toFixed(2).replace(".",",");
    // precoS=precoS.toFixed(2).replace
    // precoTotal=precoTotal.toFixed(2).replace(".",",");
    
    precoP=desconverterPreco(precoP);
    precoB=desconverterPreco(precoB);
    precoS=desconverterPreco(precoS);
    precoTotal=desconverterPreco(precoTotal);
    
    let infoPedido = [prato,precoP,bebida,precoB,sobremesa,precoS,precoTotal];

    botaoPedido.classList.add("completo");
    botaoPedido.innerText="Fechar pedido";

    return(infoPedido);
    }
}

let infoCliente = [];

function completarPedido(){

    const telaConfirmacao = document.querySelector(".tela-confirmacao");
    const telaPedido = document.querySelector(".container");
    telaConfirmacao.classList.add("oculto");
    const completo = document.querySelector(".botao-pedido").classList.contains("completo");

    console.log(completo+" "+verificar());

    if(completo){

        const informacoes = verificar();
        const prato = informacoes[0];
        const precoP = informacoes[1]
        const bebida = informacoes[2];
        const precoB = informacoes[3];
        const sobremesa = informacoes[4];
        const precoS = informacoes[5];
        const precoTotal = informacoes[6];

        let confPrato = document.querySelector(".prato-final span:first-child");
        let confPrecoP = document.querySelector(".prato-final span:last-child");
        let confBebida = document.querySelector(".bebida-final span:first-child");
        let confPrecoB = document.querySelector(".bebida-final span:last-child");
        let confSobremesa = document.querySelector(".sobremesa-final span:first-child");
        let confPrecoS = document.querySelector(".sobremesa-final span:last-child");
        let confTotal = document.querySelector(".total-final span:last-child");

        confPrato.innerText = prato;
        confPrecoP.innerText = precoP;
        confBebida.innerText = bebida;
        confPrecoB.innerText = precoB;
        confSobremesa.innerText = sobremesa;
        confPrecoS.innerText = precoS;

        confTotal.innerText = `R$ ${precoTotal}`;

        const nome = prompt("Seu nome:\n");
        const endereco = prompt("Endereço de entrega:\n");
        infoCliente.push(nome);
        infoCliente.push(endereco);

        telaConfirmacao.classList.remove("oculto");
        telaPedido.classList.add("transparencia");
        document.querySelector("body").classList.add("no-scroll");

    }
    //alert(`Pedido\nPrato: ${prato}\nBebida: ${bebida}\nSobremesa: ${sobremesa}\nPreço total: R$ ${precoTotal}`);
}

function msgPedido(){
    const informacoes = verificar();
    const prato = informacoes[0];
    const bebida = informacoes[2];
    const sobremesa = informacoes[4];
    const precoTotal = informacoes[6];

    const nome = infoCliente[0];
    const endereco = infoCliente[1];
    
    let msg=`Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${precoTotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    msg=encodeURIComponent(msg);
    msg="https://wa.me/?text="+msg;

    console.log(msg);

    const link = document.querySelector(".enviar-msg");
    link.href=msg;

    voltarMenu();
}

function voltarMenu(){

    const telaConfirmacao = document.querySelector(".tela-confirmacao");
    const telaPedido = document.querySelector(".container");
    infoCliente = [];

    telaConfirmacao.classList.add("oculto");
    telaPedido.classList.remove("transparencia");
    document.querySelector("body").classList.remove("no-scroll");
}

  
function desconverterPreco(preco){

    preco=preco.toFixed(2).replace(".",",");
    return preco;

}

// function selecaoPrato(item){

//     console.log(item.innerText)
//     let escolha = item;
//     let selecionado = document.querySelector(".prato .selecionado");

//     if(selecionado === null){
//         escolha.classList.add("selecionado");
//     }else if(escolha === selecionado){
//         escolha.classList.remove("selecionado");
//     }else{
//         selecionado.classList.remove("selecionado");
//         escolha.classList.add("selecionado");
//     }
// }

// function selecaoBebida(item){

//     console.log(item.innerText)
    
//     let escolha = item;
//     let selecionado = document.querySelector(".bebida .selecionado");

//     if(selecionado === null){
//         escolha.classList.add("selecionado");
//     }else if(escolha === selecionado){
//         escolha.classList.remove("selecionado");
//     }else{
//         selecionado.classList.remove("selecionado");
//         escolha.classList.add("selecionado");
//     }
// }

// function selecaoSobremesa(item){

//     console.log(item.innerText)

//     let escolha = item;
//     let selecionado = document.querySelector(".sobremesa .selecionado");

//     if(selecionado === null){
//         escolha.classList.add("selecionado");
//     }else if(escolha === selecionado){
//         escolha.classList.remove("selecionado");
//     }else{
//         selecionado.classList.remove("selecionado");
//         escolha.classList.add("selecionado");
//     }

// }
