/*  Este código realiza uma requisição assíncrona usando fetch para obter dados JSON
  do arquivo PHP localizado em "assets/php/config.php". */
fetch("assets/php/config.php")
    .then (resposta => resposta.json())
    .then (dados=>{
        
        dados.forEach((c,i) => {
        //SELECIONANDO O MOLDE DO MEU ITEM LANCHE
        const CloneLanche = document.querySelector(".itemLanche");
        //SELECIONANDO O CONTAINER ONDE ELE VAI SER INSERIDO
        const Container = document.querySelector(".sectionLanche");
        //CLONANDO O MOLDE DO MEU ITEM
        const clone = CloneLanche.cloneNode(true);
        clone.style.display ="flex";
        //INSERINDO INFORMAÇÕES DENTRO DO ITEM LANCHE NA PARTE DE NOME
        clone.querySelector(".imgIndividual").src=`assets/images/imgLanche/${c.id_tabela_lanche}.png`;
        clone.querySelector(".nomeLanche").textContent = `${c.nome_tabela_lanche}`;
        clone.querySelector(".precoItem").textContent = `R$ ${c.preco_tabela_lanche}`;
        clone.setAttribute("data-id",c.id_tabela_lanche);//SETANDO IDENTIFICADO INDIVIDUAL NO ITEM
        //INSERINDO O CLONE NA ÁREA
        Container.appendChild(clone);
        });
});

 //CAPTURA O ITEM PARA O MODAL
 function capturaItem(item){
  
    document.addEventListener("click", function(t){
    //PEGANDO O ITEM CORRETO ENTRE OS CLONES PARA PREECHER OS VALORES CORRETOS E MANDAR PARA O MODAL
    item = t.target.closest(".itemLanche");
    
    if(item){
      //SELECIONEI AS INFORMAÇÕES DO ITEM 
      const id = item.getAttribute("data-id");//CAPTURANDO IDENTIFICADOR INIDVIDUAL
      const img = item.querySelector(".imgIndividual")?.src;
      const nome = item.querySelector(".nomeLanche")?.textContent;
      const valor = item.querySelector(".precoItem")?.textContent;
      

      //PASSEI PARA O MODAL
      const modal = item.querySelector(".itemLancheModal");
      modal.setAttribute("data-id",id);//SETANDO IDENTIFICADO INDIVIDUAL NO ITEM
      modal.querySelector(".imgModalLanche").src=img;
      modal.querySelector(".nomeLancheModal ").textContent=nome;
      modal.querySelector(".valorIndividualModal").textContent=`${valor}`;
    };

    
  });
  console.log("CHAMOU A FUNÇÃO captura")
 };


//CHAMA A FUNÇÃO capturaItem
 capturaItem(".itemLanche")

