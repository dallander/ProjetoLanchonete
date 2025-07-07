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
        const botao = elemento.target.closest(".xCarrinho");
        if(botao){
            const fecharCarrinho = document.querySelector(".containerCarrinhoNav");
            fecharCarrinho.classList.add("esconde")
        }
    });
};

//ALMENTA A QUANTIDADE DE ITENS NO MODAL
function adicionarItens(){
    document.addEventListener("click",(e)=>{
        const  qtitemais  = e.target.closest(".btnMais");
        const container = qtitemais.closest(".itemLancheModal");
        if(qtitemais !==null){
            const input = container.querySelector(".inputCmodal")
            if (input !==null){ 
                const value = parseInt(input.value,10)+1
                input.value=value;
                
            }
        }
    });
};

//DIMINUI A QUANTIDADE DE INTENS NO MODAL
function removerItens(){
    document.addEventListener("click", (e)=>{
        const btmenos = e.target.closest(".btnMenos");
        const container = btmenos.closest(".itemLancheModal");
        if(btmenos !== null){
            const input = container.querySelector(".inputCmodal")
            if(input !== null){
                const sub = parseInt(input.value,10)-1;
                input.value=sub;
                if(input.value < 1){
                    input.value=1
                }
            }
        }


    });
};

//ADICIONAR ITEM AO CARRINHO
function adicionarAoCarrinho(){
    document.addEventListener("click",(e)=>{
        const item = e.target.closest(".botaoModal")
        if(item){
            const container = item.closest(".containerModal")

            const itemModal = container.querySelector(".quantidadeItemDentroCarrinho")//ITEM QUE O CLIENTE ESCOLHEU
            const areaItemCarrinho = document.querySelector(".itemCarrinho")//ÁREA DO ITEM DENTRO DO CARRINHO
            
            const clone = itemModal.cloneNode(true)
            areaItemCarrinho.appendChild(clone)

            
            
            
        }
    })
}



//CHAMANDO A FUNÇÃO ABRIR MODAL
abrirModal();
//CHAMANDO A FUNÇÃO FECHAR MODAL
fecharModal();
//CHAMANDO A FUNÇÃO ABRIR CARRINHO
abrirCarrinho();
//CHAMA A FUNÇÃO PARA FECHAR CARRINHO
fechaCarrinho();
//CHAMA A FUNÇÃO adicionarItens
adicionarItens();
//CHAMA A FUNÇÃO removerItens
removerItens();
//CHAMA A FUNÇÁO adicionarAoCarrinho
adicionarAoCarrinho();