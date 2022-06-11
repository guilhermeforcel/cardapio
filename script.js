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

    // if(tipo === "prato"){
    //     selecaoPrato(item);
    // }else if(tipo === "bebida"){
    //     selecaoBebida(item);
    // }else if(tipo === "sobremesa"){
    //     selecaoSobremesa(item);
    // }

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
