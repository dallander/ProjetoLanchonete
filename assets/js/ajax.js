

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
        clone.querySelector(".nomeLanche").textContent = "Lanche Clonado";

        //INSERINDO O CLONE NA ÁREA
        Container.appendChild(clone);
        });
});


