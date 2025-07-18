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
    const carrinho = document.querySelector(".containerCarrinhoNav");//CARRINHO SELECIONADO
    carrinho.classList.remove("esconde");
    
    //CHAMA A FUNÇÃO FECHAR MODAL PASSANDO O PARÂMETRO CORRETO PARA FUNCIONAR
    fecharModal(modalDoItem);

    //CAPTURA AS INFORMAÇÕES DO ITEM DENTRO DO MODAL QUE O CLIENTE CLICOU PARA ADICIONAR AO CARRINHO
    const img = modalDoItem.querySelector(".imgModalLanche")?.src;
    const qtd = modalDoItem.querySelector(".inputCmodal")?.value;
    const preco = modalDoItem.querySelector(".valorIndividualModal")?.textContent;

    //MODELO PARA REALIZAR O CLONE DO ITEM
    const modelo = document.querySelector(".item");
    const clone = modelo.cloneNode(true)
    clone.style.display ="flex";
    //ADICIONANDO OS ATRIBUTOS DO ITEM NO CLONE
    clone.querySelector(".imgItem").src=img;
    clone.querySelector(".precoItemCarrinho").textContent=preco
    clone.querySelector(".qtCarrinhonav").value=qtd

    if(clone){
        carrinho.appendChild(clone)
        console.log("clonou o item")
        
    }

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
//FUNÇÃO QUE VAI REMOVER DIMINUIR A QUANTIDADE DE ITEM NO MODAL
function subtrairItem(botao){
    if(!botao){
        return;
    }
    document.addEventListener("click",(e)=>{
        const subtrair = e.target.closest(botao);
        if(subtrair){
            //SELECIONANDO O MODAL DO ITEM CORRETO PARA PEGOR O INPUT CORRETO
            const modal = subtrair.closest(".itemLancheModal")
            const valueImput = modal.querySelector(".inputCmodal")

            const subtrai = parseInt(valueImput.value,10);
            //CONDIÇÃO PARA VALOR NÃO FICAR NEGATIVO
            if(subtrai > 1){
                valueImput.value= subtrai - 1
            }
        }
    })
    
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

//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DE ITENS DENTRO DO ITEM NO CARRINHO SOMANDO
function btSomarCarrinho(botao){
    document.addEventListener("click",(e)=>{
        //SELECIONANDO O BOTÃO DE MAIS DO ITEM ESPECÍFICO DENTRO DO CARINHO
        const btnMais = e.target.closest(botao);
        if(btnMais){
            //ITEM ESPECÍFICO SELECIONADO
            const item = btnMais.closest(".item")
            //INPUT DO ITEM ESPECÍFICO SELECIONADO
            const inputValue = item.querySelector(".qtCarrinhonav")
            //VALOR CONVERTIDO PARA INTEIRO E ADICIONADO
            const adicionar = parseInt(inputValue.value,10);
            inputValue.value=adicionar+1   
        }
    })
}
//FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DE ITENS DENTRO DO ITEM NO CARRINHO SUBTRAINDO
function btSubtrairCarrinho(botao){
    document.addEventListener("click",(e)=>{
        const btnSub = e.target.closest(botao);
        if(!btnSub){
            return
        }
        //CAPTURA O ITEM CORRETO 
        const item = btnSub.closest(".item");
        if(item){
            //CAPTURA O INPUT CORRETO 
            const inputValue = item.querySelector(".qtCarrinhonav");
            const btnSu = parseInt(inputValue.value);
            inputValue.value =btnSu -1;

            //SE O ITEM FOR MENOR QUE 1 OU SEJA === 0 ELE REMOVE O ITEM.
            if(inputValue.value < 1){
                item.remove()
                
            }
        }
    });
};


//CHAMA FUNÇÃO QUE VAI ABRIR O MODAL REMOVENDO A CLASS QUE ESCONDE ELE
botaoClickado(".imgBotaoAbrirModal",abrirModal);
//CHAMA FUNÇÃO QUE VAI FECHAR O MODAL ADICIONANDO A CLASS QUE ESCONDE ELE
botaoClickado(".fecharModal",fecharModal);
//CHAMA FUNÇÃO QUE VAI ABRIR O CARRINHO DE COMPRAS
botaoClickado(".botaoModal",adicionarAoCarrinho);




//CHAMA FUNÇÃO QUE VAI FECHAR O CARRINHO
fecharCarrinho(".xCarrinho")
//CHAMA FUNÇÃO QUE VAI ALMENTAR A QUANTIDADE DE ITENS DENTRO DO MODAL
adicionarItem(".btnMais");
//CHAMA FUNÇÃO QUE VAI SUBTRAIR A QUANTIDADE DE ITENS DENTRO DO MODAL
subtrairItem(".btnMenos");
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO REALIZANDO A SOMA
btSomarCarrinho(".maisCarrinho");
//CHAMA A FUNÇÃO QUE VAI ALTERAR A QUANTIDADE DO ITEM ESCOLHIDO REALIZANDO A SUBTRAÇÃO
btSubtrairCarrinho(".menosCarrinho");