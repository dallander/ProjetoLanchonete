
//EVENTO DE CLICK GENÉRICO
function botaoClickado (classe, callback){
        document.addEventListener("click", (e)=>{
            let botao = e.target.closest(classe);
            if(!botao){
                return;
            };
            //ENVIA A CLASSE PARA A CALLBACK
           if(botao){callback(botao)};

        });

};
//FUNÇÃO QUE VAI ABRIR O MODAL PARA O CLIENTE
function abrirModal(botao){
    const item = botao.closest(".itemLanche");
    const modal = item.querySelector(".containerModal");
    modal.classList.remove("esconderModal");


    setTimeout(() => {
         //CHAMA A FUNÇÃO CHECAR CARRINHO
        checarCarrinho();
    }, 200);
    console.log("EXECUTOU A FUNÇÃO abrirModal");
};
//FUNÇÃO QUE VAI FECHAR O MODAL PARA O
function fecharModal(botao){
    const modal = botao.closest(".containerModal");

    modal.classList.add("esconderModal")

    setTimeout(() => {
         //CHAMA A FUNÇÃO CHECAR CARRINHO
        checarCarrinho();
    }, 200);
    console.log("EXECUTOU A FUNÇÃO fecharModal")
};
//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO SOMANDO
function adicionarItemModal(botao){
    const modal = botao.closest(".itemLancheModal")
    const input = modal.querySelector(".inputCmodal")
    if(input){
        const add = parseInt(input.value,10);
        input.value=add+1;
        

    }

    console.log("EXECUTOU A FUNÇÃO adicionar")
};
//FUNÇÃO QUE RESETA O CAMPO DE INPUT DO MODAL
function limparValueModal(botao){
    const itemModal = botao.closest(".itemLancheModal");
    const input = itemModal.querySelector(".inputCmodal");
    input.value=1;
}
//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO SUBTRAINDO
function subtrairItemModal(botao){
    const modal =botao.closest(".itemLancheModal");
    const input = modal.querySelector(".inputCmodal");
    const subtrai = parseInt(input.value,10);
    if(input.value >1){
        input.value=subtrai-1;
    }

    console.log("EXECUTOU A FUNÇÃO SUBTRAIR DENTRO DO MODAL")
};

//FUNÇÃO QUE VAI EXLUIR O ITEM DO CARRINHO DE UMA VEZ APERTANDO NO X DO ITEM
function exluirItemCarrinho(botao){
    if(botao){
        //SELECIONANDO O ITEM
        const item = botao.closest(".item");
        if(item){
            //EXCLUINDO O ITEM
            item.remove();
        }
    }
    setTimeout(() => {
         //CHAMA A FUNÇÃO CHECAR CARRINHO
        checarCarrinho();
    }, 200);
};
//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARRINHO SUBTRAINDO E VAI EXCLUIR O MESMO CASO SEJA MENOR QUE 1
function subtrairItemCarrinho(botao){
    if(botao){
        const item = botao.closest(".item");
        const valorItem = item.querySelector(".precoItemCarrinho")
        const precoBase = item.getAttribute("data-preco")
        const input = item.querySelector(".qtCarrinhonav");
        //CONVERTE O VALOR DO INPUT PARA INTEIRO
        let subtrair = parseInt(input.value,10);
        //SUBTRAI A QUANTIDADE DE ITEM
        input.value=subtrair-1;
        //CALCULA O NOVO VALOR DO ITEM
        let calc = input.value * precoBase
        valorItem.textContent=`R$ ${calc.toFixed(2).replace(".",",")}`

        console.log("removeu 1 item")
        if(input.value <1){
            item.remove();
        }
        
    }
    setTimeout(() => {
         //CHAMA A FUNÇÃO CHECAR CARRINHO
        checarCarrinho();
    }, 200);
};
//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARINHO ADICIONANDO
function adicaoItemCarrinho(botao){
    if(botao){
        const item = botao.closest(".item");
        const precoItem = item.querySelector(".precoItemCarrinho")
        const input = item.querySelector(".qtCarrinhonav");
        const precoBase = item.getAttribute("data-preco")
        
        let add = parseInt(input.value,10);
        input.value =add+1;
        //CALCULANDO O VALOR DO ITEM 
        let calc = precoBase * input.value
        
        //ATRIBUINDO O NOVO VALOR AO ITEM
        precoItem.textContent=`R$ ${calc.toFixed(2).replace(".",",")}`
        console.log("Adicionou mais 1 item")

            setTimeout(() => {
         //CHAMA A FUNÇÃO CHECAR CARRINHO
                checarCarrinho();
            }, 200);
    };
}


    
//FUNÇÃO QUE VAI FECHAR O CARRINHO
function fecharCarrinho(botao){
    if(botao){
        const carinho = document.querySelector(".containerCarrinhoNav");
        carinho.classList.add("esconde")
    };
    setTimeout(() => {
         //CHAMA A FUNÇÃO CHECAR CARRINHO
        checarCarrinho();
    }, 200);
    console.log("EXECUTOU A FUNÇÃO FECHAR CARRINHO")
};
//FUNÇÃO QUE VAI FAZER A ALTERAÇÃO DO VALOR DO ITEM INDIVIDUAL NO DOMADO
function checarModal(classe){
    
    const PrecoBase = classe.getAttribute("data-preco");
    if(classe){
        const InputItemModal = classe.querySelector(".inputCmodal");
        const precoItemCliente = classe.querySelector(".valorIndividualModal");

        let value = InputItemModal.value;
        const calc = value * PrecoBase;
        const calcFortmatado = `R$ ${calc.toFixed(2).replace(".",",")}`
        precoItemCliente.textContent=calcFortmatado;

        
    }
    console.log("eexecutou checar Modal")
}
//FUNÇÃO QUE VAI ADICIONAR O ITEM AO CARRINHO ATRAVÉS DO BOTÃO ADICIONAR AO CARRINHO E CHAMA A FUNÇÃO CHECAR CARRINHO
let carrinhoArray= [];
function colocarItemNoCarrinho(botao){
    const containerModal = botao.closest(".containerModal");
    
    if(containerModal){
        const carrinho = document.querySelector(".containerCarrinhoNav");
        carrinho.classList.remove("esconde");
    };
    //ITEM DO MODAL
    const itemModal = containerModal.querySelector(".itemLancheModal")
   
    
    //ID DO ITEM DENTRO DO MODAL
    const id = itemModal.getAttribute("data-id")
    //PREÇO DO ITEM PARA USAR COMO BASE NO CALCULO
    const PrecoBase = itemModal.getAttribute("data-preco")
    
        //CHECA PARA VER SE O ITEM JA ESTÁ DENTRO DO CARRINHO
        if(!carrinhoArray.includes(id)){
                carrinhoArray.push(Number(id))
            //SE O ITEM NÃO ESTIVER DENTRO DO CARRINHO ELE VAI ADICIONAR ELE
            if(itemModal){
            //CAPTURANDO O ID INDIVIDUAL DO ITEM
            //MODELO PARA O CLONE
                const item = document.querySelector(".item.modelo")
                const containerCarrinho=document.querySelector(".containerCarrinhoNav");
                const img = itemModal.querySelector(".imgModalLanche").src;//INFORMAÇÕES DO MODAL
                    
                const qtd = itemModal.querySelector(".inputCmodal").value;
                    
                setTimeout(() => {
                    //CLONE
                    const preco = itemModal.querySelector(".valorIndividualModal").textContent;
                    const clone = item.cloneNode(true);
                    clone.classList.remove("modelo")//REMOVE A CLASSE modelo PARA EU PODER DIFERENCIAR DO MOLDE E DOS ITENS CLONADOS
                    clone.style.display="flex";
                    //ATRIBUINDO AS INFORMAÇÕES AO CLONE QUE VAI PARA O CARRINHO
                    clone.querySelector(".imgItem").src=img;
                    clone.querySelector(".precoItemCarrinho").textContent=preco;
                    clone.querySelector(".qtCarrinhonav").value=qtd;
                    clone.setAttribute("data-id",id);//SETANDO O ID INDIVIDUAL DO ITEM
                    clone.setAttribute("data-preco",PrecoBase)
                    containerCarrinho.appendChild(clone);

                    //CHAMA A FUNÇÃO CHECAR CARRINHO
                    checarCarrinho();
                }, 20);
                

            };  
        }
        //PEGA O VALOR DO INPUT MODAL E ATRIBUI AO ITEM DO CARRINHO/CASO O CLIENTE ESOLHA O MESMO ITEM ELE NÃO FIQUE DUPLICADO DENTRO DO CARRINHO E ADICIONA A QUANTIDADE QUE O USUARIO QUER. 
        else{
            const itens= document.querySelectorAll(".containerCarrinhoNav .item:not(.modelo)")
            itens.forEach(item => {
                if(id == item.getAttribute("data-id")){
                    const precoItem = item.querySelector(".precoItemCarrinho")
                    const inputCarrinho = item.querySelector(".qtCarrinhonav")//INPUT DO ITEM DO CARRINHO
                    const inputModal = itemModal.querySelector(".inputCmodal");//INPUT DO ITEM NO MODAL
                    const value1 = parseInt(inputModal.value,10) // CONVERTE O VALOR DO INPUT DO MODAL PARA INTEIRO
                    const value2 = parseInt(inputCarrinho.value ,10)// CONVERTE O VALOR DO INPUT DO ITEM CARRINHO PARA INTEIRO
                    const soma = parseInt(value1+value2,10)//CONVERTE A SOMA DO 2 INPUTS PARA INTEIRO
                    const precoBase = item.getAttribute("data-preco");
                   
                    inputCarrinho.value= soma;//ATRIBUI O VALOR AO ITEM NO CARRINHO
                    let calc = precoBase *inputCarrinho.value;//CALCULA O VALOR NOVO DO ITEM
                    precoItem.textContent= `R$ ${calc.toFixed(2,".",",")}`;
                }
        
                
            });


            checarCarrinho();

        }
    console.log("EXECUTOU A FUNÇÃO COLOCAR NO carrinho");
    //CHAMA A FUNÇÃO PARA FECHAR O MODAL DEPOIS DE ABRIR O CARRINHO
    fecharModal(botao);

    
};

//FUNÇÃO QUE VAI HABILITAR O BOTÃO DO CARINHO
function habilitarBotaoCarrinho(botao){
    const carrinho = document.querySelector(".containerCarrinhoNav");
    if(botao){
        carrinho.classList.remove("esconde")

    }
    
    console.log("EXECUTOU A FUNÇÃO HABILITAR BOTÃO CARRINHO")
    
}   

//FUNÇÃO QUE VAI VERIFICAR SE O CARRINHO TEM ALGUM ITEM DENTRO
function checarCarrinho(){
    const itens = document.querySelectorAll(".containerCarrinhoNav .item:not(.modelo)")
    const carrinho = document.querySelector(".containerCarrinhoNav")
    const botaoCarrinho = document.querySelector("#cartimg")
    if(itens.length >=1){
        botaoCarrinho.style.display="flex"

        
    }
    if(itens.length ==0){
        botaoCarrinho.style.display="none"
        carrinho.classList.add("esconde")
       
    }
   
    //BLOCO QUE REMOVE O ITEM DO ARRAY CARRINHO PARA PERMITIR INSERIR UM ITEM DEPOIS DELE TER SIDO EXCLUIDO
    for(let c =0; c<carrinhoArray.length; c++){
        let existe = false
        
        for(let item =0; item < itens.length;item++){
            let dataId =Number(itens[item].getAttribute("data-id"));
            
            if(dataId == carrinhoArray[c]){
                existe = true
                console.log(" igual",dataId)
                break;
                
            }
            
        }
        if(!existe){
            carrinhoArray.splice(c,1)
             
        }
        
        
    }
    
    console.log("checou carrinho")
     console.log(carrinhoArray)
}




//CHAMA A FUNÇAO ABRIR MODAL
botaoClickado(".imgBotaoAbrirModal",abrirModal);
//CHAMA A FUNÇÃO FECHAR MODAL
botaoClickado(".fecharModal",fecharModal);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO SOMANDO
botaoClickado(".btnMais",adicionarItemModal);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO SUBTRAINDO
botaoClickado(".btnMenos",subtrairItemModal);
//CHAMA A FUNÇÃO QUE VAI ADICIONAR O ITEM AO CARRINHO ATRAVÉS DO BOTÃO ADICIONAR AO CARRINHO
botaoClickado(".botaoModal",colocarItemNoCarrinho);
//CHAMA A FUNÇÃO QUE VAI EXLUIR O ITEM DO CARRINHO DE UMA VEZ APERTANDO NO X DO ITEM
botaoClickado(".excluirItem",exluirItemCarrinho);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARRINHO E VAI EXCLUIR O MESMO CASO SEJA MENOR QUE 1
botaoClickado(".menosCarrinho",subtrairItemCarrinho);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARINHO ADICIONANDO
botaoClickado(".maisCarrinho",adicaoItemCarrinho);
//CHAMA FUNÇÃO QUE VAI FECHAR O CARRINHO
botaoClickado(".xCarrinho",fecharCarrinho);
//CHAMA A FUNÇÃO DO BOTÃO DE CARRINHO PARA QUE ELE ESCONDA O CARRINHO
botaoClickado("#cartimg",habilitarBotaoCarrinho)
//CHAMA A FUNÇÃO QUE VAI FAZER A ALTERAÇÃO DO VALOR DO ITEM INDIVIDUAL NO DOMADO
botaoClickado(".itemLancheModal",checarModal)
//CHAMA A FUNÇÃO QUE VAI LIMPAR O CAMPO DE INPUT DO MODAL
botaoClickado(".botaoModal",limparValueModal)
//CHAMA A FUNÇÃO CEHCAR CARRINHO





