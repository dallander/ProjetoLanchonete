//EVENTO DE CLICK GENÉRICO
function botaoClickado (classe, callback){
        document.addEventListener("click", (e)=>{
            let botao = e.target.closest(classe);
            if(!botao){
                return;
            };
            //AQUI É SELECIONAO O ITEM CORRETO ENTRE OS CLONES FOI USADO A VARIÁVEL BOTÃO COMO PARÂMETRO
                const item = botao.closest(".itemLanche");
                const containerModal = item.querySelector(".containerModal");
            //PRA FUNCIONAR TEM QUE USAR O closest
            //CONDIÇÃO PARA PASSAR A CLASSE CORRETA PARA CADA FUNÇAO
            if(containerModal){
                callback(containerModal);
            };
            
            
        });
};



//FUNÇÃO QUE VAI ABRIR O MODAL REMOVENDO A CLASS QUE ESCONDE ELE
function abrirModal (modalDoItem){
   modalDoItem.classList.remove("esconderModal");
   console.log("executou abrir modal");
    
};
//FUNÇÃO QUE VAI FECHAR O MODAL ADICIONANDO A CLASS QUE ESCONDE ELE
function fecharModal(modalDoItem){
    modalDoItem.classList.add("esconderModal");
    console.log("executou o fechar modal");
    
};

//FUNÇÃO ABRE O CARRINHO E FECHA O MODAL ATRAVÉS DO BOTÃO ADICIONAR AO CARRINHO
function adicionarAoCarrinho(modalDoItem){
    const carrinho = document.querySelector(".containerCarrinhoNav");
    carrinho.classList.remove("esconde");
    
    //CHAMA A FUNÇÃO FECHAR MODAL PASSANDO O PARÂMETRO CORRETO PARA FUNCIONAR
    fecharModal(modalDoItem);
    console.log("executou adicionar ao carrinho")
};


//FUNÇÃO VAI ALMENTAR A QUANTIDADE DO ITEM DENTRO DO MODAL
function adicionarItem(botao){

    document.addEventListener("click",(e)=>{
        if(e !== null){
            const item = e.target.closest(botao);
            if(item){
                const modal = item.closest(".itemLancheModal")
                const input = modal.querySelector(".inputCmodal")
                //ALMENTA A QUANTIDADE DO ITEM DENTRO DO MODAL
                const somar = parseInt(input.value, 10);
                input.value= somar+1
                
            }
            
        };
    });
}







//FUNÇÃO QUE VAI FECHAR O CARRINHO ATRAVEZ DO X DENTRO DO CARRINHO
function fecharCarrinho(classe){
    const xCarrinho = document.querySelector(classe)
    xCarrinho.addEventListener("click",()=>{
        if(xCarrinho){
            const carrinho = document.querySelector(".containerCarrinhoNav");
            carrinho.classList.add("esconde");
            console.log("executou fechar carrinho")
        };
    });
};




//FUNÇÃO QUE VAI ABRIR O MODAL REMOVENDO A CLASS QUE ESCONDE ELE
botaoClickado(".imgBotaoAbrirModal",abrirModal);
//FUNÇÃO QUE VAI FECHAR O MODAL ADICIONANDO A CLASS QUE ESCONDE ELE
botaoClickado(".fecharModal",fecharModal);
//FUNÇÃO QUE VAI ABRIR O CARRINHO DE COMPRAS
botaoClickado(".botaoModal",adicionarAoCarrinho);




//FUNÇÃO QUE VAI FECHAR O CARRINHO
fecharCarrinho(".xCarrinho")
//FUNÇÃO QUE VAI ALMENTAR A QUANTIDADE DE ITENS DENTRO DO MODAL
adicionarItem(".btnMais");