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
//FUNÇÃO QUE VAI ADICIONAR O ITEM AO CARRINHO ATRAVÉS DO BOTÃO ADICIONAR AO CARRINHO
function adicionarItemAoCarrinho(botao){
    const containerModal = botao.closest(".containerModal");
    
    if(containerModal){
        const carrinho = document.querySelector(".containerCarrinhoNav");
        carrinho.classList.remove("esconde");
    };
    //ITEM DO MODAL
    const itemModal = containerModal.querySelector(".itemLancheModal")
    //CLONANDO ITEM QUE VAI PARA O CARRINHO
    if(itemModal){
        const containerCarrinho=document.querySelector(".containerCarrinhoNav");
        const img = itemModal.querySelector(".imgModalLanche").src;//INFORMAÇÕES DO MODAL
        const preco = itemModal.querySelector(".valorIndividualModal").textContent;
        const qtd = itemModal.querySelector(".inputCmodal").value;
        //MODELO PARA O CLONE
        const item = document.querySelector(".item")
        //CLONE
        const clone = item.cloneNode(true);
        clone.classList.remove("modelo")//REMOVE A CLASSE modelo PARA EU PODER DIFERENCIAR DO MOLDE E DOS ITENS CLONADOS
        clone.style.display="flex";
        //ATRIBUINDO AS INFORMAÇÕES AO CLONE QUE VAI PARA O CARRINHO
        clone.querySelector(".imgItem").src=img;
        clone.querySelector(".precoItemCarrinho").textContent=preco;
        clone.querySelector(".qtCarrinhonav").value=qtd;

        containerCarrinho.appendChild(clone);
    };
    //CHAMA A FUNÇÃO PARA FECHAR O MODAL DEPOIS DE ABRIR O CARRINHO
    fecharModal(botao);
    console.log("EXECUTOU A FUNÇÃO adicionar ao carrinho");
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
//CHAMA A FUNÇAO ABRIR MODAL
botaoClickado(".imgBotaoAbrirModal",abrirModal);
//CHAMA A FUNÇÃO FECHAR MODAL
botaoClickado(".fecharModal",fecharModal);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO SOMANDO
botaoClickado(".btnMais",adicionarItemModal);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO SUBTRAINDO
botaoClickado(".btnMenos",subtrairItemModal);
//CHAMA A FUNÇÃO QUE VAI ADICIONAR O ITEM AO CARRINHO ATRAVÉS DO BOTÃO ADICIONAR AO CARRINHO
botaoClickado(".botaoModal",adicionarItemAoCarrinho);
//CHAMA A FUNÇÃO QUE VAI EXLUIR O ITEM DO CARRINHO DE UMA VEZ APERTANDO NO X DO ITEM
botaoClickado(".excluirItem",exluirItemCarrinho);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARRINHO E VAI EXCLUIR O MESMO CASO SEJA MENOR QUE 1
botaoClickado(".menosCarrinho",subtrairItemCarrinho);
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO DENTRO DO CARINHO ADICIONANDO
botaoClickado(".maisCarrinho",adicaoItemCarrinho);
//CHAMA FUNÇÃO QUE VAI FECHAR O CARRINHO
botaoClickado(".xCarrinho",fecharCarrinho);