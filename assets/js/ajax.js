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
        //INSERINDO INFORMAÇÕES DENTRO DO ITEM LANCHE NA PARTE DE NOME
        clone.querySelector(".imgIndividual").src=`assets/images/imgLanche/${c.id_Lanche}.png`;
        clone.querySelector(".nomeLanche").textContent = `${c.nome_Lanche}`;
        clone.querySelector(".precoItem").textContent = `R$ ${c.preco_Lanche}`;
        //INSERINDO O CLONE NA ÁREA
        Container.appendChild(clone);
        });
});

 //CAPTURA O ITEM PARA O MODAL
 function capturaItem(){
  
    document.addEventListener("click", function(t){

      //SELECIONEI AS INFORMAÇÕES DO ITEM 
    const item = t.target.closest(".itemLanche")
    const img = item.querySelector(".imgIndividual").src;
    const nome = item.querySelector(".nomeLanche").textContent;
    const valor = item.querySelector(".precoItem").textContent;
    if(item){
      //PASSEI PARA O MODAL
      const modal = item.querySelector(".itemLancheModal")
      modal.querySelector(".imgModalLanche").src=img;
      modal.querySelector(".nomeLancheModal ").textContent=nome;
      modal.querySelector(".valorIndividualModal").textContent=`${valor}`;
    }

    
  })
  
 }

















//CHAMA A FUNÇÃO capturaItem
 capturaItem();

