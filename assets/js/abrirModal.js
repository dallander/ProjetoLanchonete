//FUNÇÃO PARA ABRIR O MODAL
function abrirModal(){
    document.addEventListener("click", function(event){
    /* Quando ocorre um clique, usando event.target.closest,
       verifico se o elemento clicado ou algum pai (elemento que envolve) tem a classe .imgBotaoAbrirModal */
    const botao = event.target.closest(".imgBotaoAbrirModal");
    /* Se encontrou esse botão */
    if(botao) {
        /* Procuro o elemento pai (mais próximo acima) com a classe .itemLanche */
        const item = botao.closest(".itemLanche");
        /* Dentro desse elemento que envolve (item), seleciono o elemento com a classe .containerModal */
        const modal = item.querySelector(".containerModal");
        /* Se o modal existe, removo a classe 'esconderModal' para mostrar ele */
        if(modal){
            modal.classList.remove("esconderModal");
            
        }   
    }
});

}
//FECHAR MODAL
function fecharModal(){
    document.addEventListener("click", function(botao){
        const botaoFechar = botao.target.closest(".fecharModal")

        if(botaoFechar){
           const itemLanche = botaoFechar.closest(".containerModal")
           itemLanche.classList.add("esconderModal")
        }
    }) 
}

//ABRE CARRINHO
function abrirCarrinho(){
    document.addEventListener("click", function(elemento){
        const botao = elemento.target.closest(".botaoModal");
        const carrinho = document.querySelector(".containerCarrinhoNav");
        
        if(botao){
            const abreCarrinho = botao.closest(".containerModal");
            abreCarrinho.classList.add("esconderModal");
            carrinho.classList.remove("esconde");
        };
        
    });

    
};

//FECHAR CARRINHO
function fechaCarrinho (){
    document.addEventListener("click", function(elemento){
        const botao = elemento.target.closest(".x");
        if(botao){
            const fecharCarrinho = document.querySelector(".containerCarrinhoNav");
            fecharCarrinho.classList.add("esconde")
        }
    });
};






//CHAMANDO A FUNÇÃO ABRIR MODAL
abrirModal();
//CHAMANDO A FUNÇÃO FECHAR MODAL
fecharModal();
//CHAMANDO A FUNÇÃO ABRIR CARRINHO
abrirCarrinho();
//CHAMA FUNÇÃO PARA FECHAR CARRINHO
fechaCarrinho();

