
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
    const itemLancheModal=modal.querySelector(".itemLancheModal")

    setTimeout(() => {
        itemLancheModal.classList.add("ativo")
        
    },10);

    console.log("EXECUTOU A FUNÇÃO abrirModal");
};
//FUNÇÃO QUE VAI FECHAR O MODAL PARA O
function fecharModal(botao){
    
    const modal = botao.closest(".containerModal");
    const itemLancheModal=modal.querySelector(".itemLancheModal")
    let input = itemLancheModal.querySelector(".inputCmodal")
   
    itemLancheModal.classList.remove("ativo")
    modal.classList.remove("ativo")
    if(modal){
        setTimeout(() => {
        modal.classList.add("esconderModal")
        input.value=1;
        
    }, 250);
    }
   
    
    
   

    console.log("EXECUTOU A FUNÇÃO fecharModal")
};
//FUNÇÃO QUE RESETA O CAMPO DE INPUT DO MODAL
function limparValueModal(botao){
    const itemModal = botao.closest(".itemLancheModal");
    const input = itemModal.querySelector(".inputCmodal");
    setTimeout(() => {
        input.value=1;
    }, 200);
}
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
        calcularTotal();
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
        calcularTotal();
        
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
                calcularTotal();
            }, 200);
    };
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
};
//FUNÇÃO QUE VAI ADICIONAR O ITEM AO CARRINHO ATRAVÉS DO BOTÃO ADICIONAR AO CARRINHO E CHAMA A FUNÇÃO CHECAR CARRINHO
let carrinhoArray= [];
function colocarItemNoCarrinho(botao){
    const containerModal = botao.closest(".containerModal");
    
    if(containerModal){
        const carrinho = document.querySelector(".containerCarrinhoNav");
        carrinho.classList.add("ativo")
        setTimeout(() => {
            carrinho.classList.remove("esconde");
        }, 100);
    };
    //ITEM DO MODAL
    const itemModal = containerModal.querySelector(".itemLancheModal")
   
    
    //ID DO ITEM DENTRO DO MODAL
    const id = itemModal.getAttribute("data-id")
    //PREÇO DO ITEM PARA USAR COMO BASE NO CALCULO
    const PrecoBase = itemModal.getAttribute("data-preco")
    
        //CHECA PARA VER SE O ITEM JA ESTÁ DENTRO DO CARRINHO
        if(!carrinhoArray.includes(id)){
                carrinhoArray.push(id)
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
                    calcularTotal();
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


            

        }
        fecharModal(botao);

    console.log("EXECUTOU A FUNÇÃO COLOCAR NO carrinho");
    //CHAMA A FUNÇÃO PARA FECHAR O MODAL DEPOIS DE ABRIR O CARRINHO
   
};
//FUNÇÃO QUE VAI HABILITAR O BOTÃO DO CARINHO
function habilitarBotaoCarrinho(botao){
    const carrinho = document.querySelector(".containerCarrinhoNav");
    if(botao){
        carrinho.classList.remove("esconde")
        setTimeout(() => {
            carrinho.classList.add("ativo")
            checarCarrinho()
        }, 100);
    }
    
    console.log("EXECUTOU A FUNÇÃO HABILITAR BOTÃO CARRINHO")
    
};
//FUNÇÃO QUE VAI VERIFICAR SE O CARRINHO TEM ALGUM ITEM DENTRO E VAI ABRIR O CARRINHO
function checarCarrinho(){
    const itens = document.querySelectorAll(".containerCarrinhoNav .item:not(.modelo)")
    const carrinho = document.querySelector(".containerCarrinhoNav")
    const botaoCarrinho = document.querySelector("#cartimg")
    const comprar = document.querySelector(".comprar")
    if(itens.length >=1){
        botaoCarrinho.style.display="flex";
        
        
        
    }
    if(itens.length >=1 && carrinho.classList.contains("ativo")){
        comprar.style.display="flex";
        setTimeout(() => {
            comprar.classList.add("ativo")
        }, 100);
    }
    if(itens.length ==0){
        botaoCarrinho.style.display="none";
        carrinho.classList.add("esconde");

        comprar.classList.remove("ativo")
        comprar.style.display="none"
       
    }




    //BLOCO QUE REMOVE O ITEM DO ARRAY CARRINHO PARA PERMITIR INSERIR UM ITEM DEPOIS DELE TER SIDO EXCLUIDO
    for(let c =0; c < carrinhoArray.length; c++){
        let existe = false;
        
        for(let item =0; item < itens.length; item++){
            let dataId =itens[item].getAttribute("data-id");

            if(carrinhoArray[c]  == dataId){
                existe = true;
                break;
                
            }

        }
        if(!existe){
            carrinhoArray.splice(c,1);
            c--;
             
        }
        
        
    }
    
    console.log("checou carrinho");
    
};
//FUNÇÃO QUE VAI CALCULAR O VALOR TOTAL DO CARRINHO
let precoItensCarrinho= [];
let soma = 0;
function calcularTotal (){
    const itens = document.querySelectorAll(".containerCarrinhoNav .item:not(.modelo)");
    const precoEmtexto = document.querySelector(".valorTotal")
    
    itens.forEach(item => {
        let preco = item.querySelector(".precoItemCarrinho").textContent;
        let precoFormatado = preco.replace("R$", "",).replace(",",".").trim();
        let precConvertido = parseFloat(precoFormatado)
        precoItensCarrinho.push(precConvertido).toFixed(2);
    });
    for(let i =0; i < precoItensCarrinho.length; i++){
        soma +=precoItensCarrinho[i]
        precoEmtexto.textContent=`R$ ${soma.toFixed(2).replace(".",",")}`
    }
    
    precoItensCarrinho.splice(0,precoItensCarrinho.length)
    soma=0
    
    
    console.log("EXECUTOU A FUNÇÃO CALCULAR TOTAL")
};
//FUNÇÃO QUE VAI FECHAR O CARRINHO
function fecharCarrinho(botao){
    const carinho = document.querySelector(".containerCarrinhoNav");
    const comprar = document.querySelector(".comprar")
    if(botao){
        
        carinho.classList.remove("ativo")
        comprar.style.display="none";
        setTimeout(() => {
         //CHAMA A FUNÇÃO CHECAR CARRINHO
        carinho.classList.add("esconde")
        checarCarrinho();
        calcularTotal();
    }, 200);
    };

    
    console.log("EXECUTOU A FUNÇÃO FECHAR CARRINHO")
};
//FUNÇÃO QUE VAI ABRIR O FORMULÁRIO PARA O CLIENTE DIGITAR ENDEREÇO, NUMÉRIO ETC... E FECHAR O CARRINHO
function AbrirFormulario(botao){
    const formulario = document.querySelector(".sectionForm")
    const form =formulario.querySelector(".formulario")
    if(botao){
        
        formulario.classList.remove("esconde")

    }       
    setTimeout(() => {
        form.classList.add("ativo")
    }, 30);
    fecharCarrinho(".xCarrinho")
};
//FUNÇÃO QUE VAI FECHAR 
function fecharFormulario(botao){
    const formulario = document.querySelector(".sectionForm")
     const form =formulario.querySelector(".formulario")
    if(botao){
        formulario.classList.remove("ativo")
        form.classList.remove("ativo")
        
        setTimeout(() => {
            formulario.classList.add("esconde")
            
        }, 200);
    }
};
/*__________________________________________________________________________________________________________________________________________________________________________________________________________________________ */

//FUNÇÃO QUE VAI REALIZAR A PESQUISA DE ITENS NO SITE
function pesquisa (){
    let input = document.querySelector("#consultarPedido")
    const itens = document.querySelectorAll(".sectionLanche .itemLanche")
    

    input.addEventListener("input",()=>{
        let campo = input.value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        itens.forEach(item => {
            let itemNome = item.querySelector(".nomeLanche");
            let nome= itemNome.textContent
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
            if(!nome.includes(campo)){
                item.style.display="none"
                

            }
            else if(!item.classList.contains("excluido")){
                    item.style.display="flex"
                }
           

            
        });
    })

    
}





//FUNÇÃO QUE VAI ABRIR A ABA DE LOGIN 
function login(botao){
    let login = document.querySelector(".login")
    if(botao){
        login.classList.toggle("esconde")
    }
}
// FUNÇÃO QUE VAI FECHAR A ABA DE LOGIN SE CLICAR FORA DELA
function fecharLoginArea (){
    document.addEventListener("click",(e)=>{
        let area = e.target;
        let login = document.querySelector(".login")

        let area1 = document.querySelector(".sectionLanche")
        let area2 = document.querySelector("#containerNavTop")
        let area3 = area.closest(".sectionLanche .infoLanche")
        let area4 = area.closest(".sectionLanche .imgIndividual")

        if( area==area1 && !login.classList.contains("esconde") ) { login.classList.add("esconde"); };
        if( area==area2 && !login.classList.contains("esconde") ) { login.classList.add("esconde"); };
        if( area==area3 && !login.classList.contains("esconde") ) { login.classList.add("esconde"); };
        if( area==area4 && !login.classList.contains("esconde") ) { login.classList.add("esconde"); };

    })
}



//CHAMA A FUNÇÃO QUE VAI ABRIR A ABA DE LOGIN
botaoClickado(".containerImgUser",login)
//CHAMA A FUNÇÃO QUE VAI FECHAR A ABA DE LOGIN SE CLICAR FORA DELA
fecharLoginArea()

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
botaoClickado("#cartimg",habilitarBotaoCarrinho);
//CHAMA A FUNÇÃO QUE VAI FAZER A ALTERAÇÃO DO VALOR DO ITEM INDIVIDUAL NO DOMADO
botaoClickado(".itemLancheModal",checarModal);
//CHAMA A FUNÇÃO QUE VAI LIMPAR O CAMPO DE INPUT DO MODAL
botaoClickado(".botaoModal",limparValueModal);
//CHAMA A FUNÇAO ABRIR FORMUÁRIO
botaoClickado(".btConfirmaCompra",AbrirFormulario);
//CHAMA A FUNÇÃO QUE VAI ABRIR O FORMULÁRIO PARA O CLIENTE DIGITAR ENDEREÇO, NUMÉRIO ETC... E FECHAR O CARRINHO
botaoClickado(".fecharForm ",fecharFormulario);

//CHAMA A FUNÇÃO QUE VAI REALIZAR A PESQUISA DOS ITENS NO SITE
setTimeout(() => {
    //CHAMA A FUNÇÃO QUE VERIFICA OS ITENS DO SITE
    pesquisa();
}, 200);