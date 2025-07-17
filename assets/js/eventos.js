//EVENTO DE CLICK GENÉRICO
function botaoClickado (classe, callback){
        document.addEventListener("click", (e)=>{
            let botao = e.target.closest(classe);
            if(botao){
                const item = botao.closest(".itemLanche")
                const containerModal = item.querySelector(".containerModal")      
                callback(containerModal)
            }
            
        });
};



//FUNÇÃO QUE VAI ABRIR O MODAL REMOVENDO A CLASS QUE ESCONDE ELE
function abrirModal (modalDoItem){
   modalDoItem.classList.remove("esconderModal");
    
};
//FUNÇÃO QUE VAI FECHAR O MODAL ADICIONANDO A CLASS QUE ESCONDE ELE
function fecharModal(modalDoItem){
    modalDoItem.classList.add("esconderModal");
};






//FUNÇÃO QUE VAI ABRIR O MODAL REMOVENDO A CLASS QUE ESCONDE ELE
botaoClickado(".imgBotaoAbrirModal",abrirModal);
//FUNÇÃO QUE VAI FECHAR O MODAL ADICIONANDO A CLASS QUE ESCONDE ELE
botaoClickado(".fecharModal",fecharModal)