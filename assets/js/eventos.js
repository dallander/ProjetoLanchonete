
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

    console.log("EXECUTOU A FUNÇÃO abrirModal");
};
//FUNÇÃO QUE VAI FECHAR O MODAL PARA O
function fecharModal(botao){
    const modal = botao.closest(".containerModal");

    modal.classList.add("esconderModal")

    
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
};
//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARRINHO SUBTRAINDO E VAI EXCLUIR O MESMO CASO SEJA MENOR QUE 1
function subtrairItemCarrinho(botao){
    if(botao){
        const item = botao.closest(".item");
        const input = item.querySelector(".qtCarrinhonav");
        const subtrair = parseInt(input.value,10);
        input.value=subtrair-1;
        if(input.value <1){
            item.remove();
        }
        
    }
};
//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARINHO ADICIONANDO
function adicaoItemCarrinho(botao){
    if(botao){
        const item = botao.closest(".item");
        const input = item.querySelector(".qtCarrinhonav");
        const add = parseInt(input.value,10);
        input.value =add+1;
    }

};
//FUNÇÃO QUE VAI FECHAR O CARRINHO
function fecharCarrinho(botao){
    if(botao){
        const carinho = document.querySelector(".containerCarrinhoNav");
        carinho.classList.add("esconde")
    };
    console.log("EXECUTOU A FUNÇÃO FECHAR CARRINHO")
};
//FUNÇÃO QUE VAI ADICIONAR O ITEM AO CARRINHO ATRAVÉS DO BOTÃO ADICIONAR AO CARRINHO E CHAMA A FUNÇÃO CHECAR CARRINHO
const carrinho= [];
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
    
        //CHECA PARA VER SE O ITEM JA ESTÁ DENTRO DO CARRINHO
        if(!carrinho.includes(id)){
                carrinho.push(id)
            //SE O ITEM NÃO ESTIVER DENTRO DO CARRINHO ELE VAI ADICIONAR ELE
            if(itemModal){
            //CAPTURANDO O ID INDIVIDUAL DO ITEM
            //MODELO PARA O CLONE
                const item = document.querySelector(".item.modelo")
                const containerCarrinho=document.querySelector(".containerCarrinhoNav");
                const img = itemModal.querySelector(".imgModalLanche").src;//INFORMAÇÕES DO MODAL
                const preco = itemModal.querySelector(".valorIndividualModal").textContent;
                const qtd = itemModal.querySelector(".inputCmodal").value;
                        
                //CLONE
                const clone = item.cloneNode(true);
                clone.classList.remove("modelo")//REMOVE A CLASSE modelo PARA EU PODER DIFERENCIAR DO MOLDE E DOS ITENS CLONADOS
                clone.style.display="flex";
                        //ATRIBUINDO AS INFORMAÇÕES AO CLONE QUE VAI PARA O CARRINHO
                clone.querySelector(".imgItem").src=img;
                clone.querySelector(".precoItemCarrinho").textContent=preco;
                clone.querySelector(".qtCarrinhonav").value=qtd;
                clone.setAttribute("data-id",id);//SETANDO O ID INDIVIDUAL DO ITEM
                containerCarrinho.appendChild(clone);

            };  
        }else{
            console.log("O item ja existe no carrinho")
        }
    console.log("EXECUTOU A FUNÇÃO COLOCAR NO carrinho");
    //CHAMA A FUNÇÃO PARA FECHAR O MODAL DEPOIS DE ABRIR O CARRINHO
    fecharModal(botao);
    //CHAMA A FUNÇÃO CHECAR CARRINHO
    checarCarrinho(".containerCarrinhoNav .item:not(.modelo)");
    
};
//FUNÇÃO QUE FICA VERIFICANDO SE O CARRINHO ESTÁ VAZIO
function checarCarrinho(classe){
    const botaoCarrinho = document.querySelector("#cartimg")
    
    document.addEventListener("click",()=>{
        const item =document.querySelectorAll(classe)
        //FECHA O CARRINHO SE ESTIVER VAZIO
        if(item.length ==0){
            const carrinho = document.querySelector(".containerCarrinhoNav");
            
            carrinho.classList.add("esconde")
            
            //FAZER BOTÃO CARRINHO SUMIR
            botaoCarrinho.style.display="none";
        };
        if(item.length>=1){
            //FAZER BOTÃO CARRINHO APARECER
            botaoCarrinho.style.display="flex";
        }
});
    console.log("EXECUTOU A FUNÇÃO checar carinho")
};

//FUNÇÃO QUE VAI HABILITAR O BOTÃO DO CARINHO
function habilitarBotaoCarrinho(botao){
    const carrinho = document.querySelector(".containerCarrinhoNav");
    if(botao){
        carrinho.classList.remove("esconde")

    }
    
    console.log("EXECUTOU A FUNÇÃO HABILITAR BOTÃO CARRINHO")
    
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
//CHAMA A FUNÇÃO QUE VAI LIMPAR O CAMPO DE INPUT DO MODAL
botaoClickado(".botaoModal",limparValueModal)
//CHAMA A FUNÇÃO QUE VAI VERIFICAR O CARRINHO
checarCarrinho(".containerCarrinhoNav .item:not(.modelo)");

